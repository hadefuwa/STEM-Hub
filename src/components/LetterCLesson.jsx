import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'cat', correct: true },
  { word: 'ball', correct: false },
  { word: 'car', correct: true },
  { word: 'dog', correct: false },
  { word: 'cup', correct: true },
  { word: 'elephant', correct: false },
  { word: 'cake', correct: true },
  { word: 'apple', correct: false },
  { word: 'cookie', correct: true },
  { word: 'tiger', correct: false },
];

function LetterCLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="c" videoId="eE98qbRwyeo" questions={questions} />;
}

export default LetterCLesson;
