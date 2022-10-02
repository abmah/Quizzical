import { useMemo } from "react";
import { Question as IQuestion } from "../types/questions";

function Question({ question }: { question: IQuestion }) {
  const options = useMemo(
    () =>
      [...question.incorrect_answers, question.correct_answer].sort(
        () => 0.5 - Math.random()
      ),
    [question.incorrect_answers, question.correct_answer]
  );

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: question.question }} />
      <div>
        {options.map((q) => (
          <div key={q}>
            <input type="radio" name={question.question} id={q} value={q} />
            <label htmlFor={q} dangerouslySetInnerHTML={{ __html: q }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
