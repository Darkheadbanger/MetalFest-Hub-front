import Header from "../components/Header.component";
import FestivalCardId from "../components/FestivalCardId.component";
import { useParams } from "react-router-dom";
function FestivalIdPage({ festivals }) {
  const { id } = useParams();

  const festivalFound = (festivals).find((fest) => {
    return fest._id === id;
  });
  if (!festivalFound) {
    return (
      <>
        <Header />
        <p>Festivals empty</p>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <FestivalCardId festival={festivalFound}/>
      </>
    );
  }
}

export default FestivalIdPage;
