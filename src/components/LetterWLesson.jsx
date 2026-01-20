import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'water', correct: true },
  { word: 'cat', correct: false },
  { word: 'we', correct: true },
  { word: 'ball', correct: false },
  { word: 'wind', correct: true },
  { word: 'dog', correct: false },
  { word: 'will', correct: true },
  { word: 'apple', correct: false },
  { word: 'window', correct: true },
  { word: 'fish', correct: false },
];

function LetterWLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="w" videoId="aMxIW5TlOzg" questions={questions} />;
}

export default LetterWLesson;