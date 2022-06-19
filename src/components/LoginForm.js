import React from "react";
import Button from "./Button";
import LoginEmailInput from "./LoginEmailInput";
import LoginPasswordInput from "./LoginPasswordInput";

const LoginForm = () => {
  return (
    <form className="login-form">
      <LoginEmailInput />
      <LoginPasswordInput />
      <Button classes={"login-btn"} text={"Log In"} />
    </form>
  );
};

export default LoginForm;
