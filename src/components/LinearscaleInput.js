import React from "react";

const LinearscaleInput = () => {
  return (
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
  );
};

export default LinearscaleInput;
