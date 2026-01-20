import React, { useState, useEffect } from 'react';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';

const sentences = [
  "The cat sat on the mat.",
  "A dog is a good pet.",
  "I can see a big red bus.",
  "The sun is very hot.",
  "We like to play in the park."
];

function SentenceScrambleGame({ lesson }) {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [shuffledWords, setShuffledWords] = useState([]);
  const [droppedWords, setDroppedWords] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [completed, setCompleted] = useState(false);

  const addProgress = useDataStore(state => state.addProgress);
  const getNextProgressId = useDataStore(state => state.getNextProgressId);
  const getUserId = useDataStore(state => state.getUserId);
  const saveData = useDataStore(state => state.saveData);

  useEffect(() => {
    if (currentSentenceIndex < sentences.length) {
      const words = sentences[currentSentenceIndex].replace('.', '').split(' ');
      setShuffledWords(
        words.map((word, index) => ({ id: `${currentSentenceIndex}-${index}`, text: word }))
          .sort(() => Math.random() - 0.5)
      );
      setDroppedWords([]);
      setIsCorrect(null);
    }
  }, [currentSentenceIndex]);

  const handleDragStart = (e, word) => {
    e.dataTransfer.setData("word", JSON.stringify(word));
  };

  const handleDrop = (e) => {
    const word = JSON.parse(e.dataTransfer.getData("word"));
    setDroppedWords([...droppedWords, word]);
    setShuffledWords(shuffledWords.filter(w => w.id !== word.id));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const checkSentence = () => {
    if (droppedWords.map(w => w.text).join(' ') === sentences[currentSentenceIndex].replace('.', '')) {
      setIsCorrect(true);
      if (currentSentenceIndex === sentences.length - 1) {
        setCompleted(true);
        completeGame();
      }
    } else {
      setIsCorrect(false);
    }
  };

  const nextSentence = () => {
    if (currentSentenceIndex < sentences.length - 1) {
      setCurrentSentenceIndex(currentSentenceIndex + 1);
    }
  };

  const resetSentence = () => {
    const words = sentences[currentSentenceIndex].replace('.', '').split(' ');
    setShuffledWords(
      words.map((word, index) => ({ id: `${currentSentenceIndex}-${index}`, text: word }))
        .sort(() => Math.random() - 0.5)
    );
    setDroppedWords([]);
    setIsCorrect(null);
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
        <p style={{ fontSize: '1.5em', color: '#666', marginBottom: '40px' }}>Excellent work! You unscrambled all the sentences.</p>
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
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Unscramble the Sentence</h2>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          border: '2px dashed #ccc',
          padding: '20px',
          minHeight: '100px',
          marginBottom: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          backgroundColor: '#f0f0f0'
        }}
      >
        {droppedWords.map((word) => (
          <div key={word.id} style={{ padding: '10px 20px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: 'white' }}>
            {word.text}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '30px', minHeight: '50px' }}>
        {shuffledWords.map((word) => (
          <div
            key={word.id}
            draggable
            onDragStart={(e) => handleDragStart(e, word)}
            style={{
              padding: '10px 20px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: 'lightblue',
              cursor: 'move'
            }}
          >
            {word.text}
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <button onClick={checkSentence} style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px', cursor: 'pointer' }}>Check</button>
        <button onClick={resetSentence} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Reset</button>
      </div>

      {isCorrect === true && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'lightgreen', textAlign: 'center', borderRadius: '5px' }}>
          <p>Correct! Well done!</p>
          {currentSentenceIndex < sentences.length - 1 && (
            <button onClick={nextSentence} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Next Sentence</button>
          )}
        </div>
      )}
      {isCorrect === false && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'lightcoral', textAlign: 'center', borderRadius: '5px' }}>
          <p>Not quite right. Try again!</p>
        </div>
      )}
    </div>
  );
}

export default SentenceScrambleGame;
