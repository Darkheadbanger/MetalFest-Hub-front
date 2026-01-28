import "../styles/main.css";
import FestivalCard from "./FestivalCard.component";
import CreateFestivalButton from "./CreateFestivalButton.component"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
const SAMPLE_FESTIVAL = {
  id: 1,
  image: "",
  title: "Hellfest",
  url: "https://www.hellfest.fr",
  date: "21-23 Juin",
  place: "Clisson, France",
  bands: [
    { id: 1, name: "Band A" },
    { id: 2, name: "Band B" },
  ],
};

function Main() {
  const  { isLoggedIn, user } = useContext(AuthContext)
  return (
    <main className="main-festival">
      {isLoggedIn ? (
        <Link to="/AddFestival"> <CreateFestivalButton/></Link>
        ) : <h1>Welcome and see all the metal festival in the world</h1>
      }
      <FestivalCard festival={SAMPLE_FESTIVAL} />
    </main>
  );
}

export default Main;