import React from 'react';
import GenericLetterLesson from './GenericLetterLesson';

const questions = [
  { word: 'dog', correct: true },
  { word: 'cat', correct: false },
  { word: 'duck', correct: true },
  { word: 'ball', correct: false },
  { word: 'door', correct: true },
  { word: 'elephant', correct: false },
  { word: 'dinosaur', correct: true },
  { word: 'apple', correct: false },
  { word: 'doll', correct: true },
  { word: 'tiger', correct: false },
];

function LetterDLesson({ lesson }) {
  return <GenericLetterLesson lesson={lesson} letter="d" videoId="g3aadNOIjvQ" questions={questions} />;
}

export default LetterDLesson;
