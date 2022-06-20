import React, { useState } from "react";
import Button from "./Button";
import LoginEmailInput from "./LoginEmailInput";
import LoginPasswordInput from "./LoginPasswordInput";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="login-form">
      <LoginEmailInput setEmail={setEmail} email={email} />
      <LoginPasswordInput setPassword={setPassword} password={password} />

      <button
        type="button"
        className="login-btn"
        onClick={(e) => {
          e.preventDefault();
          axios
            .get(
              `http://127.0.0.1:8000/api/v1/admin/login?email=${email}&password=${password}`
            )
            .then((res) => {
              if (res["data"]["access_token"]) {
                localStorage.setItem(
                  "access_token",
                  res["data"]["access_token"]
                );
                window.location.href = "/Add_Survey";
              }
            })
            .catch(function (err) {
              alert("Wrong username or password");
              console.log(err);
            });
        }}
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
