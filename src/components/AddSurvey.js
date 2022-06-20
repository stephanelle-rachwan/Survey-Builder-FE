import React from "react";
import Button from "./Button";

const AddSurvey = () => {
  return (
    <section className="add-survey">
      <button
        type="button"
        className="add-btn"
        onClick={(e) => {
          console.log("HEEY");
          window.location.href = "/Add_Questions";
        }}
      >
        Create a new survey
      </button>
    </section>
  );
};

export default AddSurvey;
