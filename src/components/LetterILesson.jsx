import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'igloo', correct: true },
  { word: 'cat', correct: false },
  { word: 'insect', correct: true },
  { word: 'ball', correct: false },
  { word: 'ink', correct: true },
  { word: 'dog', correct: false },
  { word: 'island', correct: true },
  { word: 'apple', correct: false },
  { word: 'ice', correct: true },
  { word: 'tiger', correct: false },
];

function LetterILesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="i" videoId="DxWZfePx5d0" questions={questions} />;
}

export default LetterILesson;
