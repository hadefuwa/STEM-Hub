import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'van', correct: true },
  { word: 'cat', correct: false },
  { word: 'very', correct: true },
  { word: 'ball', correct: false },
  { word: 'visit', correct: true },
  { word: 'dog', correct: false },
  { word: 'voice', correct: true },
  { word: 'apple', correct: false },
  { word: 'vase', correct: true },
  { word: 'fish', correct: false },
];

function LetterVLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="v" videoId="sSk1n0zSULs" questions={questions} />;
}

export default LetterVLesson;