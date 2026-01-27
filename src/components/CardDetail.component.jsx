import "../styles/main.css";
import FestivalCard from "./FestivalCard.component";
import CreateFestivalButton from "./CreateFestivalButton.component"
import { Link } from "react-router-dom";
// Ici ca sera params
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

function CardDetail() {
  return (
    <main className="main-festival">
      <FestivalCard festival={SAMPLE_FESTIVAL} />
    </main>
  );
}

export default CardDetail;