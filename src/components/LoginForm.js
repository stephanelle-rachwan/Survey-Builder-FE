import React from "react";
import LoginEmailInput from "./LoginEmailInput";
import LoginPasswordInput from "./LoginPasswordInput";

const LoginForm = () => {
  return (
    <form className="login-form">
      <LoginEmailInput />
      <LoginPasswordInput />
      <button type="button" className="login-btn">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
