import "../styles/main.css";
import FestivalCard from "./FestivalCard.component";
import CreateFestivalButton from "./CreateFestivalButton.component"

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
  return (
    <main className="main-festival">
        <CreateFestivalButton/>
      <FestivalCard festival={SAMPLE_FESTIVAL} />
    </main>
  );
}

export default Main;