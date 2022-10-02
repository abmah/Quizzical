import { useState } from "react";
import Confetti from "react-confetti";
import { useLoaderData, useNavigate } from "react-router-dom";

import { Question as IQuestion, QuestionsResponse } from "../types/questions";
import Question from "./Question";

const NUMBER_OF_QUESTIONS = 4;

export async function loader() {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${NUMBER_OF_QUESTIONS}&category=9&type=multiple`
  );
  const data = (await res.json()) as QuestionsResponse;
  return data.results;
}

export default function QuizPage() {
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  const questions = useLoaderData() as IQuestion[];
  const navigate = useNavigate();

  function handleSubmission(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setGameEnded(true);
    const formData = new FormData(e.target as HTMLFormElement);

    const score = Array.from(formData.entries()).reduce((prev, [q, a], i) => {
      return prev + Number(questions[i].correct_answer === a);
    }, 0);
    setScore(score);
  }

  return (
    <form onSubmit={handleSubmission}>
      {gameEnded && score === NUMBER_OF_QUESTIONS && <Confetti />}
      {questions.map((question) => (
        <Question key={question.question} question={question} />
      ))}
      <hr />
      {gameEnded ? (
        <div>
          <h1>your score is {score}</h1>
          <button className="action" onClick={() => navigate(0)}>
            Main Menu
          </button>
        </div>
      ) : (
        <button type="submit" className="action">
          check answers
        </button>
      )}
    </form>
  );
}
