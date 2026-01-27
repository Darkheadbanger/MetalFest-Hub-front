import React from "react";
import "../styles/createAccount.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const API_URL = "http://localhost:5005";

function CreateAccount({ onSwitch }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value)

  const requestBody = {email, password}

    const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(undefined);
    try {
      await axios.post(`${API_URL}/auth/signup`, requestBody );
      navigate("/connexion");
    } catch (err) {
      const errorMessage = err?.response?.data?.message || err.message || "Signup failed";
      setErrorMessage(errorMessage);
    }
  };
  const formContent = (
    <div>
      <form className="register-info" onSubmit={handleSignupSubmit}>
        <label htmlFor="email">email</label>
        <input type="text" name="email" value={email} onChange={handleEmail} id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={password} onChange={handlePassword} id="password" />
        <button type="submit">Register</button>
        <div className="register-links">
          {!onSwitch && (
            <Link to="/connexion">Login</Link>
          )}
                {onSwitch && (
                  <div className="auth-switch">
                    <div className="auth-option" onClick={() => onSwitch("login")}>Login</div>
                    <div className="auth-option active" onClick={() => onSwitch("signup")}>Register</div>
                  </div>
                )}
        </div>
      </form>
    </div>
  );

  if (onSwitch) {
    return (
      <div className="register-inner">
        {formContent}
        {errorMessage && (<p className="error-message">{errorMessage}</p>)}
      </div>
    );
  }

  return (
    <aside className="register-container">
      {formContent}
      {errorMessage && (<p className="error-message">{errorMessage}</p>)}
    </aside>
  );
}

export default CreateAccount;
