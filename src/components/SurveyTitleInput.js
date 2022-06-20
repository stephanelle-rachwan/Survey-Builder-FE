import React from "react";

const SurveyTitleInput = ({ setTitle, title }) => {
  return (
    <input
      onChange={(e) => {
        setTitle(e.target.value);
        console.log(title);
      }}
      className="title-input"
      type="text"
      placeholder="Enter survey title"
      required
    ></input>
  );
};

export default SurveyTitleInput;
