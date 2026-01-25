import React, { useState, useEffect, useRef } from 'react';
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

    const [currentStep, setCurrentStep] = useState(0);
    const [packets, setPackets] = useState([]);
    const [score, setScore] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [draggedPacket, setDraggedPacket] = useState(null);
    const [showInstructions, setShowInstructions] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState(null);

    const networkSteps = [
        {
            id: 'browser',
            title: '🌐 Browser',
            description: 'You want to visit google.com',
            instruction: 'Click the packet to send it to DNS!',
            packetText: 'google.com',
            nextStep: 'dns',
            educationalContent: {
                title: '🌐 The Browser - Your Gateway to the Web',
                content: `The browser is your window to the internet. When you type "google.com" into the address bar, you're asking the browser to fetch that website for you.

**What the browser does:**
• Parses the URL you entered
• Checks its cache for the website
• If not cached, it needs to find where "google.com" lives on the internet
• This starts the journey of a web request!

**Fun fact:** The first web browser was created by Tim Berners-Lee in 1990 and was called "WorldWideWeb" (no spaces!).`,
                keyPoints: [
                    'Browser = Your internet window',
                    'URL = Address of the website',
                    'Cache = Temporary storage for faster loading'
                ]
            }
        },
        {
            id: 'dns',
            title: '📞 DNS Server',
            description: 'DNS translates names to numbers',
            instruction: 'Drag the packet to find the IP address!',
            packetText: '142.250.187.14',
            nextStep: 'connection',
            educationalContent: {
                title: '📞 DNS - The Internet\'s Phone Book',
                content: `DNS (Domain Name System) is like the phone book of the internet. Computers don't understand names like "google.com" - they need numbers called IP addresses.

**How DNS works:**
• Your computer asks: "What's the IP address for google.com?"
• DNS servers look up the answer (like 142.250.187.14)
• Your computer can now find Google's servers
• This happens in milliseconds!

**Fun fact:** There are 13 root DNS servers worldwide that handle billions of requests every day.`,
                keyPoints: [
                    'DNS = Domain Name System',
                    'Translates names to IP addresses',
                    'Like a phone book for the internet'
                ]
            }
        },
        {
            id: 'connection',
            title: '🤝 TCP Handshake',
            description: 'Establishing a secure connection',
            instruction: 'Connect to the web server!',
            packetText: 'SYN → ACK',
            nextStep: 'request',
            educationalContent: {
                title: '🤝 TCP Handshake - Making Friends Online',
                content: `Before sending data, computers need to establish a reliable connection. This is called a TCP (Transmission Control Protocol) handshake - like two people greeting each other.

**The three-way handshake:**
1. Client sends SYN (Synchronize) - "Hello, can we talk?"
2. Server sends SYN-ACK (Synchronize-Acknowledge) - "Hello! Yes, let's talk!"
3. Client sends ACK (Acknowledge) - "Great! Connection established!"

**Why this matters:** TCP ensures data arrives in order and without errors, making the web reliable.`,
                keyPoints: [
                    'TCP = Transmission Control Protocol',
                    'Three-way handshake establishes connection',
                    'Ensures reliable data delivery'
                ]
            }
        },
        {
            id: 'request',
            title: '📤 HTTP Request',
            description: 'Asking for the webpage',
            instruction: 'Send your request!',
            packetText: 'GET /index.html',
            nextStep: 'server',
            educationalContent: {
                title: '📤 HTTP Request - Asking for What You Want',
                content: `Now that you're connected, you can ask for the webpage! HTTP (HyperText Transfer Protocol) is the language browsers and servers use to communicate.

**Common HTTP methods:**
• GET - "Give me this page" (most common)
• POST - "Take this data and process it"
• PUT - "Update this resource"
• DELETE - "Remove this resource"

**HTTP Status Codes:**
• 200 OK - Success!
• 404 Not Found - Page doesn't exist
• 500 Server Error - Server problem

**Fun fact:** HTTPS adds encryption (the 'S') to keep your data secure.`,
                keyPoints: [
                    'HTTP = HyperText Transfer Protocol',
                    'GET requests ask for web pages',
                    'Status codes show if request succeeded'
                ]
            }
        },
        {
            id: 'server',
            title: '🖥️ Web Server',
            description: 'The server processes your request',
            instruction: 'The server sends back the webpage!',
            packetText: '200 OK + HTML',
            nextStep: 'render',
            educationalContent: {
                title: '🖥️ Web Server - The Heart of Websites',
                content: `Web servers are powerful computers that store websites and respond to requests. When you visit a site, you're connecting to one of these servers somewhere in the world.

**What servers do:**
• Receive your HTTP request
• Find the requested files (HTML, CSS, images)
• Send them back to your browser
• Handle thousands of requests simultaneously

**Server types:**
• Apache - Most popular web server
• Nginx - Fast and efficient
• IIS - Microsoft's web server

**Fun fact:** The largest web servers can handle millions of requests per second!`,
                keyPoints: [
                    'Servers store and serve websites',
                    'Handle HTTP requests from browsers',
                    'Can be anywhere in the world'
                ]
            }
        },
        {
            id: 'render',
            title: '✨ Browser Render',
            description: 'Your browser displays the website',
            instruction: 'You can now see the website!',
            packetText: '🎉 Complete!',
            nextStep: null,
            educationalContent: {
                title: '✨ Browser Rendering - Bringing Websites to Life',
                content: `Once the browser receives the HTML, CSS, and JavaScript files, it needs to turn them into the beautiful website you see. This process is called rendering.

**The rendering process:**
1. **Parse HTML** - Build the page structure
2. **Load CSS** - Apply styles and layout
3. **Execute JavaScript** - Add interactivity
4. **Paint pixels** - Draw everything on screen

**Critical Rendering Path:** The sequence of steps browsers take to convert HTML, CSS, and JavaScript into pixels.

**Fun fact:** Modern browsers can render complex websites in under 100 milliseconds!`,
                keyPoints: [
                    'Rendering turns code into visual websites',
                    'HTML = Structure, CSS = Style, JS = Interactivity',
                    'Happens incredibly fast in modern browsers'
                ]
            }
        }
    ];

    const handlePacketClick = (stepId) => {
        if (stepId === 'browser' && currentStep === 0) {
            // Create initial packet
            const newPacket = {
                id: Date.now(),
                text: 'google.com',
                x: 100,
                y: 200,
                step: 'browser'
            };
            setPackets([newPacket]);
            setCurrentStep(1);
            setScore(prev => prev + 10);
        }
    };

    const handleStepClick = (stepIndex) => {
        const step = networkSteps[stepIndex];
        if (step && step.educationalContent) {
            setPopupContent(step.educationalContent);
            setShowPopup(true);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
        setPopupContent(null);
    };

    const handleDrop = (e, targetStep) => {
        e.preventDefault();
        if (!draggedPacket) return;

        const packet = packets.find(p => p.id === draggedPacket);
        if (!packet) return;

        // Check if this is the correct next step
        const currentNetworkStep = networkSteps[currentStep - 1];
        if (targetStep === currentNetworkStep.nextStep) {
            // Correct drop!
            const updatedPackets = packets.map(p =>
                p.id === draggedPacket
                    ? { ...p, step: targetStep, x: e.clientX - 50, y: e.clientY - 50 }
                    : p
            );
            setPackets(updatedPackets);
            setScore(prev => prev + 20);

            if (currentStep < networkSteps.length - 1) {
                setTimeout(() => {
                    setCurrentStep(prev => prev + 1);
                }, 1000);
            } else {
                // Game complete!
                setTimeout(() => {
                    setIsComplete(true);
                }, 1500);
            }
        } else {
            // Wrong drop - packet bounces back
            setScore(prev => Math.max(0, prev - 5));
        }

        setDraggedPacket(null);
    };

    const handleDragStart = (packetId) => {
        setDraggedPacket(packetId);
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
                score: 100, // Perfect score for completing the game
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

    const currentNetworkStep = networkSteps[currentStep];

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
            {/* Header */}
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
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px'
                }}>
                    <p style={{ color: 'var(--text-2)', fontSize: '14px', margin: 0 }}>
                        {currentNetworkStep?.description || 'Welcome to the Web!'}
                    </p>
                    <div style={{
                        backgroundColor: 'var(--surface-3)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        border: '1px solid var(--border-2)',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: 'var(--accent-1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <span>⭐</span>
                        <span>{score} Points</span>
                    </div>
                </div>
            </div>

            {/* Instructions */}
            {showInstructions && (
                <div style={{
                    backgroundColor: 'var(--surface-1)',
                    padding: '20px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-1)',
                    width: '100%',
                    maxWidth: '800px',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-1)',
                }}>
                    <h3 style={{ color: 'var(--accent-1)', marginBottom: '10px' }}>🎮 How to Play</h3>
                    <p style={{ fontSize: '16px', marginBottom: '15px' }}>
                        Help deliver a web request! Click and drag packets through the network components.
                        <br/>
                        <strong>💡 Tip:</strong> Click on any network component to learn more about how the web works!
                    </p>
                    <button
                        onClick={() => setShowInstructions(false)}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: 'var(--accent-1)',
                            color: 'var(--bg-0)',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold',
                        }}
                    >
                        Start Game! 🚀
                    </button>
                </div>
            )}

            {!isComplete && !showInstructions && (
                <>
                    {/* Network Visualization */}
                    <div style={{
                        width: '100%',
                        maxWidth: '800px',
                        height: '400px',
                        backgroundColor: 'var(--bg-1)',
                        borderRadius: 'var(--radius-lg)',
                        border: '2px solid var(--border-2)',
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        {/* Network Steps */}
                        {networkSteps.map((step, index) => (
                            <div
                                key={step.id}
                                onDrop={(e) => handleDrop(e, step.id)}
                                onDragOver={(e) => e.preventDefault()}
                                onClick={() => {
                                    handlePacketClick(step.id);
                                    handleStepClick(index);
                                }}
                                style={{
                                    position: 'absolute',
                                    left: `${10 + index * 15}%`,
                                    top: `${20 + (index % 2) * 30}%`,
                                    width: '120px',
                                    height: '80px',
                                    backgroundColor: index <= currentStep ? 'var(--accent-1)' : 'var(--surface-2)',
                                    border: `2px solid ${index === currentStep ? 'var(--accent-2)' : 'var(--border-1)'}`,
                                    borderRadius: '12px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: index === 0 && currentStep === 0 ? 'pointer' : 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: index === currentStep ? '0 0 20px rgba(72, 229, 255, 0.5)' : 'var(--shadow-1)',
                                }}
                            >
                                <div style={{ fontSize: '24px', marginBottom: '5px' }}>
                                    {step.title.split(' ')[0]}
                                </div>
                                <div style={{ fontSize: '12px', textAlign: 'center', lineHeight: '1.2' }}>
                                    {step.title.split(' ').slice(1).join(' ')}
                                </div>
                            </div>
                        ))}

                        {/* Packets */}
                        {packets.map((packet) => (
                            <div
                                key={packet.id}
                                draggable
                                onDragStart={() => handleDragStart(packet.id)}
                                style={{
                                    position: 'absolute',
                                    left: packet.x,
                                    top: packet.y,
                                    width: '100px',
                                    height: '50px',
                                    backgroundColor: 'var(--accent-2)',
                                    border: '2px solid var(--accent-1)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'grab',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    color: 'var(--bg-0)',
                                    textAlign: 'center',
                                    userSelect: 'none',
                                    boxShadow: 'var(--shadow-2)',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                📦<br/>{packet.text}
                            </div>
                        ))}

                        {/* Connection Lines */}
                        <svg style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            pointerEvents: 'none'
                        }}>
                            {networkSteps.slice(0, -1).map((step, index) => {
                                const nextStep = networkSteps[index + 1];
                                const startX = 10 + index * 15 + 6; // center of current step
                                const startY = 20 + (index % 2) * 30 + 4;
                                const endX = 10 + (index + 1) * 15 + 6;
                                const endY = 20 + ((index + 1) % 2) * 30 + 4;

                                return (
                                    <line
                                        key={`line-${index}`}
                                        x1={`${startX}%`}
                                        y1={`${startY}%`}
                                        x2={`${endX}%`}
                                        y2={`${endY}%`}
                                        stroke={index < currentStep ? 'var(--accent-1)' : 'var(--border-2)'}
                                        strokeWidth="2"
                                        strokeDasharray={index < currentStep ? 'none' : '5,5'}
                                    />
                                );
                            })}
                        </svg>
                    </div>

                    {/* Current Instruction */}
                    <div style={{
                        backgroundColor: 'var(--surface-1)',
                        padding: '20px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-1)',
                        width: '100%',
                        maxWidth: '800px',
                        textAlign: 'center',
                        boxShadow: 'var(--shadow-1)',
                    }}>
                        <h3 style={{ color: 'var(--accent-1)', marginBottom: '10px' }}>
                            {currentNetworkStep?.title}
                        </h3>
                        <p style={{ fontSize: '16px', marginBottom: '10px' }}>
                            {currentNetworkStep?.instruction}
                        </p>
                        {currentStep > 0 && (
                            <div style={{
                                backgroundColor: 'var(--surface-2)',
                                padding: '10px',
                                borderRadius: '8px',
                                display: 'inline-block',
                                fontFamily: 'monospace',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                color: 'var(--accent-1)',
                            }}>
                                {currentNetworkStep?.packetText}
                            </div>
                        )}
                    </div>
                </>
            )}

            {/* Completion Screen */}
            {isComplete && (
                <div style={{
                    backgroundColor: 'var(--surface-1)',
                    padding: '50px',
                    borderRadius: 'var(--radius-lg)',
                    border: '2px solid var(--accent-2)',
                    textAlign: 'center',
                    boxShadow: 'var(--glow-2)',
                    maxWidth: '600px',
                    animation: 'popIn 0.5s',
                }}>
                    <div style={{ fontSize: '60px', marginBottom: '20px' }}>🎉</div>
                    <h2 style={{ color: 'var(--accent-2)', fontSize: '32px', marginBottom: '15px' }}>Network Master!</h2>
                    <p style={{ fontSize: '18px', color: 'var(--text-1)', marginBottom: '20px' }}>
                        You successfully delivered the web request! You now understand how the web works.
                    </p>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '15px',
                        marginBottom: '30px',
                        fontSize: '16px'
                    }}>
                        <div style={{
                            backgroundColor: 'var(--surface-2)',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid var(--border-1)'
                        }}>
                            <div style={{ color: 'var(--text-2)', marginBottom: '5px' }}>Final Score</div>
                            <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--accent-1)' }}>{score}</div>
                        </div>
                        <div style={{
                            backgroundColor: 'var(--surface-2)',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid var(--border-1)'
                        }}>
                            <div style={{ color: 'var(--text-2)', marginBottom: '5px' }}>Packets Delivered</div>
                            <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--accent-2)' }}>{packets.length}</div>
                        </div>
                    </div>
                    <button
                        onClick={handleComplete}
                        style={{
                            padding: '15px 30px',
                            background: 'linear-gradient(145deg, var(--accent-1), var(--accent-2))',
                            color: '#0a1224',
                            border: 'none',
                            borderRadius: 'var(--radius-sm)',
                            cursor: 'pointer',
                            fontSize: '18px',
                            fontWeight: '700',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            boxShadow: '0 4px 12px rgba(72, 229, 255, 0.4)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(72, 229, 255, 0.6)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(72, 229, 255, 0.4)';
                        }}
                    >
                        <span>Complete Lesson</span>
                        <span>🏆</span>
                    </button>
                </div>
            )}

            {/* Educational Popup */}
            {showPopup && popupContent && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                    animation: 'fadeIn 0.3s',
                }}>
                    <div style={{
                        backgroundColor: 'var(--surface-1)',
                        borderRadius: 'var(--radius-lg)',
                        border: '2px solid var(--accent-1)',
                        padding: '30px',
                        maxWidth: '600px',
                        maxHeight: '80vh',
                        overflow: 'auto',
                        boxShadow: 'var(--glow-2)',
                        position: 'relative',
                        animation: 'popIn 0.4s',
                    }}>
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            style={{
                                position: 'absolute',
                                top: '15px',
                                right: '15px',
                                backgroundColor: 'var(--surface-3)',
                                border: '1px solid var(--border-2)',
                                borderRadius: '50%',
                                width: '35px',
                                height: '35px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '18px',
                                color: 'var(--text-1)',
                                transition: 'all 0.2s',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--accent-1)';
                                e.currentTarget.style.color = 'var(--bg-0)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--surface-3)';
                                e.currentTarget.style.color = 'var(--text-1)';
                            }}
                        >
                            ×
                        </button>

                        {/* Popup Content */}
                        <h2 style={{
                            color: 'var(--accent-1)',
                            fontSize: '24px',
                            marginBottom: '20px',
                            paddingRight: '40px'
                        }}>
                            {popupContent.title}
                        </h2>

                        <div style={{
                            color: 'var(--text-1)',
                            lineHeight: '1.6',
                            marginBottom: '20px',
                            fontSize: '16px'
                        }}>
                            {popupContent.content.split('\n').map((paragraph, index) => (
                                <p key={index} style={{ marginBottom: '15px' }}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Key Points */}
                        {popupContent.keyPoints && (
                            <div style={{ marginBottom: '25px' }}>
                                <h3 style={{
                                    color: 'var(--accent-2)',
                                    fontSize: '18px',
                                    marginBottom: '10px'
                                }}>
                                    📚 Key Points:
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    {popupContent.keyPoints.map((point, index) => (
                                        <li
                                            key={index}
                                            style={{
                                                backgroundColor: 'var(--surface-2)',
                                                padding: '8px 12px',
                                                marginBottom: '5px',
                                                borderRadius: '6px',
                                                border: '1px solid var(--border-1)',
                                                color: 'var(--text-1)',
                                                fontSize: '14px',
                                                fontWeight: '500'
                                            }}
                                        >
                                            • {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Close Button */}
                        <div style={{ textAlign: 'center' }}>
                            <button
                                onClick={closePopup}
                                style={{
                                    padding: '12px 24px',
                                    backgroundColor: 'var(--accent-1)',
                                    color: 'var(--bg-0)',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    transition: 'all 0.2s',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--accent-2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--accent-1)';
                                }}
                            >
                                Got it! Continue Playing 🎮
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NetworkRequestGame;
