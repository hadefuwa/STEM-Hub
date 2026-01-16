import React, { useState, useEffect, useRef } from 'react';
import { speak, stop } from '../utils/textToSpeech';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';
import { useNavigate } from 'react-router-dom';

// Lesson configurations for math games
const LESSON_CONFIGS = {
  1: { type: 'recognize-1', number: 1, title: 'Number 1', emoji: '1️⃣', objects: ['🍎'] },
  2: { type: 'recognize-2', number: 2, title: 'Number 2', emoji: '2️⃣', objects: ['🍎', '🍌'] },
  3: { type: 'recognize-3', number: 3, title: 'Number 3', emoji: '3️⃣', objects: ['🍎', '🍌', '🍊'] },
  4: { type: 'count-1-3', numbers: [1, 2, 3], title: 'Counting 1-3', emojis: ['1️⃣', '2️⃣', '3️⃣'] },
  5: { type: 'match-1', number: 1, title: 'Match Number 1', emoji: '1️⃣', objects: ['🍎'] },
  6: { type: 'match-2', number: 2, title: 'Match Number 2', emoji: '2️⃣', objects: ['🍎', '🍌'] },
  7: { type: 'match-3', number: 3, title: 'Match Number 3', emoji: '3️⃣', objects: ['🍎', '🍌', '🍊'] },
  8: { type: 'count-1-5', numbers: [1, 2, 3, 4, 5], title: 'Counting 1-5', emojis: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣'] },
  9: { type: 'order-1-3', numbers: [1, 2, 3], title: 'Number Order 1-3', emojis: ['1️⃣', '2️⃣', '3️⃣'] },
  10: { type: 'recognize-1-5', numbers: [1, 2, 3, 4, 5], title: 'Numbers 1-5', emojis: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣'] },
  11: {
    type: 'counting-to-10',
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    title: 'Counting to 10',
    emojis: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'],
  },
  12: {
    type: 'counting-to-20',
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    title: 'Counting to 20',
    emojis: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '1️⃣1️⃣', '1️⃣2️⃣', '1️⃣3️⃣', '1️⃣4️⃣', '1️⃣5️⃣', '1️⃣6️⃣', '1️⃣7️⃣', '1️⃣8️⃣', '1️⃣9️⃣', '2️⃣0️⃣'],
  },
  // Reception - Lesson 1: Recognising Numbers
  13: { type: 'recognize-1-10', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], title: 'Recognising Numbers', emojis: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'] },
  // Year 1 - Lesson 1: Counting to 10 (already exists as 11, but we'll use 14 for this one)
  14: { type: 'counting-to-10-advanced', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], title: 'Counting to 10', emojis: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'] },
  // Year 1 - Lesson 2: Adding Numbers
  15: { type: 'addition', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], title: 'Adding Numbers', maxSum: 20 },
  // Year 2 - Lesson 1: Counting to 20 (already exists as 12, but we'll use 16 for this one)
  16: { type: 'counting-to-20-advanced', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], title: 'Counting to 20', emojis: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '1️⃣1️⃣', '1️⃣2️⃣', '1️⃣3️⃣', '1️⃣4️⃣', '1️⃣5️⃣', '1️⃣6️⃣', '1️⃣7️⃣', '1️⃣8️⃣', '1️⃣9️⃣', '2️⃣0️⃣'] },
  // Year 3 - Lesson 1: Multiplication Tables
  17: { type: 'multiplication', tables: [2, 5, 10], maxProduct: 50, title: 'Multiplication Tables' },
  // Year 3 - Lesson 2: Division Basics
  18: { type: 'division', divisors: [2, 3, 4, 5], maxDividend: 20, title: 'Division Basics' },
  // Year 3 - Lesson 3: Fractions Introduction
  19: { type: 'fractions-basic', title: 'Fractions Introduction', fractions: ['1/2', '1/3', '1/4', '2/4', '3/4'] },
  // Year 4 - Lesson 1: Long Multiplication
  20: { type: 'long-multiplication', maxFactor1: 99, maxFactor2: 9, title: 'Long Multiplication' },
  // Year 4 - Lesson 2: Fractions and Decimals
  21: { type: 'fractions-decimals', title: 'Fractions and Decimals', fractions: ['1/2', '1/4', '3/4', '1/10'], decimals: [0.5, 0.25, 0.75, 0.1] },
  // Year 4 - Lesson 3: Measurement and Units
  22: { type: 'measurement', title: 'Measurement and Units', units: ['cm', 'm', 'kg', 'g', 'L', 'mL'] },
  // Year 6 - Lesson 1: Algebra Introduction
  23: { type: 'algebra-basic', title: 'Algebra Introduction', maxValue: 20 },
  // Year 6 - Lesson 2: Statistics and Data
  24: { type: 'statistics', title: 'Statistics and Data', maxDataPoints: 10 },
  // Year 6 - Lesson 3: Advanced Problem Solving
  25: { type: 'problem-solving', title: 'Advanced Problem Solving', difficulty: 'advanced' },
};

// Scoring tiers
const SCORE_TIERS = {
  GOLD: { name: 'Gold', color: '#FFD700', tries: 1 },
  SILVER: { name: 'Silver', color: '#C0C0C0', tries: 2 },
  BRONZE: { name: 'Bronze', color: '#CD7F32', tries: 3 },
  FAIL: { name: 'Try Again', color: '#dc3545', tries: 0 },
};

// Number names for speech
const NUMBER_NAMES = {
  1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
  6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
  11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
  16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty',
};

