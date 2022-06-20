import React from "react";

const SurveyQuestionNumber = ({ questionsNumber, setNumber }) => {
  const getInputValue = (event) => {
    // show the user input value to console
    setNumber(event.target.value);
    console.log(questionsNumber);
  };
  return (
    <input
      onChange={getInputValue}
      className="number-input"
      type="text"
      placeholder="Enter # of questions"
      required
    ></input>
  );
};

export default SurveyQuestionNumber;
