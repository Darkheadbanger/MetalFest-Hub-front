// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import "./styles/Global.css"
import './App.css'
import Routers from "./Routers"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/auth.context";
import festivalService from "./services/festival.service";

function App() {
  // const [count, setCount] = useState(0)
  const { isLoggedIn } = useContext(AuthContext);
  const [festivals, setFestivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    festivalService
      .getAllFestival()
      .then((res) => {
        if (!mounted) return;
        let data = res.data;
        const normalizeFestArray = Array.isArray(data) ? data : data.festivals || data.data || [];
        setFestivals(normalizeFestArray);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <Routers  setFestivals={setFestivals} setLoading={setLoading} setError={setError} isLoggedIn={isLoggedIn} festivals={festivals} loading={loading} error={error}></Routers>
    </>
  )
}

export default App
