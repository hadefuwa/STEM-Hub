import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';

function WebCodeEditor({ lesson }) {
    const navigate = useNavigate();
    const addProgress = useDataStore(state => state.addProgress);
    const getNextLessonUrl = useDataStore(state => state.getNextLessonUrl);
    const disableStudyMode = useDataStore(state => state.disableStudyMode);
    const getNextProgressId = useDataStore(state => state.getNextProgressId);
    const getUserId = useDataStore(state => state.getUserId);
    const saveData = useDataStore(state => state.saveData);

    const [code, setCode] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [verificationMessage, setVerificationMessage] = useState('');
    const [previewSrc, setPreviewSrc] = useState('');

    // Extract exercise requirements from lesson content
    const getExerciseRequirements = () => {
        if (!lesson || !lesson.content) return null;

        // Look for exercise markers in the content (JSON format)
        const exerciseMatch = lesson.content.match(/<!-- EXERCISE_START -->([\s\S]*?)<!-- EXERCISE_END -->/);
        if (exerciseMatch) {
            try {
                const parsed = JSON.parse(exerciseMatch[1]);
                return parsed;
            } catch (e) {
                console.error("Failed to parse exercise", e);
                return null;
            }
        }

        // Default exercises based on lesson
        if (lesson.title.includes('HTML')) {
            return {
                instruction: 'Create a level 1 heading (h1) that says "Hello World"',
                starterCode: '<!-- Write your HTML code here -->\n',
                regex: '<h1>\\s*Hello World\\s*</h1>'
            };
        }

        return null;
    };

    const exercise = getExerciseRequirements();

    // Reset state when lesson changes
    useEffect(() => {
        if (lesson) {
            setIsCorrect(false);
            setVerificationMessage('');
            if (exercise?.starterCode) {
                setCode(exercise.starterCode);
            } else {
                setCode('');
            }
        }
    }, [lesson?.id]);

    // Update preview when code changes
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setPreviewSrc(code);
        }, 500); // Debounce update
        return () => clearTimeout(timeoutId);
    }, [code]);

    const checkCode = () => {
        if (!exercise) {
            setIsCorrect(true);
            return;
        }

        let correct = false;
        let message = '';

        // Check regex pattern
        if (exercise.regex) {
            const regex = new RegExp(exercise.regex, 'i');
            if (regex.test(code)) {
                correct = true;
                message = '✓ Excellent! You completed the task!';
            } else {
                message = '✗ Not quite. Check the instructions and try again.';
            }
        } else {
            // Default fallback if no validation rules
            correct = true;
            message = '✓ Code updated!';
        }

        setIsCorrect(correct);
        setVerificationMessage(message);
    };

    const handleComplete = async () => {
        if (!lesson || !isCorrect) return;

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
            color: 'var(--text-1)',
        }}>
            {/* Header */}
            <div style={{
                padding: '20px',
                backgroundColor: 'var(--surface-2)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-1)',
                boxShadow: 'var(--shadow-1)',
            }}>
                <h2 style={{ margin: '0 0 10px 0', fontSize: '24px', color: 'var(--accent-1)' }}>🌐 Web Editor</h2>
                <p style={{ margin: '0 0 10px 0', color: 'var(--text-2)', fontSize: '14px' }}>
                    Write HTML/CSS code and see the results instantly!
                </p>

                {exercise && (
                    <div style={{
                        padding: '16px',
                        backgroundColor: 'rgba(72, 229, 255, 0.1)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-2)',
                        marginTop: '15px',
                    }}>
                        <div style={{ fontWeight: '600', marginBottom: '8px', color: 'var(--accent-2)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span>📋</span> YOUR TASK:
                        </div>
                        <div style={{ color: 'var(--text-1)', fontSize: '16px', lineHeight: '1.5' }}>
                            {exercise.instruction}
                        </div>
                    </div>
                )}
            </div>

            {/* Editor & Preview */}
            <div style={{
                display: 'flex',
                flex: 1,
                gap: '20px',
                minHeight: '400px', // Ensure explicit height for editor
            }}>
                {/* Code Editor */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'var(--surface-2)',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-1)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-1)',
                }}>
                    <div style={{
                        padding: '12px 16px',
                        backgroundColor: 'var(--surface-3)',
                        borderBottom: '1px solid var(--border-1)',
                        fontWeight: '600',
                        fontSize: '14px',
                        color: 'var(--text-2)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <span>💻 Code Input</span>
                        <span style={{ fontSize: '12px', color: 'var(--text-3)' }}>HTML/CSS</span>
                    </div>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <Editor
                            height="100%"
                            defaultLanguage="html"
                            value={code}
                            onChange={(value) => setCode(value || '')}
                            theme="vs-dark"
                            options={{
                                minimap: { enabled: false },
                                fontSize: 14,
                                lineNumbers: 'on',
                                wordWrap: 'on',
                                padding: { top: 15, bottom: 15 },
                                fontFamily: "'JetBrains Mono', monospace",
                                backgroundColor: 'transparent', // Let VS Dark theme handle it, but match app style
                            }}
                        />
                    </div>
                    <div style={{
                        padding: '12px 16px',
                        backgroundColor: 'var(--surface-3)',
                        borderTop: '1px solid var(--border-1)',
                        display: 'flex',
                        gap: '10px'
                    }}>
                        <button
                            onClick={checkCode}
                            style={{
                                width: '100%',
                                padding: '10px',
                                backgroundColor: 'var(--accent-1)',
                                color: 'var(--bg-0)',
                                border: 'none',
                                borderRadius: 'var(--radius-sm)',
                                cursor: 'pointer',
                                fontWeight: '700',
                                fontSize: '15px'
                            }}
                        >
                            ▶️ Run & Check Code
                        </button>
                    </div>
                </div>

                {/* Preview */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white', // Preview must be white for standard web pages
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-1)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-1)',
                }}>
                    <div style={{
                        padding: '12px 16px',
                        backgroundColor: '#f0f0f0', // Light header for preview
                        borderBottom: '1px solid #ccc',
                        fontWeight: '600',
                        fontSize: '14px',
                        color: '#333',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                    }}>
                        <span>👁️ Browser Preview</span>
                    </div>
                    <iframe
                        title="Preview"
                        srcDoc={previewSrc}
                        style={{
                            flex: 1,
                            border: 'none',
                            backgroundColor: 'white',
                            width: '100%',
                            height: '100%',
                        }}
                        sandbox="allow-scripts"
                    />
                    {verificationMessage && (
                        <div style={{
                            padding: '15px',
                            backgroundColor: isCorrect ? 'var(--surface-3)' : 'rgba(255, 107, 107, 0.15)',
                            borderTop: `2px solid ${isCorrect ? 'var(--accent-2)' : '#ff6b6b'}`,
                            color: isCorrect ? 'var(--accent-2)' : '#ff6b6b',
                            fontSize: '15px',
                            fontWeight: '500',
                        }}>
                            {verificationMessage}
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div style={{
                marginTop: 'auto',
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                <button
                    onClick={handleComplete}
                    disabled={!isCorrect}
                    style={{
                        padding: '15px 30px',
                        backgroundColor: isCorrect ? 'var(--accent-2)' : 'var(--bg-2)',
                        color: isCorrect ? 'var(--bg-0)' : 'var(--text-3)',
                        border: isCorrect ? 'none' : '1px solid var(--border-1)',
                        borderRadius: 'var(--radius-sm)',
                        cursor: isCorrect ? 'pointer' : 'not-allowed',
                        fontSize: '16px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: isCorrect ? 'var(--glow-1)' : 'none',
                    }}
                >
                    <span>Complete Lesson & Get Medal</span>
                    <span>🏆</span>
                </button>
            </div>
        </div>
    );
}

export default WebCodeEditor;
