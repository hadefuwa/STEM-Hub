import React, { useState, useEffect } from 'react';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';
import { speak, stop } from '../utils/textToSpeech';
import { useNavigate } from 'react-router-dom';

const COMPOUND_WORDS = [
    { part1: "sun", part2: "flower", full: "sunflower" },
    { part1: "rain", part2: "bow", full: "rainbow" },
    { part1: "cup", part2: "cake", full: "cupcake" },
    { part1: "book", part2: "shelf", full: "bookshelf" },
    { part1: "snow", part2: "man", full: "snowman" },
    { part1: "foot", part2: "ball", full: "football" },
    { part1: "play", part2: "ground", full: "playground" },
    { part1: "butter", part2: "fly", full: "butterfly" },
    { part1: "pop", part2: "corn", full: "popcorn" },
    { part1: "note", part2: "book", full: "notebook" }
];

function CompoundWordGame({ lesson }) {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const addProgress = useDataStore(state => state.addProgress);
    const getNextProgressId = useDataStore(state => state.getNextProgressId);
    const getUserId = useDataStore(state => state.getUserId);
    const saveData = useDataStore(state => state.saveData);
    const getNextLessonUrl = useDataStore(state => state.getNextLessonUrl);

    const currentPair = COMPOUND_WORDS[currentIndex];

    useEffect(() => {
        generateOptions();
        speakIntro();
        return () => stop();
    }, [currentIndex]);

    const speakIntro = () => {
        speak(`${currentPair.part1} plus what word makes ${currentPair.full}?`, { rate: 0.9 });
    };

    const generateOptions = () => {
        const others = COMPOUND_WORDS.filter(p => p.part2 !== currentPair.part2);
        const randomOthers = others.sort(() => Math.random() - 0.5).map(p => p.part2).slice(0, 3);
        const allOptions = [currentPair.part2, ...randomOthers].sort(() => Math.random() - 0.5);
        setOptions(allOptions);
    };

    const handleOptionClick = (option) => {
        if (feedback) return;
        setSelectedOption(option);

        if (option === currentPair.part2) {
            setFeedback('correct');
            setScore(s => s + 10);
            speak(`Spot on! ${currentPair.part1} plus ${currentPair.part2} is ${currentPair.full}!`, { rate: 1.0 });

            setTimeout(() => {
                if (currentIndex < COMPOUND_WORDS.length - 1) {
                    setCurrentIndex(i => i + 1);
                    setFeedback(null);
                    setSelectedOption(null);
                } else {
                    endGame();
                }
            }, 2000);
        } else {
            setFeedback('incorrect');
            speak(`Not quite. Try a different one!`, { rate: 1.0 });
            setTimeout(() => {
                setFeedback(null);
                setSelectedOption(null);
            }, 1000);
        }
    };

    const endGame = () => {
        setIsGameOver(true);
        if (lesson) {
            const finalScore = (score / (COMPOUND_WORDS.length * 10)) * 100;
            const progress = new Progress({
                id: getNextProgressId(),
                studentId: getUserId(),
                activityType: 'Lesson',
                activityId: lesson.id,
                yearId: lesson.yearId,
                subjectId: lesson.subjectId,
                lessonNumber: lesson.lessonNumber,
                isCompleted: true,
                completedAt: new Date(),
                score: finalScore,
            });
            addProgress(progress).then(() => saveData());
        }
    };

    const getMedal = () => {
        const percentage = (score / (COMPOUND_WORDS.length * 10)) * 100;
        if (percentage >= 95) return { type: 'Platinum', color: '#E5E4E2', emoji: '🏆' };
        if (percentage >= 85) return { type: 'Gold', color: '#FFD700', emoji: '🥇' };
        if (percentage >= 70) return { type: 'Silver', color: '#C0C0C0', emoji: '🥈' };
        return { type: 'Bronze', color: '#CD7F32', emoji: '🥉' };
    };

    if (isGameOver) {
        const medal = getMedal();
        return (
            <div style={styles.container}>
                <div style={styles.gameOverCard}>
                    <div style={styles.medalEmoji}>{medal.emoji}</div>
                    <h2 style={{ ...styles.medalTitle, color: medal.color }}>{medal.type} Medal!</h2>
                    <div style={styles.finalScore}>Total Score: {score}</div>
                    <div style={styles.buttonGroup}>
                        <button onClick={() => navigate('/lessons')} style={styles.secondaryButton}>Back to Lessons</button>
                        <button onClick={() => { const { url } = getNextLessonUrl(lesson); navigate(url); }} style={styles.primaryButton}>Next Lesson →</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <div style={styles.glassCard}>
                <div style={styles.header}>
                    <h2 style={styles.title}>Compound Word Matcher</h2>
                    <div style={styles.scoreBar}>Score: <span style={styles.scoreValue}>{score}</span></div>
                </div>

                <div style={styles.equation}>
                    <div style={styles.wordBox}>{currentPair.part1}</div>
                    <div style={styles.plus}>+</div>
                    <div style={styles.wordBoxBlank}>?</div>
                    <div style={styles.equals}>=</div>
                    <div style={styles.wordBoxFull}>{currentPair.full}</div>
                </div>

                <div style={styles.optionsArea}>
                    {options.map(option => (
                        <button
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            style={{
                                ...styles.optionButton,
                                backgroundColor: selectedOption === option
                                    ? (feedback === 'correct' ? '#4CAF50' : '#f44336')
                                    : 'rgba(255, 255, 255, 0.9)',
                                color: selectedOption === option ? 'white' : '#333'
                            }}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                {feedback === 'correct' && <div style={styles.feedbackMsg}>⭐ Fantastic! ⭐</div>}

                <div style={styles.progress}>
                    Progress: {currentIndex + 1} / {COMPOUND_WORDS.length}
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '600px',
        padding: '30px',
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        borderRadius: '20px'
    },
    glassCard: {
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(15px)',
        borderRadius: '40px',
        padding: '50px',
        width: '100%',
        maxWidth: '800px',
        boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        textAlign: 'center',
        color: 'white'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '50px'
    },
    title: { fontSize: '32px', margin: 0, fontWeight: '900' },
    scoreBar: { fontSize: '24px', fontWeight: '700' },
    scoreValue: { color: '#FFEB3B' },
    equation: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        marginBottom: '50px',
        flexWrap: 'wrap'
    },
    wordBox: {
        padding: '15px 30px',
        background: 'white',
        color: '#333',
        borderRadius: '15px',
        fontSize: '32px',
        fontWeight: '800',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
    },
    wordBoxBlank: {
        padding: '15px 30px',
        background: 'rgba(0,0,0,0.1)',
        color: 'white',
        borderRadius: '15px',
        fontSize: '32px',
        fontWeight: '800',
        border: '3px dashed white'
    },
    wordBoxFull: {
        padding: '15px 30px',
        background: '#4CAF50',
        color: 'white',
        borderRadius: '15px',
        fontSize: '32px',
        fontWeight: '800',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
    },
    plus: { fontSize: '40px', fontWeight: '900' },
    equals: { fontSize: '40px', fontWeight: '900' },
    optionsArea: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        width: '100%'
    },
    optionButton: {
        padding: '25px',
        fontSize: '28px',
        fontWeight: '700',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
    },
    feedbackMsg: { fontSize: '30px', fontWeight: '800', marginTop: '30px' },
    progress: { marginTop: '40px', fontSize: '20px', color: 'rgba(255,255,255,0.8)' },
    gameOverCard: {
        background: 'white',
        padding: '60px',
        borderRadius: '40px',
        textAlign: 'center',
        boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
        maxWidth: '500px',
        width: '100%',
        color: '#333'
    },
    medalEmoji: { fontSize: '120px', marginBottom: '20px' },
    medalTitle: { fontSize: '48px', margin: '10px 0', fontWeight: '900' },
    finalScore: { fontSize: '28px', color: '#666', marginBottom: '40px' },
    buttonGroup: { display: 'flex', gap: '20px', justifyContent: 'center' },
    primaryButton: { padding: '15px 30px', fontSize: '18px', fontWeight: '700', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '15px', cursor: 'pointer' },
    secondaryButton: { padding: '15px 30px', fontSize: '18px', fontWeight: '700', backgroundColor: '#f8f9fa', color: '#333', border: '2px solid #ddd', borderRadius: '15px', cursor: 'pointer' }
};

export default CompoundWordGame;
