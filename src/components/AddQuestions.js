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
import QuestionBox from "./QuestionBox";

const AddQuestions = () => {
  const [title, setTitle] = React.useState("");
  const [questionsNumber, setNumber] = React.useState("");

  return (
    <section className="add-questions">
      <p className="filling">
        <SurveyTitleQuestion />
        <SurveyTitleInput setTitle={setTitle} title={title} />
      </p>
      <div className="filling">
        <SurveyQuestionInput />
        <SurveyQuestionNumber
          setNumber={setNumber}
          questionsNumber={questionsNumber}
        />
      </div>
      {questionsNumber !== "" &&
        [...Array(parseInt(questionsNumber))].map((elementInArray, index) => (
          <div className="" key={index}>
            {" "}
            <QuestionBox />{" "}
          </div>
        ))}
      {/* <QuestionBox /> */}
      <div className="flex-btn">
        <Button classes={"submit-btn"} text={"Submit"} />
      </div>
    </section>
  );
};

export default AddQuestions;
