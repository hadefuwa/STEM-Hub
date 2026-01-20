import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'monkey', correct: true },
  { word: 'cat', correct: false },
  { word: 'moon', correct: true },
  { word: 'ball', correct: false },
  { word: 'milk', correct: true },
  { word: 'dog', correct: false },
  { word: 'mouse', correct: true },
  { word: 'apple', correct: false },
  { word: 'mango', correct: true },
  { word: 'tiger', correct: false },
];

function LetterMLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="m" videoId="xRIZK5HlZ_E" questions={questions} />;
}

export default LetterMLesson;
