import React from "react";

const Nav = () => {
  return (
    <nav>
      <h1 className="logo">SE Surveys</h1>
      <ul class="nav-list">
        <li>
          <a href="#" className="active">
            Users
          </a>
        </li>
        <li>
          <a href="/Login">Admin</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
