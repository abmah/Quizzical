import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';

function Question({ question, handleScore }) {
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [markedAsCorrect, setMarkedAsCorrect] = useState(false)

    useEffect(() => {
        function handleAnswer() {
            if (selectedAnswer === question.correct_answer) {
                if (!markedAsCorrect) {
                    console.log("correct")
                    setMarkedAsCorrect(true)
                }
            }
            if (selectedAnswer !== question.correct_answer) {
                if (markedAsCorrect) {
                    console.log("wrong")
                    setMarkedAsCorrect(false)
                }
            }
        }
        handleAnswer()
    }, [selectedAnswer])

    /* style={{ backgroundColor: !gameEnded ? "#58e09a" : '' }} */

    return (
        <div>
            <p>{question.question}</p>
            <button
                onClick={() => setSelectedAnswer(question.correct_answer)}
                style={{ backgroundColor: question.correct_answer === selectedAnswer ? "#ffff80" : "" }}
            >
                {question.correct_answer}
            </button>
            {question.incorrect_answers.map((inc_answer) => (
                <button
                    key={nanoid()}
                    onClick={() => setSelectedAnswer(inc_answer)}
                    style={{ backgroundColor: inc_answer === selectedAnswer ? "#ffff80" : "" }}
                >
                    {inc_answer}
                </button>
            ))}
        </div>
    )
}

export default Question