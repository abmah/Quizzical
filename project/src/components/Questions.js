import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import '../App.css';
import Question from './Question';

export default function Questions({ startQuiz }) {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    async function handleFetch() {
      await fetch(`https://opentdb.com/api.php?amount=4&category=9&type=multiple`)
        .then(res => res.json())
        .then(data => {
          setQuestions(data.results);
        })
    }
    handleFetch()
  }, [])

  // keeps track of all correct answers 

  function handleScore(answer) {
    setScore(prev => prev + answer)
  }

  function checkScore() {
    setGameEnded(true)
  }

  function PlayAgain() {
    setGameEnded(false)
    setQuestions([])
    startQuiz()
  }

  return (
    <div>
      {gameEnded && (
        score === 4 && <Confetti />
      )}
      {questions.map((question) => (
        <Question key={nanoid()} question={question} handleScore={handleScore} />
      ))}
      <hr />
      {gameEnded ?
        <h1>your score is {score}
          <button onClick={PlayAgain}>Main Menu</button>
        </h1>
        :
        <button onClick={checkScore}>check answers </button>
      }
    </div>
  )

}