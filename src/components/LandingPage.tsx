import { useState } from "react";
import "../App.css";
import Questions from "./Questions";

export default function LandingPage() {
  const [startGame, setStartGame] = useState(false);

  function startQuiz() {
    setStartGame((prev) => !prev);
  }

  return (
    <div className="landing-page">
      {startGame ? (
        <>
          <Questions startQuiz={startQuiz} />
        </>
      ) : (
        <>
          <h1>Quizzical</h1>
          <h3>get as many answers correct as possible</h3>
          <button onClick={startQuiz}>start game</button>
        </>
      )}
    </div>
  );
}
