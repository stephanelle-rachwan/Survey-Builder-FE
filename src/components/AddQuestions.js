import React from "react";
import SurveyQuestionInput from "./SurveyQuestionInput";
import SurveyQuestionNumber from "./SurveyQuestionNumber";
import SurveyTitleInput from "./SurveyTitleInput";
import SurveyTitleQuestion from "./SurveyTitleQuestion";
import Button from "./Button";
import ChooseQuestionType from "./ChooseQuestionType";
import ChooseQuestionTypeSelect from "./ChooseQuestionTypeSelect";
import EnterQuestionText from "./EnterQuestionText";
import EnterQuestionNumber from "./EnterQuestionNumber";
import EnterChoice from "./EnterChoice";

const AddQuestions = () => {
  return (
    <section className="add-questions">
      <p className="filling">
        <SurveyTitleQuestion />
        <SurveyTitleInput />
      </p>
      <p className="filling">
        <SurveyQuestionInput />
        <SurveyQuestionNumber />
      </p>
      <p className="filling">
        <ChooseQuestionType />
        <ChooseQuestionTypeSelect />

        <EnterQuestionText />

        <EnterQuestionNumber />

        <EnterChoice />
      </p>
      <div className="flex-btn">
        <Button classes={"submit-btn"} text={"Submit"} />
      </div>
    </section>
  );
};

export default AddQuestions;
