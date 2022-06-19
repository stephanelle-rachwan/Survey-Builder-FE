import React from "react";

const ChooseQuestionTypeSelect = () => {
  return (
    <select className="type-input">
      <option value="" disabled selected>
        Select your question type
      </option>
      <option value="radio">Radio Button</option>
      <option value="checkbox">Checkbox</option>
      <option value="text">Text</option>
      <option value="email">Email</option>
      <option value="dropdown">Dropdown</option>
      <option value="linear_scale">Linear Scale</option>
    </select>
  );
};

export default ChooseQuestionTypeSelect;
