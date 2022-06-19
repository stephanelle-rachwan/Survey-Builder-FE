import React from "react";

const EnterQuestionNumber = () => {
  return (
    <div>
      <h1 className="question-txt">
        How many choices do you want your question to have?{" "}
      </h1>
      <input
        className="numberChoices-input"
        type="number"
        placeholder="Enter # of choices"
        required
      ></input>
    </div>
  );
};

export default EnterQuestionNumber;
