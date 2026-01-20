import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'elephant', correct: true },
  { word: 'cat', correct: false },
  { word: 'egg', correct: true },
  { word: 'ball', correct: false },
  { word: 'elevator', correct: true },
  { word: 'dog', correct: false },
  { word: 'elbow', correct: true },
  { word: 'apple', correct: false },
  { word: 'engine', correct: true },
  { word: 'tiger', correct: false },
];

function LetterELesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="e" videoId="G1wZw_WTAzI" questions={questions} />;
}

export default LetterELesson;
