import "../styles/main.css";
import FestivalCard from "./FestivalCard.component";
import CreateFestivalButton from "./CreateFestivalButton.component";
import { Link } from "react-router-dom";

function Main({ festivals = [], loading, error, isLoggedIn }) {


  return (
    <main className="main-festival">
      {isLoggedIn && <Link to="/AddFestival"><CreateFestivalButton/></Link>}

      {loading ? (
        <p>Loading festivals...</p>
      ) : error ? (
        <p>Erreur: {error.message || "Impossible de charger"}</p>
      ) : (
          festivals.map((fest) => <FestivalCard key={fest._id || fest.id} festival={fest} />)
      )}
    </main>
  );
}

export default Main;