import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'nest', correct: true },
  { word: 'cat', correct: false },
  { word: 'net', correct: true },
  { word: 'ball', correct: false },
  { word: 'nose', correct: true },
  { word: 'dog', correct: false },
  { word: 'nut', correct: true },
  { word: 'apple', correct: false },
  { word: 'nail', correct: true },
  { word: 'tiger', correct: false },
];

function LetterNLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="n" videoId="HB-59wPRRfg" questions={questions} />;
}

export default LetterNLesson;
