import React from "react";

const LinearscaleQuestionBox = () => {
  return (
    <p className="question">
      <div className="question-txt">
        <span className="colored">Question 6: </span> Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Commodi, quod.
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
  );
};

export default LinearscaleQuestionBox;
