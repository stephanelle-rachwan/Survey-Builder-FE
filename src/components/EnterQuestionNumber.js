import React from "react";

const EnterQuestionNumber = ({ choicesNumber, setNumber }) => {
  const getValue = (event) => {
    // show the user input value to console
    setNumber(event.target.value);
    console.log(choicesNumber);
  };
  return (
    <div>
      <h1 className="question-txt">
        How many choices do you want your question to have?{" "}
      </h1>
      <input
        onChange={getValue}
        className="numberChoices-input"
        type="number"
        placeholder="Enter # of choices"
        required
      ></input>
    </div>
  );
};

export default EnterQuestionNumber;
