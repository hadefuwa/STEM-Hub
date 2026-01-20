import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'sun', correct: true },
  { word: 'cat', correct: false },
  { word: 'snake', correct: true },
  { word: 'ball', correct: false },
  { word: 'sit', correct: true },
  { word: 'dog', correct: false },
  { word: 'star', correct: true },
  { word: 'apple', correct: false },
  { word: 'sock', correct: true },
  { word: 'tiger', correct: false },
];

function LetterSLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="s" videoId="bD7HXCl5v2c" questions={questions} />;
}

export default LetterSLesson;