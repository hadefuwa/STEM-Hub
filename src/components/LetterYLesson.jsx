import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'yes', correct: true },
  { word: 'cat', correct: false },
  { word: 'yellow', correct: true },
  { word: 'ball', correct: false },
  { word: 'you', correct: true },
  { word: 'dog', correct: false },
  { word: 'yard', correct: true },
  { word: 'apple', correct: false },
  { word: 'yell', correct: true },
  { word: 'fish', correct: false },
];

function LetterYLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="y" videoId="qWKMChCaSKI" questions={questions} />;
}

export default LetterYLesson;