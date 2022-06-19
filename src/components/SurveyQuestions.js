import React from "react";
import Button from "./Button";

const SurveyQuestions = () => {
  return (
    <section className="survey-q">
      <h1 className="survey-title">Survey Name</h1>
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
      <p className="question">
        <div className="question-txt">
          <span className="colored">Question 2: </span> select multiple
          chexkboxes:
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
      <p className="question">
        <div className="question-txt">
          <span className="colored">Question 3: </span> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Commodi, quod.
        </div>
        <div>
          <textarea
            cols="5"
            rows="5"
            placeholder="Enter your answer here"
          ></textarea>
        </div>
      </p>
      <p className="question">
        <div className="question-txt">
          <span className="colored">Question 4: </span> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Commodi, quod.
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
      <p className="question">
        <div className="question-txt">
          <span className="colored">Question 5: </span> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Commodi, quod.
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
      <p className="question">
        <div className="question-txt">
          <span className="colored">Question 6: </span> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Commodi, quod.
        </div>
        <div>
          <ul className="likert">
            <li> Not Guilty </li>
            <li>
              <input type="radio" name="guilty" value="1" />
            </li>
            <li>
              <input type="radio" name="guilty" value="2" />
            </li>
            <li>
              <input type="radio" name="guilty" value="3" />
            </li>
            <li>
              <input type="radio" name="guilty" value="4" />
            </li>
            <li>
              <input type="radio" name="guilty" value="5" />
            </li>
            <li> Very Guilty </li>
          </ul>
        </div>
      </p>
      <p className="question">
        <div className="question-txt">
          <span className="colored">Question 7: </span> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Commodi, quod.
        </div>
        <div>
          <input className="radio" type="radio" value="yes" name="boolean" />
          Yes <br />
          <input className="radio" type="radio" value="no" name="boolean" />
          No <br />
        </div>
      </p>
      <div className="flex-btn">
        <Button classes={"submit-btn"} text={"Submit"} />
      </div>
    </section>
  );
};

export default SurveyQuestions;
