import React from "react";
import ChooseQuestionType from "./ChooseQuestionType";
import ChooseQuestionTypeSelect from "./ChooseQuestionTypeSelect";
import EnterQuestionNumber from "./EnterQuestionNumber";
import EnterQuestionText from "./EnterQuestionText";
import EnterChoice from "./EnterChoice";

const QuestionBox = () => {
  const [content, setContent] = React.useState("");
  const [choicesNumber, setNumber] = React.useState("");

  return (
    <p className="filling">
      <ChooseQuestionType />
      <ChooseQuestionTypeSelect />

      <EnterQuestionText setContent={setContent} content={content} />

      <EnterQuestionNumber
        setNumber={setNumber}
        choicesNumber={choicesNumber}
      />

      {choicesNumber !== "" &&
        [...Array(parseInt(choicesNumber))].map((elementInArray, index) => (
          <div className="" key={index}>
            {" "}
            <EnterChoice />{" "}
          </div>
        ))}
    </p>
  );
};

export default QuestionBox;
