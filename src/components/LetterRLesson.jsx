import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'rabbit', correct: true },
  { word: 'cat', correct: false },
  { word: 'rain', correct: true },
  { word: 'ball', correct: false },
  { word: 'run', correct: true },
  { word: 'dog', correct: false },
  { word: 'red', correct: true },
  { word: 'apple', correct: false },
  { word: 'ring', correct: true },
  { word: 'tiger', correct: false },
];

function LetterRLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="r" videoId="2Cr_aUDzWQU" questions={questions} />;
}

export default LetterRLesson;