import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'hat', correct: true },
  { word: 'cat', correct: false },
  { word: 'house', correct: true },
  { word: 'ball', correct: false },
  { word: 'horse', correct: true },
  { word: 'dog', correct: false },
  { word: 'hippo', correct: true },
  { word: 'apple', correct: false },
  { word: 'hand', correct: true },
  { word: 'tiger', correct: false },
];

function LetterHLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="h" videoId="TVl_PqKdL48" questions={questions} />;
}

export default LetterHLesson;
