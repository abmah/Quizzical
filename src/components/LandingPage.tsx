import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Quizzical</h1>
      <h3>get as many answers correct as possible</h3>
      <Link to="quiz" className="action">
        start game
      </Link>
    </div>
  );
}
