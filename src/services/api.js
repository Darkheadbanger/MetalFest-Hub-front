import axios from "axios";

const API_URL = "http://localhost:5005";

const api = axios.create({
  baseURL: API_URL,
});

// Attach token from localStorage to every request if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
