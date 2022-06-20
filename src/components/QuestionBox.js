import React from "react";
import ChooseQuestionType from "./ChooseQuestionType";
import ChooseQuestionTypeSelect from "./ChooseQuestionTypeSelect";
import EnterQuestionNumber from "./EnterQuestionNumber";
import EnterQuestionText from "./EnterQuestionText";
import EnterChoice from "./EnterChoice";

const QuestionBox = () => {
  return (
    <p className="filling">
      <ChooseQuestionType />
      <ChooseQuestionTypeSelect />

      <EnterQuestionText />

      <EnterQuestionNumber />

      <EnterChoice />
    </p>
  );
};

export default QuestionBox;
