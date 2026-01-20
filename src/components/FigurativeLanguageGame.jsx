import React, { useState } from 'react';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';

const questions = [
  { sentence: "The wind whispered through the trees.", type: "Personification" },
  { sentence: "She is as sly as a fox.", type: "Simile" },
  { sentence: "He is a shining star.", type: "Metaphor" },
  { sentence: "I'm so hungry I could eat a horse.", type: "Hyperbole" },
  { sentence: "The bee buzzed by my ear.", type: "Onomatopoeia" },
  { sentence: "Peter Piper picked a peck of pickled peppers.", type: "Alliteration" }
];

const options = ["Simile", "Metaphor", "Personification", "Hyperbole", "Onomatopoeia", "Alliteration"];

function FigurativeLanguageGame({ lesson }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [completed, setCompleted] = useState(false);

  const addProgress = useDataStore(state => state.addProgress);
  const getNextProgressId = useDataStore(state => state.getNextProgressId);
  const getUserId = useDataStore(state => state.getUserId);
  const saveData = useDataStore(state => state.saveData);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === currentQuestion.type) {
      setIsCorrect(true);
      if (currentQuestionIndex === questions.length - 1) {
        completeGame();
        setCompleted(true);
      }
    } else {
      setIsCorrect(false);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsCorrect(null);
      setSelectedOption(null);
    } else {
      setCompleted(true);
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
        <p style={{ fontSize: '1.5em', color: '#666', marginBottom: '40px' }}>Fantastic work! You identified all the figurative language examples.</p>
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
      <h2 style={{ marginBottom: '40px' }}>What type of figurative language is this?</h2>

      <div style={{ fontSize: '1.5em', fontStyle: 'italic', marginBottom: '40px', minHeight: '50px' }}>
        "{currentQuestion.sentence}"
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
        {options.map(option => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            disabled={isCorrect !== null}
            style={{
              padding: '20px',
              fontSize: '1.2em',
              cursor: 'pointer',
              border: `2px solid ${selectedOption === option ? (isCorrect ? 'green' : 'red') : '#ccc'}`,
              backgroundColor: selectedOption === option ? (isCorrect ? 'lightgreen' : 'lightcoral') : 'white'
            }}
          >
            {option}
          </button>
        ))}
      </div>

      {isCorrect === true && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'lightgreen', borderRadius: '5px' }}>
          <p>Correct! It is {currentQuestion.type}.</p>
          {currentQuestionIndex < questions.length - 1 && (
            <button onClick={nextQuestion} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Next Question</button>
          )}
        </div>
      )}
      {isCorrect === false && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'lightcoral', borderRadius: '5px' }}>
          <p>Not quite. The correct answer is {currentQuestion.type}.</p>
          <button onClick={nextQuestion} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Next Question</button>
        </div>
      )}
    </div>
  );
}

export default FigurativeLanguageGame;
