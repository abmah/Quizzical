import './App.css';
import React from 'react';
import Questions from './components/questions';
import LandingPage from './components/landingPage';
import { nanoid } from 'nanoid';
function App() {

  const [page, setPage] = React.useState(false);


  function startQuiz() {
    setPage(prev => !prev);

  }

  return (
    <div>
      {!page && <LandingPage startQuiz={startQuiz} />}
      {page && <Questions startQuiz={startQuiz} id={nanoid()} />}
    </div>
  )
}

export default App;
