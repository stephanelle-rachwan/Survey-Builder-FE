import React from "react";
import Button from "./Button";
import CheckboxQuestionBox from "./CheckboxQuestionBox";
import DropdownQuestionBox from "./DropdownQuestionBox";
import EmailQuestionBox from "./EmailQuestionBox";
import LinearscaleQuestionBox from "./LinearscaleQuestionBox";
import RadioQuestionBox from "./RadioQuestionBox";
import TextareaQuestionBox from "./TextareaQuestionBox";

const SurveyQuestions = () => {
  return (
    <section className="survey-q">
      <h1 className="survey-title">Survey Name</h1>
      <RadioQuestionBox />
      <CheckboxQuestionBox />
      <TextareaQuestionBox />
      <EmailQuestionBox />
      <DropdownQuestionBox />
      <LinearscaleQuestionBox />
      <div className="flex-btn">
        <Button classes={"submit-btn"} text={"Submit"} />
      </div>
    </section>
  );
};

export default SurveyQuestions;
