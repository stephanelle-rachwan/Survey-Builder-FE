import React from "react";

const Button = ({ classes, text }) => {
  return (
    <button type="button" className={classes}>
      {text}
    </button>
  );
};

export default Button;
