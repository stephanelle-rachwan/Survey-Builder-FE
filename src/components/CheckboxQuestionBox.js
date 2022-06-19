import React from "react";

const CheckboxQuestionBox = () => {
  return (
    <p className="question">
      <div className="question-txt">
        <span className="colored">Question 2: </span> select multiple
        checkboxes:
      </div>
      <div>
        <input
          className="checkbox"
          type="checkbox"
          value="Male"
          name="gender"
        />
        Male <br />
        <input
          className="checkbox"
          type="checkbox"
          value="Female"
          name="gender"
        />
        Female <br />
        <input
          className="checkbox"
          type="checkbox"
          value="Other"
          name="gender"
        />
        Other
      </div>
    </p>
  );
};

export default CheckboxQuestionBox;
