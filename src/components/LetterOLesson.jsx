import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'octopus', correct: true },
  { word: 'cat', correct: false },
  { word: 'orange', correct: true },
  { word: 'ball', correct: false },
  { word: 'otter', correct: true },
  { word: 'dog', correct: false },
  { word: 'ostrich', correct: true },
  { word: 'apple', correct: false },
  { word: 'olive', correct: true },
  { word: 'tiger', correct: false },
];

function LetterOLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="o" videoId="jVPvqfUzACc" questions={questions} />;
}

export default LetterOLesson;
