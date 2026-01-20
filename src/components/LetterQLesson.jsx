import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'queen', correct: true },
  { word: 'cat', correct: false },
  { word: 'quiet', correct: true },
  { word: 'ball', correct: false },
  { word: 'quack', correct: true },
  { word: 'dog', correct: false },
  { word: 'quick', correct: true },
  { word: 'apple', correct: false },
  { word: 'quill', correct: true },
  { word: 'tiger', correct: false },
];

function LetterQLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="q" videoId="Ox6CtRflFaE" questions={questions} />;
}

export default LetterQLesson;