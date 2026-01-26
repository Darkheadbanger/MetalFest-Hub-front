import React from "react";
import "../styles/register.css";

function CreateAccount() {
  return (
    <aside className="register-container">
      <form className="register-info">
        <label htmlFor="username">Username or email</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Register</button>
        <div className="register-links">
          <a href="#">Register</a>
          <a href="#">Forgot login?</a>
        </div>
      </form>
    </aside>
  );
}

export default CreateAccount;
