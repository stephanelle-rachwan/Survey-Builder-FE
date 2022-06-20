import React from "react";

const LoginPasswordInput = ({ setPassword, password }) => {
  return (
    <div className="input-box">
      <input
        className="login-inputs"
        type="password"
        placeholder="Password*"
        onChange={(e) => {
          setPassword(e.target.value);
          console.log(password);
        }}
        required
      ></input>
    </div>
  );
};

export default LoginPasswordInput;
