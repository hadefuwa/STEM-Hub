import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'tree', correct: true },
  { word: 'cat', correct: false },
  { word: 'top', correct: true },
  { word: 'ball', correct: false },
  { word: 'ten', correct: true },
  { word: 'dog', correct: false },
  { word: 'tiger', correct: true },
  { word: 'apple', correct: false },
  { word: 'toy', correct: true },
  { word: 'fish', correct: false },
];

function LetterTLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="t" videoId="_8VIbSUOe3Q" questions={questions} />;
}

export default LetterTLesson;