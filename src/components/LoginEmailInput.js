import React from "react";

const LoginEmailInput = ({ setEmail, email }) => {
  return (
    <div className="input-box">
      <input
        className="login-inputs"
        type="email"
        placeholder="Email address*"
        onChange={(e) => {
          setEmail(e.target.value);
          console.log(email);
        }}
        required
      ></input>
    </div>
  );
};

export default LoginEmailInput;
