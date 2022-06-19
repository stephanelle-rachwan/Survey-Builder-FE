import React from "react";
import LinearscaleInput from "./LinearscaleInput";
import Question from "./Question";

const LinearscaleQuestionBox = () => {
  return (
    <p className="question">
      <Question />
      <LinearscaleInput />
    </p>
  );
};

export default LinearscaleQuestionBox;
