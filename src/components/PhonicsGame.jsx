import React, { useState, useEffect, useRef } from 'react';
import { speakPhoneme, speakBlend, speakWordSlowlyThenBlended, stopSpeech } from '../utils/phonicsTTS';
import { speak as generalSpeak, stop as generalStop } from '../utils/textToSpeech';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';
import { useNavigate } from 'react-router-dom';

// Lesson configurations for phonics games
const LESSON_CONFIGS = {
    // Letters A-Z
    'letter-a': { type: 'recognize-letter', letter: 'a', emoji: '🍎', word: 'apple' },
    'letter-b': { type: 'recognize-letter', letter: 'b', emoji: '🎈', word: 'ball' },
    'letter-c': { type: 'recognize-letter', letter: 'c', emoji: '🐱', word: 'cat' },
    'letter-d': { type: 'recognize-letter', letter: 'd', emoji: '🐶', word: 'dog' },
    'letter-e': { type: 'recognize-letter', letter: 'e', emoji: '🥚', word: 'egg' },
    'letter-f': { type: 'recognize-letter', letter: 'f', emoji: '🐟', word: 'fish' },
    'letter-g': { type: 'recognize-letter', letter: 'g', emoji: '🐐', word: 'goat' },
    'letter-h': { type: 'recognize-letter', letter: 'h', emoji: '🎩', word: 'hat' },
    'letter-i': { type: 'recognize-letter', letter: 'i', emoji: '🍦', word: 'igloo' },
    'letter-j': { type: 'recognize-letter', letter: 'j', emoji: '🍯', word: 'jam' },
    'letter-k': { type: 'recognize-letter', letter: 'k', emoji: '🪁', word: 'kite' },
    'letter-l': { type: 'recognize-letter', letter: 'l', emoji: '🦁', word: 'lion' },
    'letter-m': { type: 'recognize-letter', letter: 'm', emoji: '🐒', word: 'monkey' },
    'letter-n': { type: 'recognize-letter', letter: 'n', emoji: '🪹', word: 'nest' },
    'letter-o': { type: 'recognize-letter', letter: 'o', emoji: '🐙', word: 'octopus' },
    'letter-p': { type: 'recognize-letter', letter: 'p', emoji: '🐷', word: 'pig' },
    'letter-q': { type: 'recognize-letter', letter: 'q', emoji: '👑', word: 'queen' },
    'letter-r': { type: 'recognize-letter', letter: 'r', emoji: '🐇', word: 'rabbit' },
    'letter-s': { type: 'recognize-letter', letter: 's', emoji: '☀️', word: 'sun' },
    'letter-t': { type: 'recognize-letter', letter: 't', emoji: '🐯', word: 'tiger' },
    'letter-u': { type: 'recognize-letter', letter: 'u', emoji: '☂️', word: 'umbrella' },
    'letter-v': { type: 'recognize-letter', letter: 'v', emoji: '🚐', word: 'van' },
    'letter-w': { type: 'recognize-letter', letter: 'w', emoji: '🌊', word: 'water' },
    'letter-x': { type: 'recognize-letter', letter: 'x', emoji: '📦', word: 'box' },
    'letter-y': { type: 'recognize-letter', letter: 'y', emoji: '🟡', word: 'yellow' },
    'letter-z': { type: 'recognize-letter', letter: 'z', emoji: '🦓', word: 'zebra' },

    // CVC Word Groups
    'cvc-a': { type: 'recognize-word', words: ['cat', 'bat', 'hat', 'mat'], vowel: 'a' },
    'cvc-o': { type: 'recognize-word', words: ['dog', 'log', 'pot', 'dot'], vowel: 'o' },
    'cvc-i': { type: 'recognize-word', words: ['pig', 'bin', 'sit', 'wig'], vowel: 'i' },
    'cvc-e': { type: 'recognize-word', words: ['hen', 'pen', 'bed', 'ten'], vowel: 'e' },
    'cvc-u': { type: 'recognize-word', words: ['sun', 'bug', 'run', 'cup'], vowel: 'u' },

    // New phonics game types for nursery
    'letter-matching': {
        type: 'letter-matching',
        title: 'Letter Matching Game',
        uppercaseLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        lowercaseLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        pairs: [['A','a'], ['B','b'], ['C','c'], ['D','d'], ['E','e'], ['F','f'], ['G','g'], ['H','h']]
    },

    'rhyming-words': {
        type: 'rhyming-words',
        title: 'Rhyming Words',
        wordPairs: [
            ['cat', 'hat'], ['dog', 'log'], ['sun', 'fun'], ['pig', 'dig'],
            ['big', 'dig'], ['hat', 'bat'], ['pen', 'hen'], ['top', 'hop']
        ]
    },

    'beginning-sounds': {
        type: 'beginning-sounds',
        title: 'Beginning Sounds',
        wordSoundPairs: [
            ['apple', 'a'], ['ball', 'b'], ['car', 'c'], ['duck', 'd'],
            ['fish', 'f'], ['goat', 'g'], ['hat', 'h'], ['ice', 'i'],
            ['jam', 'j'], ['kite', 'k'], ['lion', 'l'], ['mouse', 'm']
        ]
    },

    'word-families': {
        type: 'word-families',
        title: 'Word Families',
        families: {
            'at': ['cat', 'bat', 'hat', 'rat'],
            'ig': ['pig', 'big', 'dig', 'fig'],
            'un': ['sun', 'run', 'fun', 'bun'],
            'ed': ['bed', 'red', 'fed', 'led']
        }
    },

    'review': { type: 'review', title: 'Phonics Review' },
};

