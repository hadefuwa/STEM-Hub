import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'lion', correct: true },
  { word: 'cat', correct: false },
  { word: 'lamp', correct: true },
  { word: 'ball', correct: false },
  { word: 'lemon', correct: true },
  { word: 'dog', correct: false },
  { word: 'leaf', correct: true },
  { word: 'apple', correct: false },
  { word: 'ladder', correct: true },
  { word: 'tiger', correct: false },
];

function LetterLLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="l" videoId="fR2GGuIM2is" questions={questions} />;
}

export default LetterLLesson;
