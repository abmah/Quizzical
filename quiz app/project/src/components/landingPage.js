import React from 'react';
import '../App.css';
export default function LandingPage(props) {
  return (
    <div className='landing-page'>
      <h1>Quizzical</h1>
      <h3>get as many answers correct as possible</h3>
      <button onClick={props.startQuiz} >
        start game
      </button>
    </div>
  )

}