// Helper function to render a pie chart for a fraction
const renderPieChart = (fraction, size = 100) => {
  const [numerator, denominator] = fraction.split('/').map(Number);
  const radius = size / 2 - 8;
  const center = size / 2;
  const strokeWidth = 2;
  
  // Create paths for each slice
  const slices = [];
  const sliceAngle = (2 * Math.PI) / denominator;
  
  for (let i = 0; i < denominator; i++) {
    const startAngle = i * sliceAngle - Math.PI / 2; // Start from top
    const endAngle = (i + 1) * sliceAngle - Math.PI / 2;
    
    const x1 = center + radius * Math.cos(startAngle);
    const y1 = center + radius * Math.sin(startAngle);
    const x2 = center + radius * Math.cos(endAngle);
    const y2 = center + radius * Math.sin(endAngle);
    
    const largeArcFlag = sliceAngle > Math.PI ? 1 : 0;
    
    const pathData = [
      `M ${center} ${center}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      'Z'
    ].join(' ');
    
    const isFilled = i < numerator;
    
    slices.push(
      <path
        key={i}
        d={pathData}
        fill={isFilled ? '#2196F3' : '#e0e0e0'}
        stroke="#fff"
        strokeWidth={strokeWidth}
      />
    );
  }
  
  return (
    <svg width={size} height={size} style={{ display: 'block' }}>
      {slices}
      {/* Fraction text */}
      <text
        x={center}
        y={center + 6}
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill="#333"
      >
        {fraction}
      </text>
    </svg>
  );
};

function MathGame({ lesson }) {
  const [gameState, setGameState] = useState('validation'); // Start directly in validation mode - no activity phase needed
  const [currentScore, setCurrentScore] = useState(null);
  const [validationAttempts, setValidationAttempts] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [validationOptions, setValidationOptions] = useState([]);
  const [validationObjects, setValidationObjects] = useState([]);
  const [activityObjectCount, setActivityObjectCount] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [questionText, setQuestionText] = useState('');
  const navigate = useNavigate();
  const addProgress = useDataStore(state => state.addProgress);
  const getNextLessonAfter = useDataStore(state => state.getNextLessonAfter);
  const getNextLessonForSubject = useDataStore(state => state.getNextLessonForSubject);
  const getNextProgressId = useDataStore(state => state.getNextProgressId);
  const getUserId = useDataStore(state => state.getUserId);
  const saveData = useDataStore(state => state.saveData);

  // Map lesson number to math game
  const getMathLessonNumber = () => {
    if (lesson?.title) {
      if (lesson.title.includes('Number 1') && !lesson.title.includes('Numbers 1-5')) {
        return 1;
      } else if (lesson.title.includes('Number 2')) {
        return 2;
      } else if (lesson.title.includes('Number 3')) {
        return 3;
      } else if (lesson.title.includes('Counting 1-3')) {
        return 4;
      } else if (lesson.title.includes('Match Number 1')) {
        return 5;
      } else if (lesson.title.includes('Match Number 2')) {
        return 6;
      } else if (lesson.title.includes('Match Number 3')) {
        return 7;
      } else if (lesson.title.includes('Counting 1-5')) {
        return 8;
      } else if (lesson.title.includes('Number Order')) {
        return 9;
      } else if (lesson.title.includes('Numbers 1-5')) {
        return 10;
      } else if (lesson.title.includes('Counting to 10')) {
        return 11;
      } else if (lesson.title.includes('Counting to 20') && lesson.yearId === 'nursery') {
        return 12;
      } else if (lesson.title.includes('Recognising Numbers')) {
        return 13;
      } else if (lesson.title === 'Counting to 10' && lesson.yearId === 'year1') {
        return 14;
      } else if (lesson.title.includes('Adding Numbers')) {
        return 15;
      } else if (lesson.title === 'Counting to 20' && lesson.yearId === 'year2') {
        return 16;
      } else if (lesson.title.includes('Multiplication Tables')) {
        return 17;
      } else if (lesson.title.includes('Division Basics')) {
        return 18;
      } else if (lesson.title.includes('Fractions Introduction')) {
        return 19;
      } else if (lesson.title.includes('Long Multiplication')) {
        return 20;
      } else if (lesson.title.includes('Fractions and Decimals')) {
        return 21;
      } else if (lesson.title.includes('Measurement and Units')) {
        return 22;
      } else if (lesson.title.includes('Algebra Introduction')) {
        return 23;
      } else if (lesson.title.includes('Statistics and Data')) {
        return 24;
      } else if (lesson.title.includes('Advanced Problem Solving')) {
        return 25;
      }
    }
    return lesson?.lessonNumber || 1;
  };

  const mathLessonNumber = getMathLessonNumber();
  const config = LESSON_CONFIGS[mathLessonNumber] || LESSON_CONFIGS[1];
  
  // Safety check - if config is invalid, use default
  if (!config || !config.type) {
    console.error('Invalid config for math lesson:', mathLessonNumber, 'Using default');
    const defaultConfig = LESSON_CONFIGS[1];
    if (defaultConfig) {
      Object.assign({}, defaultConfig);
    }
  }

  useEffect(() => {
    // Reset all state when lesson changes
    setIsInitialized(false);
    setGameState('validation'); // Reset to validation state
    setCurrentScore(null); // Clear the score/medal
    setCorrectAnswer(null);
    setValidationOptions([]);
    setQuestionText('');
    setValidationObjects([]);
    setValidationAttempts(0);
    
    return () => {
      stop();
    };
  }, [lesson?.id]);

  // Debug logging
  useEffect(() => {
    console.log('MathGame - Lesson:', lesson?.title, 'Lesson Number:', lesson?.lessonNumber, 'Math Lesson Number:', mathLessonNumber, 'Config:', config);
  }, [lesson?.title, lesson?.lessonNumber, mathLessonNumber, config]);

  // Track gameState changes
  useEffect(() => {
    console.log('GameState changed to:', gameState);
  }, [gameState]);

  // Generate validation when component mounts
  useEffect(() => {
    if (!isInitialized && gameState === 'validation' && config && config.type) {
      console.log('Component mounted, generating initial validation');
      try {
        setIsInitialized(true);
        generateValidation();
      } catch (error) {
        console.error('Error generating validation on mount:', error);
        setIsInitialized(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson?.id, gameState, config?.type, isInitialized]);

  const handleNumberClick = async (number) => {
    try {
      // Stop any current speech first
      stop();
      const numberName = NUMBER_NAMES[number] || number.toString();
      console.log('Speaking number:', numberName, 'for number:', number);
      await speak(numberName, { volume: 1.0, rate: 0.6, pitch: 1.2 });
    } catch (error) {
      console.error('Error speaking number:', error);
      // Fallback: try without await
      const numberName = NUMBER_NAMES[number] || number.toString();
      speak(numberName, { volume: 1.0, rate: 0.6, pitch: 1.2 }).catch(err => {
        console.error('Error in fallback speak:', err);
      });
    }
  };

  const handleContinue = () => {
    console.log('=== handleContinue START ===');
    console.log('Current gameState:', gameState);
    console.log('Config:', config);
    
    // Generate validation question
    generateValidation();
    
    // Change to validation state
    console.log('Setting gameState to validation');
    setGameState('validation');
    setValidationAttempts(0);
    setActivityObjectCount(null);
    
    console.log('=== handleContinue END ===');
  };

  const generateValidation = () => {
    // Generate a random question based on the lesson type
    let answer;
    let questionText = '';
    let options = [];

    if (config.type === 'recognize-1' || config.type === 'recognize-2' || config.type === 'recognize-3') {
      // Simple recognition: "Find the number X"
      answer = config.number;
      questionText = `Find the number ${NUMBER_NAMES[config.number]}!`;
      // Generate options: correct answer + nearby numbers, ensuring we have enough options
      const baseOptions = [answer];
      if (answer + 1 <= 5) baseOptions.push(answer + 1);
      if (answer - 1 > 0) baseOptions.push(answer - 1);
      if (answer + 2 <= 5) baseOptions.push(answer + 2);
      if (answer - 2 > 0 && baseOptions.length < 4) baseOptions.push(answer - 2);
      if (answer + 3 <= 5 && baseOptions.length < 4) baseOptions.push(answer + 3);
      options = baseOptions;
    } else if (config.type === 'count-1-3') {
      // Count objects: use the same count from activity phase
      answer = activityObjectCount || Math.floor(Math.random() * 3) + 1; // 1-3
      questionText = `How many objects do you see?`;
      options = [1, 2, 3].sort(() => Math.random() - 0.5);
      const objects = ['🍎', '🍌', '🍊'];
      setValidationObjects(objects.slice(0, answer));
    } else if (config.type === 'match-1' || config.type === 'match-2' || config.type === 'match-3') {
      // Match number to quantity: "How many objects?"
      answer = config.number;
      questionText = `How many objects do you see?`;
      options = [answer, answer + 1, answer - 1, answer + 2].filter(n => n > 0 && n <= 5);
      const objects = ['🍎', '🍌', '🍊'];
      setValidationObjects(objects.slice(0, answer));
    } else if (config.type === 'count-1-5') {
      // Count objects: use the same count from activity phase
      answer = activityObjectCount || Math.floor(Math.random() * 5) + 1; // 1-5
      questionText = `How many objects do you see?`;
      options = [1, 2, 3, 4, 5].sort(() => Math.random() - 0.5);
      const objects = ['🍎', '🍌', '🍊', '🍇', '🍓'];
      setValidationObjects(objects.slice(0, answer));
    } else if (config.type === 'order-1-3') {
      // Number order: "What comes after X?"
      const baseNumber = Math.floor(Math.random() * 2) + 1; // 1-2
      answer = baseNumber + 1;
      questionText = `What number comes after ${NUMBER_NAMES[baseNumber]}?`;
      options = [1, 2, 3].sort(() => Math.random() - 0.5);
    } else if (config.type === 'recognize-1-5') {
      // Recognize numbers 1-5: "Find the number X"
      answer = Math.floor(Math.random() * 5) + 1; // 1-5
      questionText = `Find the number ${NUMBER_NAMES[answer]}!`;
      options = [1, 2, 3, 4, 5].sort(() => Math.random() - 0.5);
    } else if (config.type === 'counting-to-10') {
      // Random question types for counting to 10
      const questionType = Math.floor(Math.random() * 3);
      
      if (questionType === 0) {
        // "What number comes after X?"
        const baseNumber = Math.floor(Math.random() * 9) + 1; // 1-9
        answer = baseNumber + 1;
        questionText = `What number comes after ${NUMBER_NAMES[baseNumber]}?`;
        options = [answer, baseNumber, baseNumber + 2, baseNumber - 1].filter(n => n > 0 && n <= 10);
      } else if (questionType === 1) {
        // "How many fingers on one hand?"
        answer = 5;
        questionText = 'How many fingers do you have on one hand?';
        options = [3, 4, 5, 6];
      } else {
        // "What is the biggest number?"
        answer = 10;
        questionText = 'What is the biggest number we learned?';
        options = [5, 8, 9, 10];
      }
    } else if (config.type === 'counting-to-20') {
      // Random question types for counting to 20
      const questionType = Math.floor(Math.random() * 3);
      
      if (questionType === 0) {
        // "What number comes after X?"
        const baseNumber = Math.floor(Math.random() * 19) + 1; // 1-19
        answer = baseNumber + 1;
        questionText = `What number comes after ${NUMBER_NAMES[baseNumber]}?`;
        options = [answer, baseNumber, baseNumber + 2, baseNumber - 1].filter(n => n > 0 && n <= 20);
      } else if (questionType === 1) {
        // "How many fingers and toes together?"
        answer = 20;
        questionText = 'How many fingers and toes do you have all together?';
        options = [15, 18, 20, 22];
      } else {
        // "What is the biggest number?"
        answer = 20;
        questionText = 'What is the biggest number we learned?';
        options = [15, 18, 19, 20];
      }
    } else if (config.type === 'recognize-1-10') {
      // Reception: Recognize numbers 1-10
      answer = Math.floor(Math.random() * 10) + 1; // 1-10
      questionText = `Find the number ${NUMBER_NAMES[answer]}!`;
      options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(() => Math.random() - 0.5).slice(0, 4);
      if (!options.includes(answer)) {
        options[0] = answer;
      }
    } else if (config.type === 'counting-to-10-advanced') {
      // Year 1: Advanced counting to 10
      const questionType = Math.floor(Math.random() * 3);
      if (questionType === 0) {
        const baseNumber = Math.floor(Math.random() * 9) + 1;
        answer = baseNumber + 1;
        questionText = `What number comes after ${NUMBER_NAMES[baseNumber]}?`;
        options = [answer, baseNumber, baseNumber + 2, baseNumber - 1].filter(n => n > 0 && n <= 10);
      } else if (questionType === 1) {
        answer = 10;
        questionText = 'How many fingers do you have on both hands?';
        options = [8, 9, 10, 12];
      } else {
        const num1 = Math.floor(Math.random() * 5) + 1;
        const num2 = Math.floor(Math.random() * 5) + 1;
        answer = Math.min(num1, num2);
        questionText = `Which number is smaller: ${num1} or ${num2}?`;
        options = [num1, num2, num1 + num2, Math.max(num1, num2) + 1].filter(n => n <= 10);
      }
    } else if (config.type === 'addition') {
      // Year 1: Adding numbers
      const num1 = Math.floor(Math.random() * 10) + 1; // 1-10
      const num2 = Math.floor(Math.random() * 10) + 1; // 1-10
      answer = num1 + num2;
      questionText = `What is ${num1} + ${num2}?`;
      const wrong1 = answer + 1;
      const wrong2 = answer - 1;
      const wrong3 = num1 + num2 + 2;
      options = [answer, wrong1, wrong2, wrong3].filter(n => n > 0 && n <= 20).sort(() => Math.random() - 0.5);
      while (options.length < 4) {
        const random = Math.floor(Math.random() * 20) + 1;
        if (!options.includes(random)) options.push(random);
      }
      options = options.slice(0, 4);
    } else if (config.type === 'counting-to-20-advanced') {
      // Year 2: Advanced counting to 20
      const questionType = Math.floor(Math.random() * 3);
      if (questionType === 0) {
        const baseNumber = Math.floor(Math.random() * 19) + 1;
        answer = baseNumber + 1;
        questionText = `What number comes after ${NUMBER_NAMES[baseNumber]}?`;
        options = [answer, baseNumber, baseNumber + 2, baseNumber - 1].filter(n => n > 0 && n <= 20);
      } else if (questionType === 1) {
        answer = 20;
        questionText = 'How many fingers and toes do you have all together?';
        options = [15, 18, 20, 22];
      } else {
        const num = Math.floor(Math.random() * 15) + 6; // 6-20
        answer = num;
        questionText = `What number is ${NUMBER_NAMES[num]}?`;
        options = [num - 2, num - 1, num, num + 1].filter(n => n > 0 && n <= 20);
      }
    } else if (config.type === 'multiplication') {
      // Year 3: Multiplication tables
      const table = config.tables[Math.floor(Math.random() * config.tables.length)];
      const multiplier = Math.floor(Math.random() * 10) + 1; // 1-10
      answer = table * multiplier;
      questionText = `What is ${table} × ${multiplier}?`;
      const wrong1 = answer + table;
      const wrong2 = answer - table;
      const wrong3 = table * (multiplier + 1);
      options = [answer, wrong1, wrong2, wrong3].filter(n => n > 0 && n <= config.maxProduct).sort(() => Math.random() - 0.5);
      while (options.length < 4) {
        const random = Math.floor(Math.random() * config.maxProduct) + 1;
        if (!options.includes(random)) options.push(random);
      }
      options = options.slice(0, 4);
    } else if (config.type === 'division') {
      // Year 3: Division basics
      const divisor = config.divisors[Math.floor(Math.random() * config.divisors.length)];
      const quotient = Math.floor(Math.random() * (config.maxDividend / divisor)) + 1;
      const dividend = divisor * quotient;
      answer = quotient;
      questionText = `What is ${dividend} ÷ ${divisor}?`;
      const wrong1 = quotient + 1;
      const wrong2 = quotient - 1;
      const wrong3 = divisor;
      options = [answer, wrong1, wrong2, wrong3].filter(n => n > 0).sort(() => Math.random() - 0.5);
      while (options.length < 4) {
        const random = Math.floor(Math.random() * 10) + 1;
        if (!options.includes(random)) options.push(random);
      }
      options = options.slice(0, 4);
    } else if (config.type === 'fractions-basic') {
      // Year 3: Fractions introduction
      const fractions = config.fractions;
      const fraction = fractions[Math.floor(Math.random() * fractions.length)];
      const [num, den] = fraction.split('/').map(Number);
      answer = fraction;
      questionText = `Which fraction shows ${num} out of ${den} equal parts?`;
      const otherFractions = fractions.filter(f => f !== fraction);
      options = [fraction, ...otherFractions.slice(0, 3)].sort(() => Math.random() - 0.5);
      while (options.length < 4) {
        const randomFrac = `${Math.floor(Math.random() * 3) + 1}/${Math.floor(Math.random() * 4) + 2}`;
        if (!options.includes(randomFrac)) options.push(randomFrac);
      }
      options = options.slice(0, 4);
    } else if (config.type === 'long-multiplication') {
      // Year 4: Long multiplication
      const num1 = Math.floor(Math.random() * (config.maxFactor1 / 10)) + 10; // 10-99
      const num2 = Math.floor(Math.random() * config.maxFactor2) + 1; // 1-9
      answer = num1 * num2;
      questionText = `What is ${num1} × ${num2}?`;
      const wrong1 = answer + num2;
      const wrong2 = answer - num2;
      const wrong3 = (num1 + 10) * num2;
      options = [answer, wrong1, wrong2, wrong3].filter(n => n > 0).sort(() => Math.random() - 0.5);
      while (options.length < 4) {
        const random = Math.floor(Math.random() * 900) + 10;
        if (!options.includes(random)) options.push(random);
      }
      options = options.slice(0, 4);
    } else if (config.type === 'fractions-decimals') {
      // Year 4: Fractions and decimals
      const questionType = Math.floor(Math.random() * 2);
      if (questionType === 0) {
        // Convert fraction to decimal
        const fraction = config.fractions[Math.floor(Math.random() * config.fractions.length)];
        const [num, den] = fraction.split('/').map(Number);
        const decimal = num / den;
        answer = decimal; // Answer is a number (decimal)
        questionText = `What is ${fraction} as a decimal?`;
        const wrong1 = Math.round((decimal + 0.1) * 100) / 100;
        const wrong2 = Math.round((decimal - 0.1) * 100) / 100;
        const wrong3 = Math.round((decimal * 2) * 100) / 100;
        options = [decimal, wrong1, wrong2, wrong3].filter(n => n > 0 && n <= 1).sort(() => Math.random() - 0.5);
        while (options.length < 4) {
          const random = Math.round(Math.random() * 100) / 100;
          if (!options.includes(random)) options.push(random);
        }
        options = options.slice(0, 4);
      } else {
        // Convert decimal to fraction
        const decimal = config.decimals[Math.floor(Math.random() * config.decimals.length)];
        const fraction = decimal === 0.5 ? '1/2' : decimal === 0.25 ? '1/4' : decimal === 0.75 ? '3/4' : '1/10';
        answer = fraction; // Answer is a string (fraction)
        questionText = `What is ${decimal} as a fraction?`;
        const otherFractions = ['1/3', '2/3', '1/5', '2/5', '3/5'].filter(f => f !== fraction);
        options = [fraction, ...otherFractions.slice(0, 3)].sort(() => Math.random() - 0.5);
        while (options.length < 4) {
          const num = Math.floor(Math.random() * 3) + 1;
          const den = Math.floor(Math.random() * 4) + 2;
          const randomFrac = `${num}/${den}`;
          if (!options.includes(randomFrac)) options.push(randomFrac);
        }
        options = options.slice(0, 4);
      }
    } else if (config.type === 'measurement') {
      // Year 4: Measurement and units
      const measurements = [
        { value: 100, unit: 'cm', question: 'How many centimeters in 1 meter?', answer: 100, options: [50, 100, 150, 200] },
        { value: 1000, unit: 'g', question: 'How many grams in 1 kilogram?', answer: 1000, options: [500, 1000, 1500, 2000] },
        { value: 1000, unit: 'mL', question: 'How many milliliters in 1 liter?', answer: 1000, options: [500, 1000, 1500, 2000] },
      ];
      const measurement = measurements[Math.floor(Math.random() * measurements.length)];
      answer = measurement.answer;
      questionText = measurement.question;
      options = measurement.options.sort(() => Math.random() - 0.5);
    } else if (config.type === 'algebra-basic') {
      // Year 6: Algebra introduction
      const questionType = Math.floor(Math.random() * 2);
      if (questionType === 0) {
        const num = Math.floor(Math.random() * 10) + 1;
        const addend = Math.floor(Math.random() * 10) + 1;
        answer = num;
        questionText = `If x + ${addend} = ${num + addend}, what is x?`;
        options = [num, num + 1, num - 1, addend].filter(n => n > 0 && n <= config.maxValue).sort(() => Math.random() - 0.5);
      } else {
        const num = Math.floor(Math.random() * 10) + 5;
        const subtrahend = Math.floor(Math.random() * 5) + 1;
        answer = num;
        questionText = `If y - ${subtrahend} = ${num - subtrahend}, what is y?`;
        options = [num, num + 1, num - 1, subtrahend].filter(n => n > 0 && n <= config.maxValue).sort(() => Math.random() - 0.5);
      }
      while (options.length < 4) {
        const random = Math.floor(Math.random() * config.maxValue) + 1;
        if (!options.includes(random)) options.push(random);
      }
      options = options.slice(0, 4);
    } else if (config.type === 'statistics') {
      // Year 6: Statistics and data
      const data = [5, 7, 8, 6, 9, 7, 8, 6];
      const questionType = Math.floor(Math.random() * 2);
      if (questionType === 0) {
        // Mean
        const sum = data.reduce((a, b) => a + b, 0);
        answer = Math.round(sum / data.length);
        questionText = `What is the average (mean) of: ${data.join(', ')}?`;
        options = [answer, answer + 1, answer - 1, answer + 2].filter(n => n > 0).sort(() => Math.random() - 0.5);
      } else {
        // Mode
        answer = 7; // Most common
        questionText = `What is the mode (most common number) of: ${data.join(', ')}?`;
        options = [6, 7, 8, 9].sort(() => Math.random() - 0.5);
      }
      while (options.length < 4) {
        const random = Math.floor(Math.random() * 10) + 1;
        if (!options.includes(random)) options.push(random);
      }
      options = options.slice(0, 4);
    } else if (config.type === 'problem-solving') {
      // Year 6: Advanced problem solving
      const problems = [
        { question: 'Sarah has 24 stickers. She gives away 8. Then she gets 12 more. How many does she have now?', answer: 28, options: [20, 24, 28, 32] },
        { question: 'A box has 6 rows of 4 apples each. How many apples are in the box?', answer: 24, options: [20, 24, 28, 30] },
        { question: 'Tom saves £5 each week for 8 weeks. How much has he saved?', answer: 40, options: [35, 40, 45, 50] },
      ];
      const problem = problems[Math.floor(Math.random() * problems.length)];
      answer = problem.answer;
      questionText = problem.question;
      options = problem.options.sort(() => Math.random() - 0.5);
    }

    // Ensure we have exactly 4 options, remove duplicates, and shuffle
    const uniqueOptions = [...new Set(options)];
    while (uniqueOptions.length < 4) {
      // Determine max number based on config type
      let maxNum = 5; // Default max
      if (config.numbers) {
        maxNum = config.numbers[config.numbers.length - 1];
      } else if (config.type === 'recognize-1' || config.type === 'recognize-2' || config.type === 'recognize-3') {
        // For recognize-1/2/3, use 5 as max to allow variety
        maxNum = 5;
      } else if (config.number !== undefined) {
        // For other types with a single number, use that number as max but ensure at least 5
        maxNum = Math.max(config.number, 5);
      }
      
      const randomNum = Math.floor(Math.random() * maxNum) + 1;
      if (!uniqueOptions.includes(randomNum) && randomNum <= maxNum) {
        uniqueOptions.push(randomNum);
      }
      
      // Safety check to prevent infinite loop
      if (uniqueOptions.length < 4 && uniqueOptions.length >= maxNum) {
        // If we've exhausted all possible numbers, just add any missing numbers up to maxNum
        for (let i = 1; i <= maxNum && uniqueOptions.length < 4; i++) {
          if (!uniqueOptions.includes(i)) {
            uniqueOptions.push(i);
          }
        }
        break;
      }
    }
    options = uniqueOptions.slice(0, 4).sort(() => Math.random() - 0.5);
    
    console.log('generateValidation - Answer:', answer, 'Question:', questionText, 'Options:', options);
    
    setCorrectAnswer(answer);
    setValidationOptions(options);
    setQuestionText(questionText);
    
    // Speak the question
    setTimeout(() => {
      speak(questionText, { volume: 1.0, rate: 0.6, pitch: 1.2 }).catch(err => {
        console.error('Error speaking question:', err);
      });
    }, 500);
  };

  const handleValidationAnswer = async (option) => {
    // Prevent multiple clicks
    if (gameState === 'completed') {
      return;
    }

    const isCorrect = option === correctAnswer;
    const newAttempts = validationAttempts + 1;
    setValidationAttempts(newAttempts);

    if (isCorrect) {
      const score = getScore(newAttempts);
      await completeLesson(score);
      } else {
      if (newAttempts >= 3) {
        const score = SCORE_TIERS.FAIL;
        await completeLesson(score);
      } else {
        // Speak "try again" and regenerate
        speak('Try again!', { volume: 1.0, rate: 0.6, pitch: 1.2 });
        setTimeout(() => {
          generateValidation();
        }, 1000);
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
      try {
        await addProgress(progress);
        await saveData();
      } catch (err) {
        console.error('Error saving progress:', err);
      }
    }
  };

  const renderActivity = () => {
    // Handle different activity types
    if (config.type === 'recognize-1' || config.type === 'recognize-2' || config.type === 'recognize-3') {
      // Single number recognition
      return (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <h2 style={{ fontSize: '42px', marginBottom: '40px', color: '#333', fontWeight: 'bold' }}>
            Tap the number {NUMBER_NAMES[config.number]}! 🔢
          </h2>
          <div style={{ marginBottom: '40px' }}>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Button clicked! Config:', config, 'Number:', config.number);
                if (config.number) {
                  handleNumberClick(config.number);
                } else {
                  console.error('Config number is undefined!', config);
                }
              }}
              onTouchStart={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Button touched! Config:', config, 'Number:', config.number);
                if (config.number) {
                  handleNumberClick(config.number);
                } else {
                  console.error('Config number is undefined!', config);
                }
              }}
              style={{
                width: '200px',
                height: '200px',
                fontSize: '120px',
                fontWeight: 'bold',
                color: '#333',
                backgroundColor: '#fff',
                border: '8px solid #4CAF50',
                borderRadius: '30px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                userSelect: 'none',
                WebkitUserSelect: 'none',
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.95)';
                e.currentTarget.style.backgroundColor = '#c8e6c9';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = '#fff';
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.backgroundColor = '#e8f5e9';
                e.currentTarget.style.borderColor = '#2E7D32';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.borderColor = '#4CAF50';
              }}
            >
              {config.emoji || config.number || '?'}
            </button>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Play Game clicked! Calling handleContinue');
              handleContinue();
            }}
            style={{
              padding: '20px 50px',
              fontSize: '28px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '15px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.backgroundColor = '#45a049';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#4CAF50';
            }}
          >
            Play Game! 🎮
          </button>
        </div>
      );
    } else if (config.type === 'count-1-3' || config.type === 'match-1' || config.type === 'match-2' || config.type === 'match-3' || config.type === 'count-1-5') {
      // Counting objects - show objects to count
      let objectCount = activityObjectCount;
      if (objectCount === null) {
        objectCount = config.type === 'match-1' ? 1 : config.type === 'match-2' ? 2 : config.type === 'match-3' ? 3 : 
                     config.type === 'count-1-3' ? Math.floor(Math.random() * 3) + 1 : Math.floor(Math.random() * 5) + 1;
        setActivityObjectCount(objectCount);
      }
      const objects = ['🍎', '🍌', '🍊', '🍇', '🍓'];
      const displayObjects = objects.slice(0, objectCount);
      
      return (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <h2 style={{ fontSize: '42px', marginBottom: '40px', color: '#333', fontWeight: 'bold' }}>
            Count the objects! 👀
          </h2>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '30px', 
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}>
            {displayObjects.map((obj, index) => (
              <div key={index} style={{ fontSize: '100px' }}>{obj}</div>
            ))}
          </div>
          <div style={{ fontSize: '32px', marginBottom: '40px', color: '#666' }}>
            How many do you see?
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Play Game clicked! Calling handleContinue');
              handleContinue();
            }}
            style={{
              padding: '20px 50px',
              fontSize: '28px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '15px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.backgroundColor = '#45a049';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#4CAF50';
            }}
          >
            Play Game! 🎮
          </button>
        </div>
      );
    } else {
      // Show numbers in a grid for tapping
      const numbersToShow = config.numbers || (config.type === 'counting-to-10' 
        ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

      return (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '40px', color: '#333', fontWeight: 'bold' }}>
            Tap a number to hear it! 🔢
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '20px', 
            maxWidth: '800px',
            margin: '0 auto 40px auto',
          }}>
            {numbersToShow.map((number, index) => (
              <button
                key={index}
                onClick={() => handleNumberClick(number)}
                onTouchStart={() => handleNumberClick(number)}
                style={{
                  width: '120px',
                  height: '120px',
                  fontSize: '60px',
                  fontWeight: 'bold',
                  color: '#333',
                  backgroundColor: '#fff',
                  border: '5px solid #4CAF50',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.15)';
                  e.currentTarget.style.backgroundColor = '#e8f5e9';
                  e.currentTarget.style.borderColor = '#2E7D32';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.borderColor = '#4CAF50';
                }}
              >
                {(config.emojis && config.emojis[index]) || number}
              </button>
            ))}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Play Game clicked! Calling handleContinue');
              handleContinue();
            }}
            style={{
              padding: '20px 50px',
              fontSize: '28px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '15px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.backgroundColor = '#45a049';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#4CAF50';
            }}
          >
            Play Game! 🎮
          </button>
        </div>
      );
    }
  };

  const renderValidation = () => {
    console.log('renderValidation called! correctAnswer:', correctAnswer, 'validationOptions:', validationOptions, 'validationObjects:', validationObjects);
    
    // Safety check
    if (!config || !config.type) {
      return (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <h2 style={{ fontSize: '36px', color: '#dc3545' }}>Error loading game. Please try again.</h2>
        </div>
      );
    }
    
    // Find the question text based on correct answer
    let displayQuestionText = questionText || 'Select the correct answer!';
    const showObjects = validationObjects.length > 0 && 
      (config.type === 'count-1-3' || config.type === 'match-1' || config.type === 'match-2' || config.type === 'match-3' || config.type === 'count-1-5');
    
    // If validation hasn't been generated yet, show loading or generate it
    if (!correctAnswer || !validationOptions || validationOptions.length === 0) {
      console.log('Validation not ready, generating...');
      if (!isInitialized) {
        try {
          generateValidation();
        } catch (error) {
          console.error('Error generating validation in renderValidation:', error);
        }
      }
      return (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <h2 style={{ fontSize: '36px', color: '#333' }}>Loading game...</h2>
        </div>
      );
    }
    
    // Use stored questionText for complex types (multiplication, division, etc.), otherwise reconstruct
    if (!questionText || questionText === 'Select the correct answer!') {
      if (config.type === 'recognize-1' || config.type === 'recognize-2' || config.type === 'recognize-3') {
        displayQuestionText = `Find the number ${NUMBER_NAMES[config.number]}!`;
      } else if (config.type === 'count-1-3' || config.type === 'match-1' || config.type === 'match-2' || config.type === 'match-3' || config.type === 'count-1-5') {
        displayQuestionText = 'How many objects do you see?';
      } else if (config.type === 'order-1-3') {
        displayQuestionText = `What number comes after ${NUMBER_NAMES[correctAnswer - 1]}?`;
      } else if (config.type === 'recognize-1-5') {
        displayQuestionText = `Find the number ${NUMBER_NAMES[correctAnswer]}!`;
      } else if (config.type === 'counting-to-10') {
        if (correctAnswer === 5) {
          displayQuestionText = 'How many fingers do you have on one hand?';
        } else if (correctAnswer === 10) {
          displayQuestionText = 'What is the biggest number we learned?';
        } else {
          displayQuestionText = `What number comes after ${NUMBER_NAMES[correctAnswer - 1]}?`;
        }
      } else if (config.type === 'counting-to-20' || config.type === 'counting-to-20-advanced') {
        if (correctAnswer === 20) {
          if (validationOptions.includes(20) && validationOptions.includes(15)) {
            displayQuestionText = 'How many fingers and toes do you have all together?';
          } else {
            displayQuestionText = 'What is the biggest number we learned?';
          }
        } else {
          displayQuestionText = `What number comes after ${NUMBER_NAMES[correctAnswer - 1]}?`;
        }
      } else {
        // For multiplication, division, and other complex types, use stored questionText
        displayQuestionText = questionText || 'Select the correct answer!';
      }
    } else {
      displayQuestionText = questionText;
    }

    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '40px', color: '#333', fontWeight: 'bold' }}>
          {displayQuestionText}
        </h2>
        {showObjects && (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '30px', 
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}>
            {validationObjects.map((obj, index) => (
              <div key={index} style={{ fontSize: '100px' }}>{obj}</div>
            ))}
          </div>
        )}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '30px', 
          flexWrap: 'wrap',
          marginBottom: '30px',
          maxWidth: '800px',
          margin: '0 auto 30px auto',
        }}>
          {validationOptions.map((option, index) => {
            let displayText;
            let useDigits = false;
            let letterSpacing = 'normal';
            const isFraction = typeof option === 'string' && option.includes('/');
            const showPieChart = isFraction && config.type === 'fractions-basic';
            
            // Handle string options (fractions, decimals, etc.)
            if (typeof option === 'string') {
              displayText = option;
            } else {
              // For two-digit numbers, use actual digits with tight spacing
              if (option > 10 && option < 100) {
                displayText = option.toString();
                useDigits = true;
                letterSpacing = '-0.1em'; // Bring digits closer together to look like one number
              } else {
                // Handle number options with emojis for single digits
                let emoji;
                if (config.emojis && config.emojis[option - 1]) {
                  emoji = config.emojis[option - 1];
                  // For two-digit emojis (like '1️⃣7️⃣'), use negative letter-spacing
                  if (option > 10 && emoji.length > 2) {
                    letterSpacing = '-0.15em'; // Slightly more spacing for emojis
                  }
                } else if (config.emoji && option === config.number) {
                  emoji = config.emoji;
                } else {
                  // Use number emojis for simple numbers
                  const numberEmojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
                  emoji = numberEmojis[option - 1] || option;
                }
                displayText = emoji;
              }
            }
            
            // Adjust font size for longer text (fractions, decimals)
            const fontSize = typeof option === 'string' && option.length > 3 ? '40px' : '70px';
            
            return (
              <button
                key={index}
                onClick={() => handleValidationAnswer(option)}
                onTouchStart={() => handleValidationAnswer(option)}
                style={{
                  width: '150px',
                  height: '150px',
                  fontSize: fontSize,
                  fontWeight: 'bold',
                  color: '#333',
                  backgroundColor: '#fff',
                  border: '5px solid #2196F3',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  letterSpacing: letterSpacing,
                  padding: showPieChart ? '10px' : '0',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.15)';
                  e.currentTarget.style.backgroundColor = '#e3f2fd';
                  e.currentTarget.style.borderColor = '#1976D2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.borderColor = '#2196F3';
                }}
              >
                {showPieChart ? renderPieChart(option, 120) : displayText}
              </button>
            );
          })}
        </div>
        <div style={{ fontSize: '24px', color: '#666', marginTop: '20px', fontWeight: 'bold' }}>
          Attempts: {validationAttempts} / 3
        </div>
      </div>
    );
  };

  if (gameState === 'completed' && currentScore) {
    return (
      <div style={{ 
        width: '100%', 
        height: '100%', 
        minHeight: '600px',
        backgroundColor: '#f0f8ff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px'
      }}>
        <div style={{ fontSize: '100px', marginBottom: '20px' }}>🎉</div>
        <h2 style={{ color: currentScore.color, fontSize: '56px', marginBottom: '20px', margin: '0 0 20px 0', fontWeight: 'bold' }}>
          {currentScore.name} Medal! 🏅
        </h2>
        <div style={{ display: 'flex', gap: '20px', marginTop: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {currentScore.name === 'Try Again' ? (
            <>
              <button
                onClick={() => {
                  navigate(`/lessons?subjectId=${lesson.subjectId}`);
                }}
                style={{
                  padding: '18px 35px',
                  fontSize: '22px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                }}
              >
                Back to Lessons
              </button>
              <button
                onClick={() => {
                  // Reset all game state to retry
                  setGameState('validation');
                  setCurrentScore(null);
                  setValidationAttempts(0);
                  setCorrectAnswer(null);
                  setValidationOptions([]);
                  setValidationObjects([]);
                  setIsInitialized(false);
                  // Generate a new question
                  setTimeout(() => {
                    generateValidation();
                  }, 100);
                }}
                style={{
                  padding: '18px 40px',
                  fontSize: '24px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                }}
              >
                Try Again 🔄
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  navigate(`/lessons?subjectId=${lesson.subjectId}`);
                }}
                style={{
                  padding: '18px 35px',
                  fontSize: '22px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                }}
              >
                Back to Lessons
              </button>
              <button
                onClick={async () => {
                  // Wait a moment to ensure progress is saved
                  await new Promise(resolve => setTimeout(resolve, 200));
                  // Reset state before navigating to clear the medal screen
                  setGameState('validation');
                  setCurrentScore(null);
                  // Use getNextLessonForSubject to skip already completed lessons
                  const nextLesson = getNextLessonForSubject(lesson.subjectId);
                  if (nextLesson && nextLesson.id) {
                    navigate(`/lesson/${nextLesson.id}`);
                  } else {
                    navigate(`/lessons?subjectId=${lesson.subjectId}`);
                  }
                }}
                style={{
                  padding: '18px 40px',
                  fontSize: '24px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                }}
              >
                Next Lesson →
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      minHeight: '600px',
      backgroundColor: '#f0f8ff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {gameState === 'validation' && renderValidation()}
    </div>
  );
}

export default MathGame;
