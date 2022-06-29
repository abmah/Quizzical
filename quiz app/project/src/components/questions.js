import { nanoid } from 'nanoid';
import React, { useEffect } from 'react'
import Confetti from 'react-confetti'
import '../App.css';
export default function Questions(props) {

  const [question, setQuestion] = React.useState([]);



  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=4&category=9&type=multiple`)
      .then(res => res.json())
      .then(data => {
        setQuestion(data.results);
      }
      )
  }, [])





  const [answers, setAnswers] = React.useState([]);


  const listOfQuestions = question.map(item =>
  (
    {
      question: item.question,
      correct_answer: item.correct_answer,
      incorrect_answers: item.incorrect_answers,
      key: nanoid(),

    }

  )
  )

  var rightAnswersArray = []
  for (let i = 0; i < listOfQuestions.length; i++) {
    rightAnswersArray.push(listOfQuestions[i].correct_answer)
  }
  // keeps track of all correct answers 
  console.log(rightAnswersArray)

  const [gameEnded, setGameEnded] = React.useState(true)


  function handlChange(e) {
    setAnswers(prev => [...prev, e.target.value])
  };


  useEffect(() => {
    console.log(answers)
  }, [answers]);

  const [score, setScore] = React.useState(0);


  function checkScore() {
    let score = 0
    for (let i = 0; i < answers.length; i++) {
      for (let j = 0; j < answers.length; j++) {
        if (answers[i] === rightAnswersArray[j]) {
          score++
        }
      }
    }


    setGameEnded(false)

    setScore(score)

  }


  function PlayAgain() {

    setGameEnded(true)
    rightAnswersArray = []
    setAnswers([])
    props.startQuiz()


  }


  const questionRender = listOfQuestions.map(item => {
    return (

      <div key={nanoid()}>
        {!gameEnded && score === 4 && < Confetti />}
        <p dangerouslySetInnerHTML={{ __html: item.question }} />
        <button onClick={handlChange} style={{ backgroundColor: !gameEnded ? "#58e09a" : '' }} value={item.correct_answer} dangerouslySetInnerHTML={{ __html: item.correct_answer }} />
        <button onClick={handlChange} value={item.incorrect_answers[0]} dangerouslySetInnerHTML={{ __html: item.incorrect_answers[0] }} />
        <button onClick={handlChange} value={item.incorrect_answers[1]} dangerouslySetInnerHTML={{ __html: item.incorrect_answers[1] }} />
        <button onClick={handlChange} value={item.incorrect_answers[2]} dangerouslySetInnerHTML={{ __html: item.incorrect_answers[2] }} />
      </div>)

  })

  return (
    <div>
      {questionRender}
      <hr></hr>
      {gameEnded ? <button onClick={checkScore}>check answers </button> : <h1 >your score is {score} <button onClick={PlayAgain}>Main Menu</button></h1>}
    </div>
  )

}