import React from "react";
import DropdownInput from "./DropdownInput";
import Question from "./Question";

const DropdownQuestionBox = () => {
  return (
    <p className="question">
      <Question />
      <DropdownInput />
    </p>
  );
};

export default DropdownQuestionBox;
