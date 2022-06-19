import React from "react";
import EmailInput from "./EmailInput";
import Question from "./Question";

const EmailQuestionBox = () => {
  return (
    <p className="question">
      <Question />
      <EmailInput />
    </p>
  );
};

export default EmailQuestionBox;
