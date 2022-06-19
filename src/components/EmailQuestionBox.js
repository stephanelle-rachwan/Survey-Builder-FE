import React from "react";

const EmailQuestionBox = () => {
  return (
    <p className="question">
      <div className="question-txt">
        <span className="colored">Question 4: </span> Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Commodi, quod.
      </div>
      <div>
        <input
          className="email-input"
          type="email"
          placeholder="Enter email"
          required
        ></input>
      </div>
    </p>
  );
};

export default EmailQuestionBox;
