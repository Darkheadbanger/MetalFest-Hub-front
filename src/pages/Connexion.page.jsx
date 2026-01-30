import React from "react";
import "../styles/connexion.css";
import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth.context";

 const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005"; //VITE_API_URL

function Connexion({ onSwitch }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  
  const navigate = useNavigate();
    const { storeToken, authenticateUser } = useContext(AuthContext);
 
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    try{
      const response = await axios.post(`${API_URL}/auth/login`, requestBody)

      storeToken(response.data.authToken);
            // Verify the token by sending a request 
        // to the server's JWT validation endpoint. 
      authenticateUser(); 
      navigate("/");

    }catch(error){
      const errorMessage = error?.response?.data?.message || error.message || "Signup failed";
      setErrorMessage(errorMessage);
    }

  };

  const formContent = (
    <div>
      <form className="connexion-info" onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" value={email} onChange={handleEmail} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={password} onChange={handlePassword} />
        <button type="submit">Login</button>
        <div className="connexion-links">
          {!onSwitch && (
            <Link to="/signup">Register</Link>
          )}
                {onSwitch && (
                  <div className="auth-switch">
                    <div className="auth-option active" onClick={() => onSwitch("login")}>Login</div>
                    <div className="auth-option" onClick={() => onSwitch("signup")}>Register</div>
                  </div>
                )}
        </div>
      </form>
    </div>
  );

  if (onSwitch) {
    return (
      <div className="connexion-inner">
        {formContent}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    );
  }

  return (
    <aside className="connexion-container">
      {formContent}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </aside>
  );
}

export default Connexion;
