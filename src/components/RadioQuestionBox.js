import React from "react";
import Question from "./Question";
import RadioInput from "./RadioInput";

const RadioQuestionBox = () => {
  return (
    <p className="question">
      <Question />
      <RadioInput />
    </p>
  );
};

export default RadioQuestionBox;
