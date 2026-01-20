import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'jump', correct: true },
  { word: 'cat', correct: false },
  { word: 'jellyfish', correct: true },
  { word: 'ball', correct: false },
  { word: 'jacket', correct: true },
  { word: 'dog', correct: false },
  { word: 'jam', correct: true },
  { word: 'apple', correct: false },
  { word: 'jug', correct: true },
  { word: 'tiger', correct: false },
];

function LetterJLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="j" videoId="Ko37jJdv67w" questions={questions} />;
}

export default LetterJLesson;
