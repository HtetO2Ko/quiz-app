import QuizCompleteImage from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((ans) => ans === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0],
  );

  const skippedAnswerShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100,
  );

  const correctAnswerShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100,
  );

  const wrongAnswerShare = Math.round(
    100 - correctAnswers.length - userAnswers.length,
  );

  return (
    <div id="summary">
      <img src={QuizCompleteImage} alt={QuizCompleteImage} />
      <h2>Quiz Complete</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerShare}%</span>
          <span className="text">Answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span className="text">Answer incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((ans, index) => {
          let cssClass = "user-answer";
          if (ans === null) {
            cssClass += " skipped";
          } else if (ans === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{ans ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
