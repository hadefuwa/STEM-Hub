import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';

function NetworkRequestGame({ lesson }) {
    const navigate = useNavigate();
    const addProgress = useDataStore(state => state.addProgress);
    const getNextLessonUrl = useDataStore(state => state.getNextLessonUrl);
    const disableStudyMode = useDataStore(state => state.disableStudyMode);
    const getNextProgressId = useDataStore(state => state.getNextProgressId);
    const getUserId = useDataStore(state => state.getUserId);
    const saveData = useDataStore(state => state.saveData);

    const [step, setStep] = useState(0);
    const [complete, setComplete] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [failedAttempts, setFailedAttempts] = useState(0);

    // Each step has a multiple choice question
    const steps = [
        {
            title: "1. The Request",
            description: "You are in the browser and want to visit 'google.com'. What is the very first thing that needs to happen?",
            animation: "user",
            options: [
                { id: 'a', text: "The browser downloads the images immediately", correct: false, reason: "The browser doesn't know where the images are yet!" },
                { id: 'b', text: "The browser sends a request to the DNS server", correct: true, reason: "Correct! We need to find the IP address first." },
                { id: 'c', text: "The screen turns off", correct: false, reason: "No, the computer stays on!" }
            ]
        },
        {
            title: "2. DNS Lookup",
            description: "You need the IP address for 'google.com'. The DNS Server is like a phonebook. What does it return?",
            animation: "dns",
            options: [
                { id: 'a', text: "The website logo", correct: false, reason: "DNS only handles addresses, not images." },
                { id: 'b', text: "A number like 142.250.187.14", correct: true, reason: "Correct! Computers use IP addresses to find each other." },
                { id: 'c', text: "The HTML code", correct: false, reason: "Not yet! We still need to connect to the web server." }
            ]
        },
        {
            title: "3. Connection (Handshake)",
            description: "We have the IP address. Now the browser introduces itself to the server. This is called a TCP Handshake. What happens?",
            animation: "connect",
            options: [
                { id: 'a', text: "They exchange SYN and ACK packets", correct: true, reason: "Correct! SYN (Synchronize) and ACK (Acknowledge) establish the connection." },
                { id: 'b', text: "They exchange phone numbers", correct: false, reason: "Computers exchange packets, not phone numbers." },
                { id: 'c', text: "The server sends a virus", correct: false, reason: "Hopefully not! The handshake is just to say 'Hello'." }
            ]
        },
        {
            title: "4. The GET Request",
            description: "Connected! Now we need to ask for the specific webpage file. What command does the browser send?",
            animation: "request",
            options: [
                { id: 'a', text: "GIVE ME /index.html", correct: false, reason: "Close, but the standard command is just GET." },
                { id: 'b', text: "GET /index.html", correct: true, reason: "Correct! HTTP uses verbs like GET, POST, and DELETE." },
                { id: 'c', text: "PLEASE /index.html", correct: false, reason: "Computers are polite, but they use strict commands like GET." }
            ]
        },
        {
            title: "5. The Response",
            description: "The server found the file! It sends it back with a status code. Which code means 'Success'?",
            animation: "response",
            options: [
                { id: 'a', text: "404 Not Found", correct: false, reason: "404 means the page is missing!" },
                { id: 'b', text: "500 Server Error", correct: false, reason: "500 means the server crashed!" },
                { id: 'c', text: "200 OK", correct: true, reason: "Correct! 200 OK means everything went perfectly." }
            ]
        },
        {
            title: "6. Render",
            description: "The browser has the HTML code. What does it do now?",
            animation: "render",
            options: [
                { id: 'a', text: "Printers it out on paper", correct: false, reason: "No, it displays it on the screen." },
                { id: 'b', text: "Parses the HTML and paints the pixels", correct: true, reason: "Correct! It turns code into the visual website you see." },
                { id: 'c', text: "Sends it back to the server", correct: false, reason: "We just got it! We keep it to show the user." }
            ]
        }
    ];

    const handleOptionClick = (option) => {
        if (feedback) return; // Prevent clicking while showing feedback

        if (option.correct) {
            setFeedback({ correct: true, message: option.reason });
            setTimeout(() => {
                setFeedback(null);
                if (step < steps.length - 1) {
                    setStep(step + 1);
                } else {
                    setComplete(true);
                }
            }, 2000);
        } else {
            setFailedAttempts(prev => prev + 1);
            setFeedback({ correct: false, message: option.reason });
            setTimeout(() => {
                setFeedback(null);
            }, 2500);
        }
    };

    const handleComplete = async () => {
        if (!lesson) return;

        try {
            const userId = getUserId();
            const progressId = getNextProgressId();
            // Calculate score based on mistakes, but ensure passing grade if they reached the end
            const finalScore = Math.max(70, 100 - (failedAttempts * 10)); // Deduct 10 points per mistake, min 70

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

    const currentStep = steps[step];

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
                maxWidth: '800px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-1)',
            }}>
                <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>🌐 How the Web Works</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginBottom: '10px' }}>
                    {steps.map((_, i) => (
                        <div
                            key={i}
                            style={{
                                width: '40px',
                                height: '8px',
                                backgroundColor: i <= step ? 'var(--accent-1)' : 'var(--bg-2)',
                                borderRadius: '4px',
                                transition: 'all 0.3s'
                            }}
                        />
                    ))}
                </div>
                <p style={{ color: 'var(--text-2)', fontSize: '14px' }}>
                    Correctly guide the request to load the website!
                </p>
            </div>

            {!complete ? (
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '30px',
                    width: '100%',
                    maxWidth: '800px',
                }}>
                    {/* Visualization Area */}
                    <div style={{
                        width: '100%',
                        height: '250px',
                        backgroundColor: 'var(--bg-1)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            fontSize: '80px',
                            transition: 'all 0.5s',
                            animation: feedback?.correct ? 'bounce 0.5s' : 'none'
                        }}>
                            {step === 0 && '⌨️'}
                            {step === 1 && '📞'}
                            {step === 2 && '🤝'}
                            {step === 3 && '📤'}
                            {step === 4 && '📥'}
                            {step === 5 && '✨'}
                        </div>

                        {/* Simple feedback overlay inside the visual */}
                        {feedback && (
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                padding: '10px 20px',
                                borderRadius: '20px',
                                backgroundColor: feedback.correct ? 'rgba(40, 167, 69, 0.9)' : 'rgba(220, 53, 69, 0.9)',
                                color: 'white',
                                fontWeight: 'bold',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                                animation: 'fadeIn 0.3s'
                            }}>
                                {feedback.correct ? "✅ Great Job!" : "❌ Try Again!"}
                            </div>
                        )}
                    </div>

                    <div style={{
                        backgroundColor: 'var(--surface-1)',
                        padding: '30px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-1)',
                        width: '100%',
                        animation: 'fadeIn 0.5s',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        <div>
                            <h3 style={{ fontSize: '24px', color: 'var(--accent-1)', marginBottom: '10px' }}>{currentStep.title}</h3>
                            <p style={{ fontSize: '18px', color: 'var(--text-1)', lineHeight: '1.6' }}>
                                {currentStep.description}
                            </p>
                        </div>

                        {/* Multiple Choice Options */}
                        <div style={{ display: 'grid', gap: '15px' }}>
                            {currentStep.options.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleOptionClick(option)}
                                    disabled={!!feedback}
                                    style={{
                                        padding: '15px 20px',
                                        textAlign: 'left',
                                        backgroundColor: feedback?.correct && option.correct ? 'rgba(40, 167, 69, 0.2)' :
                                            feedback && !feedback.correct && option.text === feedback.message ? 'rgba(220, 53, 69, 0.2)' : // highlight wrong choice if we knew which one was clicked, but simple logic for now
                                                'var(--bg-2)',
                                        color: 'var(--text-1)',
                                        border: feedback?.correct && option.correct ? '2px solid var(--accent-2)' : '1px solid var(--border-2)',
                                        borderRadius: '12px',
                                        cursor: !!feedback ? 'default' : 'pointer',
                                        transition: 'all 0.2s',
                                        fontSize: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }}
                                    onMouseOver={(e) => !feedback && (e.currentTarget.style.backgroundColor = 'var(--surface-3)')}
                                    onMouseOut={(e) => !feedback && (e.currentTarget.style.backgroundColor = 'var(--bg-2)')}
                                >
                                    <span style={{
                                        width: '30px',
                                        height: '30px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--surface-3)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'bold',
                                        color: 'var(--accent-1)'
                                    }}>
                                        {option.id.toUpperCase()}
                                    </span>
                                    {option.text}
                                </button>
                            ))}
                        </div>

                        {/* Feedback Message Area */}
                        {feedback && (
                            <div style={{
                                padding: '15px',
                                borderRadius: '8px',
                                backgroundColor: feedback.correct ? 'rgba(40, 167, 69, 0.1)' : 'rgba(220, 53, 69, 0.1)',
                                border: `1px solid ${feedback.correct ? 'var(--accent-2)' : '#dc3545'}`,
                                color: feedback.correct ? 'var(--accent-2)' : '#ff6b6b',
                                fontWeight: '500',
                                textAlign: 'center'
                            }}>
                                {feedback.message}
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div style={{
                    backgroundColor: 'var(--surface-1)',
                    padding: '50px',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--accent-2)',
                    textAlign: 'center',
                    boxShadow: 'var(--glow-2)',
                    maxWidth: '600px',
                    animation: 'popIn 0.5s',
                }}>
                    <div style={{ fontSize: '60px', marginBottom: '20px' }}>🎉</div>
                    <h2 style={{ color: 'var(--accent-2)', fontSize: '32px', marginBottom: '15px' }}>Protocol Mastered!</h2>
                    <p style={{ fontSize: '18px', color: 'var(--text-1)', marginBottom: '30px' }}>
                        You successfully routed the request through the network!
                    </p>
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
                        <span>Finish Lesson & Collect Points</span>
                        <span>🏆</span>
                    </button>
                </div>
            )}
        </div>
    );
}

export default NetworkRequestGame;
