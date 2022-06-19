import React from "react";

const LoginEmailInput = () => {
  return (
    <div className="input-box">
      <input
        className="login-inputs"
        type="email"
        placeholder="Email address*"
        required
      ></input>
    </div>
  );
};

export default LoginEmailInput;
