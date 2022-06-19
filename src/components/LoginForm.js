import React from "react";

const LoginForm = () => {
  return (
    <form className="login-form">
      <div className="input-box">
        <input
          className="login-inputs"
          type="email"
          placeholder="Email address*"
          required
        ></input>
      </div>
      <div className="input-box">
        <input
          className="login-inputs"
          type="password"
          placeholder="Password*"
          required
        ></input>
      </div>
      <button type="button" className="login-btn">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
