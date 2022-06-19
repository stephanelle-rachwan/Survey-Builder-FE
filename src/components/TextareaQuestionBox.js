import React from "react";
import Question from "./Question";
import TextareaInput from "./TextareaInput";

const TextareaQuestionBox = () => {
  return (
    <p className="question">
      <Question />
      <TextareaInput />
    </p>
  );
};

export default TextareaQuestionBox;
