import React, { useState, useEffect } from 'react';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';
import { speak, stop } from '../utils/textToSpeech';
import { useNavigate } from 'react-router-dom';

const STORY_DATA = {
    title: "The Helpful Robot",
    text: "Once there was a small robot named Rusty. Rusty lived in a big factory. His job was to help carry heavy boxes. One day, Rusty saw a little bird that had flown into the factory. The bird was lost and scared. Rusty picked up the bird gently and carried it outside to a green tree. The bird chirped 'thank you' and Rusty went back to work with a happy beep.",
    questions: [
        { q: "Where did Rusty live?", options: ["A garden", "A factory", "A house", "A school"], a: "A factory" },
        { q: "What was Rusty's job?", options: ["Painting walls", "Cleaning floors", "Carrying heavy boxes", "Fixing machines"], a: "Carrying heavy boxes" },
        { q: "What found its way into the factory?", options: ["A cat", "A butterfly", "A bird", "A dog"], a: "A bird" },
        { q: "Where did Rusty take the bird?", options: ["To a pond", "To a green tree", "To a nest", "To the roof"], a: "To a green tree" },
        { q: "How did Rusty feel at the end?", options: ["Sad", "Tired", "Happy", "Angry"], a: "Happy" }
    ]
};

function ReadingComprehensionGame({ lesson }) {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(-1); // -1 means showing story
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const addProgress = useDataStore(state => state.addProgress);
    const getNextProgressId = useDataStore(state => state.getNextProgressId);
    const getUserId = useDataStore(state => state.getUserId);
    const saveData = useDataStore(state => state.saveData);
    const getNextLessonUrl = useDataStore(state => state.getNextLessonUrl);

    const currentQ = STORY_DATA.questions[currentIndex];

    useEffect(() => {
        if (currentIndex === -1) {
            speak(`Listen to the story: ${STORY_DATA.title}. ${STORY_DATA.text}`);
        } else if (currentIndex < STORY_DATA.questions.length) {
            speak(currentQ.q);
        }
        return () => stop();
    }, [currentIndex]);

    const handleOptionClick = (option) => {
        if (feedback) return;
        setSelectedOption(option);

        if (option === currentQ.a) {
            setFeedback('correct');
            setScore(s => s + 20);
            speak(`Correct!`, { rate: 1.0 });

            setTimeout(() => {
                if (currentIndex < STORY_DATA.questions.length - 1) {
                    setCurrentIndex(i => i + 1);
                    setFeedback(null);
                    setSelectedOption(null);
                } else {
                    endGame();
                }
            }, 1500);
        } else {
            setFeedback('incorrect');
            speak(`Not quite. Look back at the story!`, { rate: 1.0 });
            setTimeout(() => {
                setFeedback(null);
                setSelectedOption(null);
            }, 1000);
        }
    };

    const endGame = () => {
        setIsGameOver(true);
        if (lesson) {
            const finalScore = (score / (STORY_DATA.questions.length * 20)) * 100;
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
        const percentage = score;
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

    if (currentIndex === -1) {
        return (
            <div style={styles.container}>
                <div style={styles.glassCard}>
                    <h2 style={styles.title}>{STORY_DATA.title}</h2>
                    <div style={styles.storyText}>{STORY_DATA.text}</div>
                    <button onClick={() => setCurrentIndex(0)} style={styles.startButton}>I'm Ready for Questions! 📖</button>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <div style={styles.glassCard}>
                <div style={styles.header}>
                    <h2 style={styles.title}>Super Reader Quiz</h2>
                    <div style={styles.scoreBar}>Score: <span style={styles.scoreValue}>{score}</span></div>
                </div>

                <div style={styles.questionArea}>
                    <div style={styles.questionText}>{currentQ.q}</div>
                </div>

                <div style={styles.optionsArea}>
                    {currentQ.options.map(option => (
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

                {feedback === 'correct' && <div style={styles.feedbackMsg}>⭐ Great Understanding! ⭐</div>}

                <div style={styles.progress}>
                    Question {currentIndex + 1} of {STORY_DATA.questions.length}
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
        background: 'linear-gradient(135deg, #a8c0ff 0%, #3f2b96 100%)',
        borderRadius: '20px'
    },
    glassCard: {
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(15px)',
        borderRadius: '40px',
        padding: '50px',
        width: '100%',
        maxWidth: '850px',
        boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        textAlign: 'center',
        color: 'white'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '40px'
    },
    title: { fontSize: '36px', margin: 0, fontWeight: '900', color: '#FFEB3B' },
    storyText: {
        fontSize: '24px',
        lineHeight: '1.8',
        textAlign: 'left',
        padding: '30px',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '20px',
        marginBottom: '30px',
        fontStyle: 'italic'
    },
    startButton: {
        padding: '20px 40px',
        fontSize: '24px',
        fontWeight: '700',
        backgroundColor: '#FFEB3B',
        color: '#3f2b96',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
    },
    scoreBar: { fontSize: '24px', fontWeight: '700' },
    scoreValue: { color: '#FFEB3B' },
    questionArea: {
        marginBottom: '40px'
    },
    questionText: {
        fontSize: '32px',
        fontWeight: '800',
        lineHeight: '1.4'
    },
    optionsArea: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        width: '100%'
    },
    optionButton: {
        padding: '25px',
        fontSize: '22px',
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

export default ReadingComprehensionGame;
