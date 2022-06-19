import React from "react";

const DropdownQuestionBox = () => {
  return (
    <p className="question">
      <div className="question-txt">
        <span className="colored">Question 5: </span> Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Commodi, quod.
      </div>
      <div>
        <select className="select-menu">
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </div>
    </p>
  );
};

export default DropdownQuestionBox;
