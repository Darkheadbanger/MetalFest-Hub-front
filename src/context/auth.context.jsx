// src/context/auth.context.jsx

import React, { useState, useEffect } from "react";
import api from "../services/api";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const authenticateUser = async () => {
    const storedToken = localStorage.getItem("authToken");

    if(storedToken){
    try {
      const response = await api.get(`/auth/verify`);

      const user = response.data;

      setIsLoggedIn(true);
      setIsLoading(false);
      setUser(user);
    } catch (error) {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
      console.error(error)
    }}else{
        // If the token is not available (or is removed)
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);         
    }
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const logout = () => {
    // Remove token and refresh auth state
    removeToken();
    authenticateUser();
  };

  useEffect(() => {
    const checkAuth = async () => {
      await authenticateUser();
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
