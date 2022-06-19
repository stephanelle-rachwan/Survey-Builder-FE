import React from "react";

const RadioQuestionBox = () => {
  return (
    <p className="question">
      <div className="question-txt">
        <span className="colored">Question 1: </span> select one of the radio
        buttons
      </div>
      <div>
        <input className="radio" type="radio" value="Male" name="gender" />
        Male <br />
        <input className="radio" type="radio" value="Female" name="gender" />
        Female <br />
        <input className="radio" type="radio" value="Other" name="gender" />
        Other
      </div>
    </p>
  );
};

export default RadioQuestionBox;
