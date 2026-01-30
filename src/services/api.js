import axios from "axios";

// Use Vite env variable `VITE_API_URL` in production, fallback to localhost for dev
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";

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
