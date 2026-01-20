import React, { useState, useEffect } from 'react';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';
import { speak, stop } from '../utils/textToSpeech';
import { useNavigate } from 'react-router-dom';

const SENTENCES = [
    { words: ["The", "cat", "sleeps"], target: "The cat sleeps." },
    { words: ["Birds", "can", "fly"], target: "Birds can fly." },
    { words: ["I", "like", "apples"], target: "I like apples." },
    { words: ["The", "sun", "is", "hot"], target: "The sun is hot." },
    { words: ["She", "reads", "a", "book"], target: "She reads a book." },
    { words: ["We", "play", "in", "the", "park"], target: "We play in the park." }
];

function SentenceBuildingGame({ lesson }) {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [builtSentence, setBuiltSentence] = useState([]);
    const [availableWords, setAvailableWords] = useState([]);
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [feedback, setFeedback] = useState(null);

    const addProgress = useDataStore(state => state.addProgress);
    const getNextProgressId = useDataStore(state => state.getNextProgressId);
    const getUserId = useDataStore(state => state.getUserId);
    const saveData = useDataStore(state => state.saveData);
    const getNextLessonUrl = useDataStore(state => state.getNextLessonUrl);

    const currentQ = SENTENCES[currentIndex];

    useEffect(() => {
        setAvailableWords(shuffle([...currentQ.words]));
        setBuiltSentence([]);
        setFeedback(null);
        speakIntro();
        return () => stop();
    }, [currentIndex]);

    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

    const speakIntro = () => {
        speak(`Build this sentence: ${currentQ.target}`, { rate: 0.9 });
    };

    const handleWordClick = (word, index) => {
        const newBuilt = [...builtSentence, word];
        const newAvailable = availableWords.filter((_, i) => i !== index);
        setBuiltSentence(newBuilt);
        setAvailableWords(newAvailable);
        speak(word);

        if (newAvailable.length === 0) {
            if (newBuilt.join(" ") === currentQ.words.join(" ")) {
                setFeedback('correct');
                setScore(s => s + 10);
                speak(`Great building! ${currentQ.target}`, { rate: 1.0 });

                setTimeout(() => {
                    if (currentIndex < SENTENCES.length - 1) {
                        setCurrentIndex(i => i + 1);
                    } else {
                        endGame();
                    }
                }, 2000);
            } else {
                setFeedback('incorrect');
                speak(`Not quite right. Let's try that one again!`, { rate: 1.0 });
                setTimeout(() => {
                    setAvailableWords(shuffle([...currentQ.words]));
                    setBuiltSentence([]);
                    setFeedback(null);
                }, 2000);
            }
        }
    };

    const endGame = () => {
        setIsGameOver(true);
        if (lesson) {
            const finalScore = (score / (SENTENCES.length * 10)) * 100;
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
        const percentage = (score / (SENTENCES.length * 10)) * 100;
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
                    <h2 style={styles.title}>Sentence Architect</h2>
                    <div style={styles.scoreBar}>Score: <span style={styles.scoreValue}>{score}</span></div>
                </div>

                <div style={styles.questionArea}>
                    <div style={styles.prompt}>Click words in order to build the sentence:</div>
                    <div style={styles.dropZone}>
                        {builtSentence.length === 0 ? <span style={{ opacity: 0.5 }}>Start building...</span> : builtSentence.join(" ")}
                    </div>
                </div>

                <div style={styles.optionsArea}>
                    {availableWords.map((word, index) => (
                        <button
                            key={`${word}-${index}`}
                            onClick={() => handleWordClick(word, index)}
                            style={styles.wordButton}
                        >
                            {word}
                        </button>
                    ))}
                </div>

                {feedback === 'correct' && <div style={styles.feedbackMsg}>✨ Perfect Structure! ✨</div>}
                {feedback === 'incorrect' && <div style={styles.errorMsg}>❌ Try again! ❌</div>}

                <div style={styles.progress}>
                    Sentence {currentIndex + 1} of {SENTENCES.length}
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
        background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        borderRadius: '20px'
    },
    glassCard: {
        background: 'rgba(255, 255, 255, 0.15)',
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
    questionArea: {
        marginBottom: '50px'
    },
    prompt: { fontSize: '22px', marginBottom: '20px', opacity: 0.9 },
    dropZone: {
        fontSize: '40px',
        fontWeight: '700',
        minHeight: '80px',
        padding: '20px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        border: '2px dashed rgba(255,255,255,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    optionsArea: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '15px',
        justifyContent: 'center',
        width: '100%'
    },
    wordButton: {
        padding: '15px 30px',
        fontSize: '24px',
        fontWeight: '700',
        backgroundColor: 'white',
        color: '#11998e',
        border: 'none',
        borderRadius: '15px',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
    },
    feedbackMsg: { fontSize: '30px', fontWeight: '800', marginTop: '30px', color: '#FFEB3B' },
    errorMsg: { fontSize: '30px', fontWeight: '800', marginTop: '30px', color: '#f44336' },
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

export default SentenceBuildingGame;
