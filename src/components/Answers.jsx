/* eslint-disable react-hooks/refs */
import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    // eslint-disable-next-line react-hooks/purity
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((ans) => {
        const isSelected = selectedAnswer === ans;
        let cssClasses = "";

        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClasses = answerState;
        }

        return (
          <li key={ans} className="answer">
            <button
              onClick={() => onSelect(ans)}
              className={cssClasses}
            >
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
