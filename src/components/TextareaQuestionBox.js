import React from "react";

const TextareaQuestionBox = () => {
  return (
    <p className="question">
      <div className="question-txt">
        <span className="colored">Question 3: </span> Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Commodi, quod.
      </div>
      <div>
        <textarea
          cols="5"
          rows="5"
          placeholder="Enter your answer here"
        ></textarea>
      </div>
    </p>
  );
};

export default TextareaQuestionBox;
