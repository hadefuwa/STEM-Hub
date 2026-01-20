import React, { useState, useEffect, useRef } from 'react';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';
import { speak, stop } from '../utils/textToSpeech';
import { useNavigate } from 'react-router-dom';

const WORD_SETS = {
    'ai-ay': {
        title: 'Long A Sound: ai or ay?',
        words: [
            { word: "rain", pattern: "ai", display: "r _ _ n" },
            { word: "play", pattern: "ay", display: "pl _ _" },
            { word: "train", pattern: "ai", display: "tr _ _ n" },
            { word: "day", pattern: "ay", display: "d _ _" },
            { word: "snail", pattern: "ai", display: "sn _ _ l" },
            { word: "stay", pattern: "ay", display: "st _ _" },
            { word: "paint", pattern: "ai", display: "p _ _ nt" },
            { word: "tray", pattern: "ay", display: "tr _ _" },
            { word: "wait", pattern: "ai", display: "w _ _ t" },
            { word: "say", pattern: "ay", display: "s _ _" }
        ],
        options: ["ai", "ay"]
    }
};

function VowelSoundGame({ lesson }) {
    const navigate = useNavigate();
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [feedback, setFeedback] = useState(null); // 'correct', 'incorrect'
    const [selectedOption, setSelectedOption] = useState(null);
    const [showConfetti, setShowConfetti] = useState(false);

    const addProgress = useDataStore(state => state.addProgress);
    const getNextProgressId = useDataStore(state => state.getNextProgressId);
    const getUserId = useDataStore(state => state.getUserId);
    const saveData = useDataStore(state => state.saveData);
    const getNextLessonUrl = useDataStore(state => state.getNextLessonUrl);

    // Determine word set based on lesson title or ID
    const wordSetId = lesson?.title?.includes('ai/ay') ? 'ai-ay' : 'ai-ay';
    const wordSet = WORD_SETS[wordSetId];
    const currentWord = wordSet.words[currentWordIndex];

    useEffect(() => {
        // Speak first word intro
        const introText = `Which letters are missing? ${currentWord.word}`;
        speak(introText, { rate: 0.9 });
        return () => stop();
    }, [currentWordIndex, currentWord.word]);

    const handleOptionClick = (option) => {
        if (feedback) return;

        setSelectedOption(option);
        if (option === currentWord.pattern) {
            setFeedback('correct');
            setScore(s => s + 10);
            speak(`Correct! ${currentWord.word}`, { rate: 1.0 });

            setTimeout(() => {
                if (currentWordIndex < wordSet.words.length - 1) {
                    setCurrentWordIndex(i => i + 1);
                    setFeedback(null);
                    setSelectedOption(null);
                } else {
                    endGame();
                }
            }, 1500);
        } else {
            setFeedback('incorrect');
            speak(`Not quite. Try again!`, { rate: 1.0 });
            setTimeout(() => {
                setFeedback(null);
                setSelectedOption(null);
            }, 1000);
        }
    };

    const endGame = () => {
        setIsGameOver(true);
        setShowConfetti(true);

        if (lesson) {
            const finalScore = (score / (wordSet.words.length * 10)) * 100;
            const userId = getUserId();
            const progressId = getNextProgressId();
            const progress = new Progress({
                id: progressId,
                studentId: userId,
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
        const percentage = (score / (wordSet.words.length * 10)) * 100;
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
                    <div style={styles.finalScore}>Score: {score} / {wordSet.words.length * 10}</div>

                    <div style={styles.buttonGroup}>
                        <button
                            onClick={() => navigate('/lessons')}
                            style={styles.secondaryButton}
                        >
                            Back to Lessons
                        </button>
                        <button
                            onClick={() => {
                                const { url } = getNextLessonUrl(lesson);
                                navigate(url);
                            }}
                            style={styles.primaryButton}
                        >
                            Next Lesson →
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <div style={styles.glassCard}>
                <div style={styles.header}>
                    <h2 style={styles.title}>{wordSet.title}</h2>
                    <div style={styles.scoreBar}>
                        Score: <span style={styles.scoreValue}>{score}</span>
                    </div>
                </div>

                <div style={styles.gameArea}>
                    <div style={styles.wordDisplay}>
                        {feedback === 'correct' ? currentWord.word : currentWord.display}
                    </div>

                    <div style={styles.optionsGrid}>
                        {wordSet.options.map(option => (
                            <button
                                key={option}
                                onClick={() => handleOptionClick(option)}
                                style={{
                                    ...styles.optionButton,
                                    backgroundColor: selectedOption === option
                                        ? (feedback === 'correct' ? '#4CAF50' : '#f44336')
                                        : 'rgba(255, 255, 255, 0.8)'
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    {feedback === 'correct' && <div style={styles.feedbackCorrect}>✨ Well Done! ✨</div>}
                    {feedback === 'incorrect' && <div style={styles.feedbackIncorrect}>Keep trying!</div>}
                </div>

                <div style={styles.footer}>
                    Word {currentWordIndex + 1} of {wordSet.words.length}
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
        minHeight: '500px',
        padding: '20px',
        background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        borderRadius: '12px',
        animation: 'fadeIn 0.5s ease-out'
    },
    glassCard: {
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        borderRadius: '30px',
        padding: '40px',
        width: '100%',
        maxWidth: '600px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        textAlign: 'center'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '40px'
    },
    title: {
        margin: 0,
        fontSize: '24px',
        color: '#4a4a4a',
        fontWeight: '800'
    },
    scoreBar: {
        fontSize: '20px',
        color: '#666',
        fontWeight: '600'
    },
    scoreValue: {
        color: '#FF9800',
        fontSize: '24px'
    },
    gameArea: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
    },
    wordDisplay: {
        fontSize: '80px',
        fontWeight: '900',
        letterSpacing: '8px',
        color: '#2c3e50',
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        margin: '20px 0'
    },
    optionsGrid: {
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        width: '100%'
    },
    optionButton: {
        padding: '20px 50px',
        fontSize: '32px',
        fontWeight: '800',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        color: '#333',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s, background-color 0.2s'
    },
    feedbackCorrect: {
        fontSize: '24px',
        color: '#2e7d32',
        fontWeight: '700',
        marginTop: '20px',
        animation: 'bounceIn 0.5s'
    },
    feedbackIncorrect: {
        fontSize: '24px',
        color: '#c62828',
        fontWeight: '700',
        marginTop: '20px',
        animation: 'shake 0.5s'
    },
    footer: {
        marginTop: '40px',
        fontSize: '16px',
        color: '#7f8c8d'
    },
    gameOverCard: {
        background: 'white',
        padding: '60px',
        borderRadius: '40px',
        textAlign: 'center',
        boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
        maxWidth: '500px',
        width: '100%'
    },
    medalEmoji: {
        fontSize: '120px',
        marginBottom: '20px'
    },
    medalTitle: {
        fontSize: '48px',
        margin: '10px 0',
        fontWeight: '900'
    },
    finalScore: {
        fontSize: '28px',
        color: '#666',
        marginBottom: '40px'
    },
    buttonGroup: {
        display: 'flex',
        gap: '20px',
        justifyContent: 'center'
    },
    primaryButton: {
        padding: '15px 30px',
        fontSize: '18px',
        fontWeight: '700',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    secondaryButton: {
        padding: '15px 30px',
        fontSize: '18px',
        fontWeight: '700',
        backgroundColor: '#f8f9fa',
        color: '#333',
        border: '2px solid #ddd',
        borderRadius: '15px',
        cursor: 'pointer'
    }
};

export default VowelSoundGame;
