import "../styles/main.css";
import FestivalCard from "./FestivalCard.component";
import CreateFestivalButton from "./CreateFestivalButton.component";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import festivalService from "../services/festival.service";

function Main() {
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
        const normalizFestArray = Array.isArray(data) ? data : data.festivals || data.data || [].
        setFestivals(normalizFestArray)
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
    <main className="main-festival">
      {isLoggedIn && <Link to="/AddFestival"><CreateFestivalButton/></Link>}

      {loading ? (
        <p>Loading festivals...</p>
      ) : error ? (
        <p>Erreur: {error.message || "Impossible de charger"}</p>
      ) : (
        festivals.map((fest) => <FestivalCard key={fest.id} festival={fest} />)
      )}
    </main>
  );
}

export default Main;