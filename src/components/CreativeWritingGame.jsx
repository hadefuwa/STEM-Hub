import React, { useState, useEffect } from 'react';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';
import { speak, stop } from '../utils/textToSpeech';
import { useNavigate } from 'react-router-dom';

const STORY_STEPS = [
    {
        prompt: "Choose your hero:",
        options: ["A brave squirrel", "A tiny dragon", "A clever robot", "A magical butterfly"],
        template: "Once upon a time, there was [X]."
    },
    {
        prompt: "Where does the story happen?",
        options: ["In a candy forest", "On a silver moon", "Under the blue ocean", "In a floating castle"],
        template: " This hero lived [X]."
    },
    {
        prompt: "What is the problem?",
        options: ["They lost their favorite toy", "They couldn't find their way home", "It started raining popcorn", "They found a mysterious key"],
        template: " One day, [X]."
    },
    {
        prompt: "What happened next?",
        options: ["They asked a wise owl for help", "They used magic sparkles", "They built a giant bridge", "They followed a trail of gems"],
        template: " To solve this, [X]."
    },
    {
        prompt: "How does it end?",
        options: ["They threw a big party", "They took a long nap", "They became the king or queen", "They lived happily ever after"],
        template: " Finally, [X]."
    }
];

function CreativeWritingGame({ lesson }) {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [story, setStory] = useState("");
    const [isGameOver, setIsGameOver] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const addProgress = useDataStore(state => state.addProgress);
    const getNextProgressId = useDataStore(state => state.getNextProgressId);
    const getUserId = useDataStore(state => state.getUserId);
    const saveData = useDataStore(state => state.saveData);
    const getNextLessonUrl = useDataStore(state => state.getNextLessonUrl);

    const currentStep = STORY_STEPS[currentIndex];

    useEffect(() => {
        speak(currentStep.prompt);
        return () => stop();
    }, [currentIndex]);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        const newAddition = currentStep.template.replace("[X]", option);
        const newStory = story + newAddition;
        setStory(newStory);
        speak(option);

        setTimeout(() => {
            if (currentIndex < STORY_STEPS.length - 1) {
                setCurrentIndex(i => i + 1);
                setSelectedOption(null);
            } else {
                endGame();
            }
        }, 1000);
    };

    const endGame = () => {
        setIsGameOver(true);
        if (lesson) {
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
                score: 100,
            });
            addProgress(progress).then(() => saveData());
        }
    };

    if (isGameOver) {
        return (
            <div style={styles.container}>
                <div style={styles.glassCard}>
                    <div style={styles.medalEmoji}>✍️</div>
                    <h2 style={styles.title}>Your Masterpiece</h2>
                    <div style={styles.finalStory}>{story}</div>
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
                    <h2 style={styles.title}>Short Story Builder</h2>
                    <div style={styles.progressCounter}>Step {currentIndex + 1} of {STORY_STEPS.length}</div>
                </div>

                <div style={styles.questionArea}>
                    <div style={styles.prompt}>{currentStep.prompt}</div>
                </div>

                <div style={styles.optionsArea}>
                    {currentStep.options.map(option => (
                        <button
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            style={{
                                ...styles.optionButton,
                                backgroundColor: selectedOption === option ? '#FFEB3B' : 'rgba(255, 255, 255, 0.9)',
                                color: selectedOption === option ? '#333' : '#333'
                            }}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                <div style={styles.storyPreview}>
                    <strong>Preview:</strong> {story || "The story starts here..."}
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
        background: 'linear-gradient(135deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)',
        borderRadius: '20px'
    },
    glassCard: {
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(15px)',
        borderRadius: '40px',
        padding: '50px',
        width: '100%',
        maxWidth: '850px',
        boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        textAlign: 'center',
        color: 'white'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '40px'
    },
    title: { fontSize: '36px', margin: 0, fontWeight: '900', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' },
    progressCounter: { fontSize: '20px', fontWeight: '700', opacity: 0.9 },
    questionArea: {
        marginBottom: '40px'
    },
    prompt: {
        fontSize: '32px',
        fontWeight: '800'
    },
    optionsArea: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        width: '100%',
        marginBottom: '40px'
    },
    optionButton: {
        padding: '25px',
        fontSize: '24px',
        fontWeight: '700',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
    },
    storyPreview: {
        fontSize: '20px',
        lineHeight: '1.6',
        padding: '25px',
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: '20px',
        textAlign: 'left',
        color: '#fff'
    },
    finalStory: {
        fontSize: '28px',
        lineHeight: '1.8',
        padding: '40px',
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: '30px',
        marginBottom: '40px',
        textAlign: 'left',
        color: '#333'
    },
    medalEmoji: { fontSize: '100px', marginBottom: '20px' },
    buttonGroup: { display: 'flex', gap: '20px', justifyContent: 'center' },
    primaryButton: { padding: '15px 30px', fontSize: '18px', fontWeight: '700', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '15px', cursor: 'pointer' },
    secondaryButton: { padding: '15px 30px', fontSize: '18px', fontWeight: '700', backgroundColor: '#f8f9fa', color: '#333', border: '2px solid #ddd', borderRadius: '15px', cursor: 'pointer' }
};

export default CreativeWritingGame;
