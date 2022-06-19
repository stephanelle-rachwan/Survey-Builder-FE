import React from "react";

const Login = () => {
  return (
    <section className="login">
      <h1> Admin Log in </h1>
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
    </section>
  );
};

export default Login;
