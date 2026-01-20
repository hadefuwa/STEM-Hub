import React, { useState, useEffect, useRef } from 'react';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';
import { speak, stop } from '../utils/textToSpeech';
import { useNavigate } from 'react-router-dom';

const SIGHT_WORD_SETS = {
    'level-2': {
        title: 'Sight Words: Level 2',
        words: [
            "said", "some", "could", "every", "first",
            "also", "two", "here", "then", "look",
            "more", "other", "use", "many", "way",
            "went", "after", "again", "once", "upon"
        ]
    }
};

function SightWordGame({ lesson }) {
    const navigate = useNavigate();
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [feedback, setFeedback] = useState(null); // 'correct', 'incorrect'
    const [selectedOption, setSelectedOption] = useState(null);

    const addProgress = useDataStore(state => state.addProgress);
    const getNextProgressId = useDataStore(state => state.getNextProgressId);
    const getUserId = useDataStore(state => state.getUserId);
    const saveData = useDataStore(state => state.saveData);
    const getNextLessonUrl = useDataStore(state => state.getNextLessonUrl);

    const wordSet = SIGHT_WORD_SETS['level-2']; // Default or from lesson
    const currentWord = wordSet.words[currentWordIndex];

    useEffect(() => {
        generateOptions();
        speakIntro();
        return () => stop();
    }, [currentWordIndex]);

    const speakIntro = () => {
        speak(`Find the word: ${currentWord}`, { rate: 0.9 });
    };

    const generateOptions = () => {
        const otherWords = wordSet.words.filter(w => w !== currentWord);
        const randomOthers = otherWords.sort(() => Math.random() - 0.5).slice(0, 3);
        const allOptions = [currentWord, ...randomOthers].sort(() => Math.random() - 0.5);
        setOptions(allOptions);
    };

    const handleOptionClick = (option) => {
        if (feedback) return;

        setSelectedOption(option);
        if (option === currentWord) {
            setFeedback('correct');
            setScore(s => s + 5);
            speak(`Excellent! ${currentWord}`, { rate: 1.0 });

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
            speak(`Not that one. Try again!`, { rate: 1.0 });
            setTimeout(() => {
                setFeedback(null);
                setSelectedOption(null);
            }, 1000);
        }
    };

    const endGame = () => {
        setIsGameOver(true);

        if (lesson) {
            const finalScore = Math.min(100, (score / (wordSet.words.length * 5)) * 100);
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
        const percentage = (score / (wordSet.words.length * 5)) * 100;
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
                    <div style={styles.finalScore}>Final Score: {score}</div>

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
                    <button style={styles.speakButton} onClick={speakIntro}>
                        🔊 Listen Again
                    </button>

                    <div style={styles.optionsGrid}>
                        {options.map(option => (
                            <button
                                key={option}
                                onClick={() => handleOptionClick(option)}
                                style={{
                                    ...styles.optionButton,
                                    backgroundColor: selectedOption === option
                                        ? (feedback === 'correct' ? '#4CAF50' : '#f44336')
                                        : 'white',
                                    color: selectedOption === option ? 'white' : '#333'
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    {feedback === 'correct' && <div style={styles.feedbackCorrect}>✨ Correct! ✨</div>}
                    {feedback === 'incorrect' && <div style={styles.feedbackIncorrect}>Opps! Try again!</div>}
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
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
        color: 'white'
    },
    glassCard: {
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)',
        borderRadius: '30px',
        padding: '40px',
        width: '100%',
        maxWidth: '700px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        textAlign: 'center'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
    },
    title: {
        margin: 0,
        fontSize: '28px',
        fontWeight: '800'
    },
    scoreBar: {
        fontSize: '22px',
        fontWeight: '600'
    },
    scoreValue: {
        color: '#FFD700'
    },
    gameArea: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
    },
    speakButton: {
        padding: '10px 25px',
        fontSize: '18px',
        borderRadius: '50px',
        border: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        color: 'white',
        cursor: 'pointer',
        transition: 'background 0.3s'
    },
    optionsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        width: '100%'
    },
    optionButton: {
        padding: '30px',
        fontSize: '26px',
        fontWeight: '700',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s'
    },
    feedbackCorrect: {
        fontSize: '28px',
        color: '#4CAF50',
        fontWeight: '800'
    },
    feedbackIncorrect: {
        fontSize: '28px',
        color: '#ff5252',
        fontWeight: '800'
    }
    // Reuse previous styles for game over etc.
    ,
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
    ,
    footer: {
        marginTop: '40px',
        fontSize: '18px',
        color: 'rgba(255, 255, 255, 0.7)'
    }
};

export default SightWordGame;
