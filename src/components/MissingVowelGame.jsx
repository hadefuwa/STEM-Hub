import React, { useState, useEffect } from 'react';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';

const words = [
  { word: "cat", vowel: "a" },
  { word: "dog", vowel: "o" },
  { word: "sun", vowel: "u" },
  { word: "pen", vowel: "e" },
  { word: "sit", vowel: "i" },
  { word: "run", vowel: "u" },
  { word: "bed", vowel: "e" },
  { word: "pig", vowel: "i" },
  { word: "top", vowel: "o" },
  { word: "hat", vowel: "a" }
];

const vowels = ["a", "e", "i", "o", "u"];

function MissingVowelGame({ lesson }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedVowel, setSelectedVowel] = useState(null);
  const [completed, setCompleted] = useState(false);

  const addProgress = useDataStore(state => state.addProgress);
  const getNextProgressId = useDataStore(state => state.getNextProgressId);
  const getUserId = useDataStore(state => state.getUserId);
  const saveData = useDataStore(state => state.saveData);

  const currentWord = words[currentWordIndex];
  const wordWithBlank = currentWord.word.replace(currentWord.vowel, '_');

  const handleVowelClick = (vowel) => {
    setSelectedVowel(vowel);
    if (vowel === currentWord.vowel) {
      setIsCorrect(true);
      if (currentWordIndex === words.length - 1) {
        completeGame();
        setCompleted(true);
      }
    } else {
      setIsCorrect(false);
    }
  };

  const nextWord = () => {
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      setIsCorrect(null);
      setSelectedVowel(null);
    }
  };

  const completeGame = () => {
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
        score: 100,
      });
      addProgress(progress).then(() => {
        saveData();
      });
    }
  };

  if (completed) {
    const medal = { type: 'Platinum', color: '#E5E4E2', emoji: '🏆' }; // 100% score
    return (
      <div style={{ textAlign: 'center', padding: '60px', background: '#f8f9fa', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <div style={{ fontSize: '100px', marginBottom: '20px' }}>{medal.emoji}</div>
        <h2 style={{ fontSize: '48px', color: medal.color, fontWeight: '900', margin: '10px 0' }}>{medal.type} Medal!</h2>
        <p style={{ fontSize: '1.5em', color: '#666', marginBottom: '40px' }}>Excellent work! You found all the missing vowels.</p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button
            onClick={() => window.location.hash = '/lessons'}
            style={{ padding: '15px 30px', fontSize: '18px', fontWeight: '700', backgroundColor: '#f8f9fa', color: '#333', border: '2px solid #ddd', borderRadius: '15px', cursor: 'pointer' }}
          >
            Back to Lessons
          </button>
          <button
            onClick={() => {
              const nextLesson = useDataStore.getState().getNextLessonUrl(lesson);
              if (nextLesson) window.location.hash = nextLesson.url;
            }}
            style={{ padding: '15px 30px', fontSize: '18px', fontWeight: '700', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '15px', cursor: 'pointer' }}
          >
            Next Lesson →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '40px' }}>Find the Missing Vowel</h2>

      <div style={{ fontSize: '4em', marginBottom: '40px', letterSpacing: '0.2em' }}>
        {isCorrect ? currentWord.word : wordWithBlank}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
        {vowels.map(vowel => (
          <button
            key={vowel}
            onClick={() => handleVowelClick(vowel)}
            disabled={isCorrect !== null}
            style={{
              padding: '20px 30px',
              fontSize: '2em',
              cursor: 'pointer',
              border: `2px solid ${selectedVowel === vowel ? (isCorrect ? 'green' : 'red') : '#ccc'}`,
              backgroundColor: selectedVowel === vowel ? (isCorrect ? 'lightgreen' : 'lightcoral') : 'white'
            }}
          >
            {vowel}
          </button>
        ))}
      </div>

      {isCorrect === true && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'lightgreen', borderRadius: '5px' }}>
          <p>Correct! The word is "{currentWord.word}".</p>
          {currentWordIndex < words.length - 1 && (
            <button onClick={nextWord} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Next Word</button>
          )}
        </div>
      )}
      {isCorrect === false && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'lightcoral', borderRadius: '5px' }}>
          <p>Not quite. Try again!</p>
          <button onClick={() => { setIsCorrect(null); setSelectedVowel(null); }} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Try Again</button>
        </div>
      )}
    </div>
  );
}

export default MissingVowelGame;