// Scoring tiers
const SCORE_TIERS = {
    GOLD: { name: 'Gold', color: '#FFD700', tries: 1 },
    SILVER: { name: 'Silver', color: '#C0C0C0', tries: 2 },
    BRONZE: { name: 'Bronze', color: '#CD7F32', tries: 3 },
    FAIL: { name: 'Try Again', color: '#dc3545', tries: 0 },
};

function PhonicsGame({ lesson }) {
    const [gameState, setGameState] = useState('activity'); // activity, validation, completed
    const [currentScore, setCurrentScore] = useState(null);
    const [validationAttempts, setValidationAttempts] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [validationOptions, setValidationOptions] = useState([]);
    const [questionText, setQuestionText] = useState('');
    const [visualFeedback, setVisualFeedback] = useState(null); // 'correct', 'incorrect'
    const [showConfetti, setShowConfetti] = useState(false);
    const speechSequenceIdRef = useRef(0);
    const isMountedRef = useRef(true);
    const navigate = useNavigate();

    const addProgress = useDataStore(state => state.addProgress);
    const getNextLessonUrl = useDataStore(state => state.getNextLessonUrl);
    const disableStudyMode = useDataStore(state => state.disableStudyMode);
    const getNextProgressId = useDataStore(state => state.getNextProgressId);
    const getUserId = useDataStore(state => state.getUserId);
    const saveData = useDataStore(state => state.saveData);

    // CSS for Glassmorphism and Animations
    const glassStyles = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        @keyframes slideIn {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes popIn {
            0% { transform: scale(0.5); opacity: 0; }
            70% { transform: scale(1.1); }
            100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 30px;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
        }
        .glass-button {
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.5);
            transition: all 0.3s ease;
        }
        .glass-button:hover {
            background: rgba(255, 255, 255, 0.6);
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .glass-button:active {
            transform: scale(0.95);
        }
        .pulse-animation {
            animation: pulse 2s infinite ease-in-out;
        }
    `;

    // Determine configId based on lesson title for nursery phonics games
    let configId = lesson?.categoryId || 'letter-a';

    // Map lesson titles to specific configurations
    if (lesson?.title?.includes('Letter Matching Game')) {
        configId = 'letter-matching';
    } else if (lesson?.title?.includes('Rhyming Words')) {
        configId = 'rhyming-words';
    } else if (lesson?.title?.includes('Beginning Sounds')) {
        configId = 'beginning-sounds';
    } else if (lesson?.title?.includes('Word Families')) {
        configId = 'word-families';
    }

    const config = LESSON_CONFIGS[configId] || LESSON_CONFIGS['letter-a'];

    useEffect(() => {
        isMountedRef.current = true;
        setGameState('activity');
        speakIntro();
        return () => {
            isMountedRef.current = false;
            stopSpeech();
        };
    }, [lesson?.id]);

    const speakIntro = async () => {
        if (!isMountedRef.current) return;
        const sequenceId = ++speechSequenceIdRef.current;
        stopSpeech();

        if (config.type === 'review') {
            await generalSpeak(`Let's see how much you remember! 🚀`, { rate: 0.8, awaitCompletion: true });
            if (!isMountedRef.current || sequenceId !== speechSequenceIdRef.current) return;
            await new Promise(resolve => setTimeout(resolve, 300));
            if (sequenceId !== speechSequenceIdRef.current) return;
            await generalSpeak(`Find the letters and words read aloud!`, { rate: 0.8, awaitCompletion: true });
        } else if (config.type === 'recognize-letter') {
            await generalSpeak(`Let's learn the letter ${config.letter.toUpperCase()}!`, { rate: 0.8, awaitCompletion: true });
            if (!isMountedRef.current || sequenceId !== speechSequenceIdRef.current) return;
            await new Promise(resolve => setTimeout(resolve, 300));
            if (sequenceId !== speechSequenceIdRef.current) return;
            await speakPhoneme(config.letter, { awaitCompletion: true });
            if (!isMountedRef.current || sequenceId !== speechSequenceIdRef.current) return;
            await new Promise(resolve => setTimeout(resolve, 300));
            if (sequenceId !== speechSequenceIdRef.current) return;
            await generalSpeak(`Tap the letter to hear the sound again! Then play the game.`, { rate: 0.8, awaitCompletion: true });
        } else {
            await generalSpeak(`Let's learn some words with the ${config.vowel} sound!`, { rate: 0.8, awaitCompletion: true });
            if (!isMountedRef.current || sequenceId !== speechSequenceIdRef.current) return;
            await new Promise(resolve => setTimeout(resolve, 300));
            if (sequenceId !== speechSequenceIdRef.current) return;
            await generalSpeak(`Tap a word to hear it! Then play the game.`, { rate: 0.8, awaitCompletion: true });
        }
    };

    const handleItemClick = async (item) => {
        // Individual item clicks should stop any ongoing sequence
        speechSequenceIdRef.current++;
        stopSpeech();
        if (config.type === 'recognize-letter') {
            await speakPhoneme(item, { awaitCompletion: true });
        } else if (config.type === 'recognize-word') {
            await speakWordSlowlyThenBlended(item, { awaitCompletion: true });
        }
    };

    const handleContinue = () => {
        setGameState('validation');
        setValidationAttempts(0);
        generateValidation();
    };

    const generateValidation = () => {
        let answer;
        let options = [];
        let qText = '';
        let isWord = false;

        if (config.type === 'review') {
            // Randomly pick between letter and word
            const allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            const allWords = ['cat', 'dog', 'pig', 'hen', 'sun', 'bat', 'log', 'bin', 'pen', 'bug'];

            if (Math.random() > 0.4) {
                answer = allLetters[Math.floor(Math.random() * allLetters.length)];
                const otherLetters = allLetters.filter(l => l !== answer);
                options = [answer, ...otherLetters.sort(() => Math.random() - 0.5).slice(0, 2)].sort(() => Math.random() - 0.5);
                qText = `Find the letter ${answer.toUpperCase()}!`;
                isWord = false;
            } else {
                answer = allWords[Math.floor(Math.random() * allWords.length)];
                const otherWords = allWords.filter(w => w !== answer);
                options = [answer, ...otherWords.sort(() => Math.random() - 0.5).slice(0, 2)].sort(() => Math.random() - 0.5);
                qText = `Find the word ${answer.toUpperCase()}!`;
                isWord = true;
            }
        } else if (config.type === 'recognize-letter') {
            answer = config.letter;
            const otherLetters = ['s', 't', 'p', 'n', 'm'].filter(l => l !== answer);
            options = [answer, ...otherLetters.slice(0, 2)].sort(() => Math.random() - 0.5);
            qText = `Find the letter ${answer.toUpperCase()}!`;
            isWord = false;
        } else if (config.type === 'letter-matching') {
            // Pick a random pair to match
            const randomPair = config.pairs[Math.floor(Math.random() * config.pairs.length)];
            const isUppercaseFirst = Math.random() > 0.5;

            if (isUppercaseFirst) {
                answer = randomPair[1]; // lowercase
                qText = `Find the lowercase match for ${randomPair[0]}!`;
                // Generate options with other lowercase letters
                const otherLowercase = config.lowercaseLetters.filter(l => l !== answer);
                options = [answer, ...otherLowercase.sort(() => Math.random() - 0.5).slice(0, 2)].sort(() => Math.random() - 0.5);
            } else {
                answer = randomPair[0]; // uppercase
                qText = `Find the uppercase match for ${randomPair[1]}!`;
                // Generate options with other uppercase letters
                const otherUppercase = config.uppercaseLetters.filter(l => l !== answer);
                options = [answer, ...otherUppercase.sort(() => Math.random() - 0.5).slice(0, 2)].sort(() => Math.random() - 0.5);
            }
            isWord = false;
        } else if (config.type === 'rhyming-words') {
            // Pick a random pair of rhyming words
            const randomPair = config.wordPairs[Math.floor(Math.random() * config.wordPairs.length)];
            const isFirst = Math.random() > 0.5;

            if (isFirst) {
                answer = randomPair[1]; // second word
                qText = `Find the word that rhymes with ${randomPair[0]}!`;
            } else {
                answer = randomPair[0]; // first word
                qText = `Find the word that rhymes with ${randomPair[1]}!`;
            }

            // Generate options with other words from the list
            const allWords = config.wordPairs.flat();
            const otherWords = allWords.filter(w => w !== answer);
            options = [answer, ...otherWords.sort(() => Math.random() - 0.5).slice(0, 2)].sort(() => Math.random() - 0.5);
            isWord = true;
        } else if (config.type === 'beginning-sounds') {
            // Pick a random word and sound pair
            const randomPair = config.wordSoundPairs[Math.floor(Math.random() * config.wordSoundPairs.length)];
            const [word, sound] = randomPair;

            answer = sound;
            qText = `What sound does '${word}' start with?`;

            // Generate options with other beginning sounds
            const otherSounds = config.wordSoundPairs.map(pair => pair[1]).filter(s => s !== answer);
            options = [answer, ...otherSounds.sort(() => Math.random() - 0.5).slice(0, 2)].sort(() => Math.random() - 0.5);
            isWord = false;
        } else if (config.type === 'word-families') {
            // Pick a random family and word
            const families = Object.keys(config.families);
            const randomFamily = families[Math.floor(Math.random() * families.length)];
            const familyWords = config.families[randomFamily];
            const randomWord = familyWords[Math.floor(Math.random() * familyWords.length)];

            answer = randomWord;
            qText = `Which word belongs to the '${randomFamily}' family?`;

            // Generate options with words from the same family and others
            const otherWords = familyWords.filter(w => w !== answer);
            const allOtherWords = Object.values(config.families).flat().filter(w => !familyWords.includes(w));
            const additionalOptions = allOtherWords.sort(() => Math.random() - 0.5).slice(0, 2);
            options = [answer, ...otherWords.slice(0, 1), ...additionalOptions].sort(() => Math.random() - 0.5);
            isWord = true;
        } else {
            answer = config.words[Math.floor(Math.random() * config.words.length)];
            const otherWords = config.words.filter(w => w !== answer);
            options = [answer, ...otherWords.slice(0, 2)].sort(() => Math.random() - 0.5);
            qText = `Which word is ${answer.toUpperCase()}?`;
            isWord = true;
        }

        setCorrectAnswer(answer);
        setValidationOptions(options);
        setQuestionText(qText);

        const sequenceId = ++speechSequenceIdRef.current;
        setTimeout(async () => {
            if (!isMountedRef.current || sequenceId !== speechSequenceIdRef.current) return;
            stopSpeech(); // Ensure previous is stopped
            await generalSpeak(qText, { rate: 0.8, awaitCompletion: true });
            if (!isMountedRef.current || sequenceId !== speechSequenceIdRef.current) return;
            if (!isWord) {
                await speakPhoneme(answer, { awaitCompletion: true });
            } else {
                await speakBlend(answer, { awaitCompletion: true });
            }
        }, 500);
    };

    const handleAnswer = async (option) => {
        if (gameState === 'completed') return;

        const isCorrect = option === correctAnswer;
        const newAttempts = validationAttempts + 1;
        setValidationAttempts(newAttempts);

        const sequenceId = ++speechSequenceIdRef.current;
        stopSpeech();

        if (isCorrect) {
            setVisualFeedback('correct');
            await generalSpeak("Well done! That is correct!", { rate: 0.9, awaitCompletion: true });
            if (sequenceId !== speechSequenceIdRef.current) return;
            completeLesson(getScore(newAttempts));
        } else {
            setVisualFeedback('incorrect');
            setTimeout(() => setVisualFeedback(null), 1500);
            if (newAttempts >= 3) {
                await generalSpeak("Not quite! Let's try another one.", { rate: 0.9, awaitCompletion: true });
                if (sequenceId !== speechSequenceIdRef.current) return;
                completeLesson(SCORE_TIERS.FAIL);
            } else {
                await generalSpeak("Try again! Listen carefully.", { rate: 0.9, awaitCompletion: true });
                if (!isMountedRef.current || sequenceId !== speechSequenceIdRef.current) return;
                if (config.type === 'recognize-letter') {
                    await speakPhoneme(correctAnswer, { awaitCompletion: true });
                } else {
                    await speakBlend(correctAnswer, { awaitCompletion: true });
                }
            }
        }
    };

    const getScore = (attempts) => {
        if (attempts === 1) return SCORE_TIERS.GOLD;
        if (attempts === 2) return SCORE_TIERS.SILVER;
        if (attempts === 3) return SCORE_TIERS.BRONZE;
        return SCORE_TIERS.FAIL;
    };

    const completeLesson = async (score) => {
        setGameState('completed');
        setCurrentScore(score);
        if (score !== SCORE_TIERS.FAIL) {
            setShowConfetti(true);
        }

        if (lesson) {
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
                score: score === SCORE_TIERS.GOLD ? 100 : score === SCORE_TIERS.SILVER ? 75 : score === SCORE_TIERS.BRONZE ? 50 : 0,
            });
            await addProgress(progress);
            await saveData();
        }
    };

    const Confetti = () => {
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];
        return (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden', zIndex: 100 }}>
                {Array.from({ length: 50 }).map((_, i) => {
                    const size = Math.random() * 10 + 5;
                    const left = Math.random() * 100;
                    const delay = Math.random() * 3;
                    const duration = Math.random() * 2 + 2;
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    return (
                        <div
                            key={i}
                            style={{
                                position: 'absolute',
                                top: -20,
                                left: `${left}%`,
                                width: `${size}px`,
                                height: `${size}px`,
                                backgroundColor: color,
                                borderRadius: Math.random() > 0.5 ? '50%' : '0',
                                transform: `rotate(${Math.random() * 360}deg)`,
                                animation: `drop ${duration}s ${delay}s linear forwards`,
                            }}
                        />
                    );
                })}
                <style>{`
                    @keyframes drop {
                        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                        100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
                    }
                `}</style>
            </div>
        );
    };

    const renderActivity = () => {
        let title = '';
        let content = null;

        if (config.type === 'recognize-letter') {
            title = `Learn the Letter ${config.letter.toUpperCase()}`;
            content = (
                <button
                    className="glass-button pulse-animation"
                    onClick={() => handleItemClick(config.letter)}
                    style={{
                        width: '280px',
                        height: '280px',
                        fontSize: '150px',
                        color: '#2e7d32',
                        borderRadius: '60px',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                    }}
                >
                    <div style={{ fontSize: '130px', fontWeight: '900' }}>{config.letter.toUpperCase()}</div>
                    <div style={{ fontSize: '70px' }}>{config.emoji}</div>
                </button>
            );
        } else if (config.type === 'letter-matching') {
            title = config.title || 'Letter Matching Game';
            content = (
                <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', flexWrap: 'wrap' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ fontSize: '28px', color: '#1a237e', marginBottom: '20px' }}>Uppercase Letters</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                            {config.uppercaseLetters.map((letter, index) => (
                                <button
                                    key={`upper-${index}`}
                                    className="glass-button"
                                    onClick={() => handleItemClick(letter)}
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        fontSize: '36px',
                                        fontWeight: 'bold',
                                        color: '#1565c0',
                                        borderRadius: '20px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {letter}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ fontSize: '28px', color: '#1a237e', marginBottom: '20px' }}>Lowercase Letters</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                            {config.lowercaseLetters.map((letter, index) => (
                                <button
                                    key={`lower-${index}`}
                                    className="glass-button"
                                    onClick={() => handleItemClick(letter)}
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        fontSize: '36px',
                                        fontWeight: 'bold',
                                        color: '#1565c0',
                                        borderRadius: '20px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {letter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            );
        } else if (config.type === 'rhyming-words') {
            title = config.title || 'Rhyming Words';
            content = (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', width: '100%' }}>
                    {config.wordPairs.map((pair, index) => (
                        <div key={index} className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '24px', color: '#1a237e', marginBottom: '15px' }}>Rhyming Pair #{index + 1}</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                {pair.map((word, wordIndex) => (
                                    <button
                                        key={wordIndex}
                                        className="glass-button"
                                        onClick={() => handleItemClick(word)}
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                            fontSize: '24px',
                                            fontWeight: 'bold',
                                            color: '#1565c0',
                                            borderRadius: '20px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {word.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            );
        } else if (config.type === 'beginning-sounds') {
            title = config.title || 'Beginning Sounds';
            content = (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', width: '100%' }}>
                    {config.wordSoundPairs.map(([word, sound], index) => (
                        <div key={index} className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '24px', color: '#1a237e', marginBottom: '15px' }}>Word #{index + 1}</h3>
                            <button
                                className="glass-button"
                                onClick={() => handleItemClick(word)}
                                style={{
                                    width: '120px',
                                    height: '120px',
                                    fontSize: '28px',
                                    fontWeight: 'bold',
                                    color: '#1565c0',
                                    borderRadius: '20px',
                                    cursor: 'pointer',
                                    margin: '10px'
                                }}
                            >
                                {word.toUpperCase()}
                            </button>
                            <div style={{ marginTop: '10px', fontSize: '20px', fontWeight: 'bold', color: '#2e7d32' }}>
                                Starts with '{sound}'
                            </div>
                        </div>
                    ))}
                </div>
            );
        } else if (config.type === 'word-families') {
            title = config.title || 'Word Families';
            content = (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', width: '100%' }}>
                    {Object.entries(config.families).map(([family, words], index) => (
                        <div key={index} className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '24px', color: '#1a237e', marginBottom: '15px' }}>'{family}' Family</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                                {words.map((word, wordIndex) => (
                                    <button
                                        key={wordIndex}
                                        className="glass-button"
                                        onClick={() => handleItemClick(word)}
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                            fontSize: '20px',
                                            fontWeight: 'bold',
                                            color: '#1565c0',
                                            borderRadius: '20px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {word.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            );
        } else {
            // Handle the original CVC word case
            title = `Learn ${config.vowel.toUpperCase()} Words`;
            content = config.words.map((word, index) => (
                <button
                    key={index}
                    className="glass-button"
                    onClick={() => handleItemClick(word)}
                    style={{
                        width: '220px',
                        height: '160px',
                        fontSize: '44px',
                        fontWeight: 'bold',
                        color: '#1565c0',
                        borderRadius: '40px',
                        cursor: 'pointer',
                        animation: `popIn 0.5s ease-out ${index * 0.1}s both`,
                    }}
                >
                    {word.toUpperCase()}
                </button>
            ));
        }

        return (
            <div style={{ textAlign: 'center', padding: '40px', animation: 'slideIn 0.5s ease-out' }}>
                <h2 style={{ fontSize: '48px', marginBottom: '40px', color: '#1a237e', fontWeight: '800', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    {title}
                </h2>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginBottom: '60px' }}>
                    {content}
                </div>

                <button
                    onClick={handleContinue}
                    className="glass-button"
                    style={{
                        padding: '25px 80px',
                        fontSize: '34px',
                        backgroundColor: '#43a047',
                        color: 'white',
                        border: 'none',
                        borderRadius: '25px',
                        cursor: 'pointer',
                        fontWeight: '800',
                        boxShadow: '0 10px 20px rgba(67, 160, 71, 0.3)',
                    }}
                >
                    Play Game! 🎮
                </button>
            </div>
        );
    };

    const renderValidation = () => {
        return (
            <div style={{ textAlign: 'center', padding: '40px', position: 'relative', animation: 'slideIn 0.5s ease-out' }}>
                <h2 style={{ fontSize: '44px', marginBottom: '40px', color: '#1a237e', fontWeight: '800' }}>
                    {questionText}
                </h2>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginBottom: '40px' }}>
                    {validationOptions.map((option, index) => (
                        <button
                            key={index}
                            className="glass-button"
                            onClick={() => handleAnswer(option)}
                            style={{
                                width: '220px',
                                height: '220px',
                                fontSize: config.type === 'recognize-letter' ? '110px' : '44px',
                                fontWeight: '900',
                                color: '#1565c0',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                animation: `popIn 0.5s ease-out ${index * 0.1}s both`,
                            }}
                        >
                            {option.toUpperCase()}
                        </button>
                    ))}
                </div>

                {visualFeedback && (
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '200px',
                        zIndex: 10,
                        animation: 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both',
                        pointerEvents: 'none'
                    }}>
                        {visualFeedback === 'correct' ? '✅' : '❌'}
                    </div>
                )}

                <div style={{ fontSize: '28px', color: '#546e7a', fontWeight: '600' }}>
                    Attempts: {validationAttempts} / 3
                </div>
            </div>
        );
    };

    if (gameState === 'completed' && currentScore) {
        return (
            <div className="glass-card" style={{ textAlign: 'center', padding: '60px', margin: '20px', animation: 'popIn 0.8s both', position: 'relative' }}>
                {showConfetti && <Confetti />}
                <div style={{ fontSize: '140px', marginBottom: '20px' }}>
                    {currentScore === SCORE_TIERS.GOLD ? '🏆' : currentScore === SCORE_TIERS.SILVER ? '🥈' : currentScore === SCORE_TIERS.BRONZE ? '🥉' : '💫'}
                </div>
                <h2 style={{ color: currentScore.color, fontSize: '72px', margin: '20px 0', fontWeight: '900', textShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                    {currentScore.name} Medal!
                </h2>
                <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', marginTop: '50px' }}>
                    <button
                        onClick={() => navigate(`/lessons?subjectId=${lesson.subjectId}`)}
                        className="glass-button"
                        style={{ padding: '22px 45px', fontSize: '26px', borderRadius: '20px', cursor: 'pointer', fontWeight: '700', color: '#37474f' }}
                    >
                        Back to Lessons
                    </button>
                    <button
                        onClick={() => {
                            const { url } = getNextLessonUrl(lesson);
                            navigate(url);
                        }}
                        className="glass-button"
                        style={{ padding: '22px 45px', fontSize: '26px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer', fontWeight: '700' }}
                    >
                        Next Lesson →
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="glass-card" style={{ width: '100%', minHeight: '650px', background: 'linear-gradient(135deg, #e0f2f1 0%, #e3f2fd 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <style>{glassStyles}</style>
            {gameState === 'activity' ? renderActivity() : renderValidation()}
        </div>
    );
}

export default PhonicsGame;
