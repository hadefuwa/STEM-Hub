import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'zebra', correct: true },
  { word: 'cat', correct: false },
  { word: 'zip', correct: true },
  { word: 'ball', correct: false },
  { word: 'zoo', correct: true },
  { word: 'dog', correct: false },
  { word: 'buzz', correct: true },
  { word: 'apple', correct: false },
  { word: 'fizz', correct: true },
  { word: 'fish', correct: false },
];

function LetterZLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="z" videoId="sIM1NAevMuQ" questions={questions} />;
}

export default LetterZLesson;
