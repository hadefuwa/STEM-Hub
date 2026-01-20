import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'box', correct: true },
  { word: 'cat', correct: false },
  { word: 'six', correct: true },
  { word: 'ball', correct: false },
  { word: 'fox', correct: true },
  { word: 'dog', correct: false },
  { word: 'taxi', correct: true },
  { word: 'apple', correct: false },
  { word: 'ox', correct: true },
  { word: 'fish', correct: false },
];

function LetterXLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="x" videoId="mqOEonp0rH8" questions={questions} />;
}

export default LetterXLesson;