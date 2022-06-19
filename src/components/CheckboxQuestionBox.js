import React from "react";
import CheckboxInput from "./CheckboxInput";
import Question from "./Question";

const CheckboxQuestionBox = () => {
  return (
    <p className="question">
      <Question />
      <CheckboxInput />
    </p>
  );
};

export default CheckboxQuestionBox;
