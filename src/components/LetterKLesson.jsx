import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'kangaroo', correct: true },
  { word: 'cat', correct: false },
  { word: 'kite', correct: true },
  { word: 'ball', correct: false },
  { word: 'key', correct: true },
  { word: 'dog', correct: false },
  { word: 'king', correct: true },
  { word: 'apple', correct: false },
  { word: 'kettle', correct: true },
  { word: 'tiger', correct: false },
];

function LetterKLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="k" videoId="Yc59YQTFe6M" questions={questions} />;
}

export default LetterKLesson;
