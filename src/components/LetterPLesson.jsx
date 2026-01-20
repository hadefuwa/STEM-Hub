import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'pig', correct: true },
  { word: 'cat', correct: false },
  { word: 'panda', correct: true },
  { word: 'ball', correct: false },
  { word: 'penguin', correct: true },
  { word: 'dog', correct: false },
  { word: 'pizza', correct: true },
  { word: 'apple', correct: false },
  { word: 'pencil', correct: true },
  { word: 'tiger', correct: false },
];

function LetterPLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="p" videoId="iUs5T02AB-I" questions={questions} />;
}

export default LetterPLesson;
