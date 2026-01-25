import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';

function PhishingGame({ lesson }) {
    const navigate = useNavigate();
    const addProgress = useDataStore(state => state.addProgress);
    const getNextLessonUrl = useDataStore(state => state.getNextLessonUrl);
    const disableStudyMode = useDataStore(state => state.disableStudyMode);
    const getNextProgressId = useDataStore(state => state.getNextProgressId);
    const getUserId = useDataStore(state => state.getUserId);
    const saveData = useDataStore(state => state.saveData);

    const [level, setLevel] = useState(0);
    const [score, setScore] = useState(0);
    const [showFeedback, setShowFeedback] = useState(null);
    const [complete, setComplete] = useState(false);

    const emails = [
        {
            sender: "support@netflix-security-alert.com",
            subject: "Urgent: Your Account Suspended",
            body: "Dear Customer, We noticed suspicious activity. Click here to verify your password immediately or we will delete your account.",
            isPhishing: true,
            hint: "Look at the sender address 'netflix-security-alert.com' - is that real? Also, note the urgent threat."
        },
        {
            sender: "updates@netflix.com",
            subject: "New shows coming this month",
            body: "Hi Jane, Check out the new movies arriving in February! We hope you enjoy them.",
            isPhishing: false,
            hint: "The sender is the official 'netflix.com' and they aren't asking for passwords or threatening you."
        },
        {
            sender: "amazon-order-support@gmail.com",
            subject: "Issue with your order #4122",
            body: "There was a problem with your payment. Please reply with your credit card number to fix it.",
            isPhishing: true,
            hint: "Amazon would never use a @gmail.com address for support, and they never ask for card details via email."
        },
        {
            sender: "mom@gmail.com",
            subject: "Dinner tonight",
            body: "Hey, are you coming over for dinner at 6pm? Let me know!",
            isPhishing: false,
            hint: "This looks like a normal personal email."
        },
        {
            sender: "it-support@school.edu",
            subject: "Password Expiry Notice",
            body: "Your password will expire in 3 days. Please log in to the student portal to update it.",
            isPhishing: false,
            hint: "This is a standard notification from a legitimate school domain, asking you to go to the portal (not asking for the password directly)."
        }
    ];

    const handleChoice = (choice) => {
        const currentEmail = emails[level];
        const isCorrect = choice === currentEmail.isPhishing;

        if (isCorrect) {
            setScore(score + 1);
            setShowFeedback({ correct: true, message: "Correct! " + currentEmail.hint });
        } else {
            setShowFeedback({ correct: false, message: "Incorrect. " + currentEmail.hint });
        }
    };

    const nextLevel = () => {
        setShowFeedback(null);
        if (level < emails.length - 1) {
            setLevel(level + 1);
        } else {
            setComplete(true);
        }
    };

    const handleComplete = async () => {
        if (!lesson) return;

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
                score: Math.round((score / emails.length) * 100),
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

    const currentEmail = emails[level];

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
                width: '100%',
                maxWidth: '700px',
                textAlign: 'center',
            }}>
                <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>🎣 Phishing Detector</h2>
                <p style={{ color: 'var(--text-2)' }}>Is this email Safe or Phishing? Look closely!</p>
                <div style={{ marginTop: '10px', fontWeight: 'bold', color: 'var(--accent-1)' }}>
                    Score: {score}/{emails.length}
                </div>
            </div>

            {!complete ? (
                <div style={{
                    width: '100%',
                    maxWidth: '700px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                }}>
                    {/* Email Preview Card */}
                    <div style={{
                        backgroundColor: '#ffffff', // Email usually looks like white paper
                        color: '#333', // Dark text for readability on white
                        padding: '30px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                        border: '1px solid #ddd',
                    }}>
                        <div style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px' }}>
                            <div style={{ marginBottom: '5px' }}><strong>From:</strong> {currentEmail.sender}</div>
                            <div><strong>Subject:</strong> {currentEmail.subject}</div>
                        </div>
                        <div style={{ lineHeight: '1.6', fontSize: '18px' }}>
                            {currentEmail.body}
                        </div>
                    </div>

                    {/* Feedback Overlay */}
                    {showFeedback ? (
                        <div style={{
                            padding: '20px',
                            backgroundColor: showFeedback.correct ? 'rgba(72, 229, 255, 0.15)' : 'rgba(255, 107, 107, 0.15)',
                            border: `1px solid ${showFeedback.correct ? 'var(--accent-1)' : '#ff6b6b'}`,
                            borderRadius: 'var(--radius-md)',
                            textAlign: 'center',
                            animation: 'fadeIn 0.3s'
                        }}>
                            <h3 style={{
                                color: showFeedback.correct ? 'var(--accent-1)' : '#ff6b6b',
                                marginBottom: '10px'
                            }}>
                                {showFeedback.correct ? 'Correct!' : 'Wrong!'}
                            </h3>
                            <p style={{ marginBottom: '15px' }}>{showFeedback.message}</p>
                            <button
                                onClick={nextLevel}
                                style={{
                                    padding: '10px 25px',
                                    backgroundColor: 'var(--bg-2)',
                                    color: 'var(--text-1)',
                                    border: '1px solid var(--border-1)',
                                    borderRadius: '20px',
                                    cursor: 'pointer'
                                }}
                            >
                                Next Email ➡️
                            </button>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <button
                                onClick={() => handleChoice(false)}
                                style={{
                                    flex: 1,
                                    padding: '20px',
                                    fontSize: '20px',
                                    backgroundColor: 'var(--surface-3)', // Safe color
                                    color: 'var(--accent-2)',
                                    border: '2px solid var(--accent-2)',
                                    borderRadius: 'var(--radius-md)',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                    transition: 'all 0.2s',
                                }}
                            >
                                ✅ Safe
                            </button>
                            <button
                                onClick={() => handleChoice(true)}
                                style={{
                                    flex: 1,
                                    padding: '20px',
                                    fontSize: '20px',
                                    backgroundColor: 'var(--surface-3)',
                                    color: '#ff6b6b', // Danger color
                                    border: '2px solid #ff6b6b',
                                    borderRadius: 'var(--radius-md)',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                    transition: 'all 0.2s',
                                }}
                            >
                                🎣 Phishing
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div style={{
                    backgroundColor: 'var(--surface-1)',
                    padding: '40px',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'center',
                    maxWidth: '500px',
                    border: '1px solid var(--accent-1)',
                }}>
                    <h2 style={{ color: 'var(--accent-1)', marginBottom: '10px' }}>Training Complete!</h2>
                    <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                        You detected {score} out of {emails.length} threats correctly.
                    </p>
                    <button
                        onClick={handleComplete}
                        style={{
                            padding: '15px 30px',
                            backgroundColor: 'var(--accent-1)',
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
                        <span>Finish Lesson</span>
                        <span>🏆</span>
                    </button>
                </div>
            )}
        </div>
    );
}

export default PhishingGame;
