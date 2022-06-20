import React from "react";

const EnterQuestionText = ({ setContent, content }) => {
  return (
    <div>
      <h1 className="question-txt">Enter your question: </h1>
      <input
        onChange={(e) => {
          setContent(e.target.value);
          console.log(content);
        }}
        className="question-input"
        type="text"
        placeholder="Question here"
        required
      ></input>
    </div>
  );
};

export default EnterQuestionText;
