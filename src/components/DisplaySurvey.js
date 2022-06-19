import React from "react";
import DisplaySurveyName from "./DisplaySurveyName";

const DisplaySurvey = () => {
  return (
    <section className="surveys-displayed">
      <h1 className="survey-title">List of Surveys</h1>
      <DisplaySurveyName />
    </section>
  );
};

export default DisplaySurvey;
