import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'umbrella', correct: true },
  { word: 'cat', correct: false },
  { word: 'up', correct: true },
  { word: 'ball', correct: false },
  { word: 'under', correct: true },
  { word: 'dog', correct: false },
  { word: 'us', correct: true },
  { word: 'apple', correct: false },
  { word: 'uncle', correct: true },
  { word: 'fish', correct: false },
];

function LetterULesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="u" videoId="dUPp9i8o2Ds" questions={questions} />;
}

export default LetterULesson;