import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'goat', correct: true },
  { word: 'cat', correct: false },
  { word: 'guitar', correct: true },
  { word: 'ball', correct: false },
  { word: 'garden', correct: true },
  { word: 'dog', correct: false },
  { word: 'grapes', correct: true },
  { word: 'apple', correct: false },
  { word: 'gift', correct: true },
  { word: 'tiger', correct: false },
];

function LetterGLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="g" videoId="3_ABJNXseIk" questions={questions} />;
}

export default LetterGLesson;
