import React from "react";

const EnterQuestionText = () => {
  return (
    <div>
      <h1 className="question-txt">Enter your question: </h1>
      <input
        className="question-input"
        type="text"
        placeholder="Question here"
        required
      ></input>
    </div>
  );
};

export default EnterQuestionText;
