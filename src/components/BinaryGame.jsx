import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';

function BinaryGame({ lesson }) {
    const navigate = useNavigate();
    const addProgress = useDataStore(state => state.addProgress);
    const getNextLessonUrl = useDataStore(state => state.getNextLessonUrl);
    const disableStudyMode = useDataStore(state => state.disableStudyMode);
    const getNextProgressId = useDataStore(state => state.getNextProgressId);
    const getUserId = useDataStore(state => state.getUserId);
    const saveData = useDataStore(state => state.saveData);

    const [targetNumber, setTargetNumber] = useState(0);
    const [bits, setBits] = useState([0, 0, 0, 0]); // 4 bits: 8, 4, 2, 1
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    // Generate a new target number (1-15)
    const generateTarget = () => {
        const newTarget = Math.floor(Math.random() * 15) + 1;
        setTargetNumber(newTarget);
        setBits([0, 0, 0, 0]);
        setMessage('');
    };

    useEffect(() => {
        generateTarget();
    }, []);

    const toggleBit = (index) => {
        const newBits = [...bits];
        newBits[index] = newBits[index] === 0 ? 1 : 0;
        setBits(newBits);
    };

    const checkAnswer = () => {
        // Calculate current value
        const currentValue = (bits[0] * 8) + (bits[1] * 4) + (bits[2] * 2) + (bits[3] * 1);

        if (currentValue === targetNumber) {
            const newScore = score + 1;
            setScore(newScore);
            setMessage('Correct! 🎉');

            if (newScore >= 5) {
                setIsComplete(true);
            } else {
                setTimeout(generateTarget, 1000);
            }
        } else {
            setMessage(`Incorrect! You have ${currentValue}, but need ${targetNumber}.`);
        }
    };

    const handleComplete = async () => {
        if (!lesson || !isComplete) return;

        try {
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
                score: 100,
            });
            await addProgress(progress);
            await saveData();

            const { url, shouldDisableStudyMode } = getNextLessonUrl(lesson);
            if (shouldDisableStudyMode) {
                disableStudyMode();
            }
            navigate(url);
        } catch (error) {
            console.error('Error completing lesson:', error);
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            gap: '20px',
            padding: '20px',
            alignItems: 'center',
            color: 'var(--text-1)',
        }}>
            <div style={{
                padding: '20px',
                backgroundColor: 'var(--surface-2)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-1)',
                boxShadow: 'var(--shadow-1)',
                width: '100%',
                maxWidth: '600px',
                textAlign: 'center',
            }}>
                <h2 style={{ fontSize: '24px', color: 'var(--accent-1)', marginBottom: '10px' }}>Binary Counter Game 0️⃣1️⃣</h2>
                <p style={{ color: 'var(--text-2)' }}>Toggle the bits (0 or 1) to match the target number.</p>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--accent-2)', marginTop: '10px' }}>
                    Score: {score} / 5
                </div>
            </div>

            {!isComplete ? (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '30px',
                    backgroundColor: 'var(--surface-1)',
                    padding: '40px',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-2)',
                    boxShadow: 'var(--shadow-2)',
                    width: '100%',
                    maxWidth: '600px',
                }}>
                    <div style={{ fontSize: '48px', fontWeight: 'bold', color: 'var(--text-1)' }}>
                        Target: <span style={{ color: 'var(--accent-3)' }}>{targetNumber}</span>
                    </div>

                    <div style={{ display: 'flex', gap: '20px' }}>
                        {[8, 4, 2, 1].map((value, index) => (
                            <div key={index} style={{ textAlign: 'center' }}>
                                <div style={{ marginBottom: '10px', fontWeight: 'bold', color: 'var(--text-3)' }}>{value}</div>
                                <button
                                    onClick={() => toggleBit(index)}
                                    style={{
                                        width: '60px',
                                        height: '80px',
                                        fontSize: '32px',
                                        backgroundColor: bits[index] ? 'var(--accent-1)' : 'var(--bg-1)',
                                        color: bits[index] ? 'var(--bg-0)' : 'var(--text-3)',
                                        border: `2px solid ${bits[index] ? 'var(--accent-1)' : 'var(--border-1)'}`,
                                        borderRadius: 'var(--radius-md)',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        boxShadow: bits[index] ? 'var(--glow-1)' : 'none',
                                    }}
                                >
                                    {bits[index]}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div style={{ fontSize: '20px', color: 'var(--text-2)' }}>
                        Current Value: <span style={{ color: 'var(--text-1)', fontWeight: 'bold' }}>{(bits[0] * 8) + (bits[1] * 4) + (bits[2] * 2) + (bits[3] * 1)}</span>
                    </div>

                    {message && (
                        <div style={{
                            color: message.includes('Correct') ? 'var(--accent-2)' : '#ff6b6b',
                            fontWeight: 'bold',
                            fontSize: '18px',
                            minHeight: '27px'
                        }}>
                            {message}
                        </div>
                    )}

                    <button
                        onClick={checkAnswer}
                        style={{
                            padding: '12px 40px',
                            fontSize: '18px',
                            backgroundColor: 'var(--accent-1)',
                            color: 'var(--bg-0)',
                            border: 'none',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            boxShadow: 'var(--glow-1)',
                        }}
                    >
                        Check Answer
                    </button>
                </div>
            ) : (
                <div style={{
                    backgroundColor: 'var(--surface-1)',
                    padding: '40px',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--glow-2)',
                    border: '1px solid var(--accent-2)',
                    width: '100%',
                    maxWidth: '600px',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '60px', marginBottom: '20px' }}>🏆</div>
                    <h2 style={{ color: 'var(--accent-2)', fontSize: '32px', marginBottom: '15px' }}>Level Complete!</h2>
                    <p style={{ fontSize: '18px', color: 'var(--text-1)', marginBottom: '30px' }}>You've mastered 4-bit binary!</p>
                    <button
                        onClick={handleComplete}
                        style={{
                            padding: '15px 30px',
                            backgroundColor: 'var(--accent-2)',
                            color: 'var(--bg-0)',
                            border: 'none',
                            borderRadius: 'var(--radius-sm)',
                            cursor: 'pointer',
                            fontSize: '18px',
                            fontWeight: '700',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                    >
                        <span>Finish Lesson & Get Medal</span>
                        <span>✨</span>
                    </button>
                </div>
            )}
        </div>
    );
}

export default BinaryGame;
