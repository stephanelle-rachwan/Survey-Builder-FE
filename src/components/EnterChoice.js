import React from "react";

const EnterChoice = () => {
  return (
    <div>
      <h1 className="question-txt">Choices: </h1>
      <input
        className="choices-input"
        type="text"
        placeholder="Enter choice"
        required
      ></input>
    </div>
  );
};

export default EnterChoice;
