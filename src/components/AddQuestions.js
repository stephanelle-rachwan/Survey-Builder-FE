import React from "react";

const AddQuestions = () => {
  return (
    <section className="add-questions">
      <p className="filling">
        <h1 className="question-txt">Survey Title:</h1>
        <input
          className="title-input"
          type="text"
          placeholder="Enter survey title"
          required
        ></input>
      </p>
      <p className="filling">
        <h1 className="question-txt">How many questions do you want?</h1>
        <input
          className="number-input"
          type="number"
          placeholder="Enter # of questions"
          required
        ></input>
      </p>
      <p className="filling">
        <h1 className="question-txt">Choose your question type: </h1>
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
      </p>
      <p className="filling">
        <h1 className="question-txt">Enter your question: </h1>
        <input
          className="question-input"
          type="text"
          placeholder="Question here"
          required
        ></input>
      </p>
      <p className="filling">
        <h1 className="question-txt">
          How many choices do you want your question to have?{" "}
        </h1>
        <input
          className="numberChoices-input"
          type="number"
          placeholder="Enter # of choices"
          required
        ></input>
      </p>
      <p className="filling">
        <h1 className="question-txt">Choices: </h1>
        <input
          className="choices-input"
          type="text"
          placeholder="Enter choice"
          required
        ></input>
      </p>
      <div className="flex-btn">
        <button type="button" className="submit-btn">
          Submit
        </button>
      </div>
    </section>
  );
};

export default AddQuestions;
