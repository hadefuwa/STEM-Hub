import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'fish', correct: true },
  { word: 'cat', correct: false },
  { word: 'fox', correct: true },
  { word: 'ball', correct: false },
  { word: 'frog', correct: true },
  { word: 'dog', correct: false },
  { word: 'fire', correct: true },
  { word: 'apple', correct: false },
  { word: 'fan', correct: true },
  { word: 'tiger', correct: false },
];

function LetterFLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="f" videoId="iKuZGsW6aWQ" questions={questions} />;
}

export default LetterFLesson;
