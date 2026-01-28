import FestivalImage from "./FestivalImage.component.jsx";
import FestivalInfo from "./FestivalInfo.component.jsx";
import FestivalDetails from "./FestivalDetails.component.jsx";
import FeaturedBands from "./FeaturedBands.component.jsx";
import ModifyButton from "./ModifyButton.component.jsx";
import DeleteButton from "./DeleteButton.component.jsx"
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

import "../styles/CardFestival.css"
export default function FestivalCard({ festival = {} }) {
  const { image, title, url, date, place, bands } = festival;
  const { isLoggedIn } = useContext(AuthContext);
  const id = festival._id || festival.id || '';

  return (
    <div className="festival-container">
      <FestivalImage src={image} alt={title} />
      <div className="festival-information-container">
        <FestivalInfo title={title} url={url} />
        <FestivalDetails date={date} place={place} />
        <FeaturedBands bands={bands} />
        <div className="festival-buttons">
        {isLoggedIn ? (
          <Link to={`/updateFestival/${id}`}> <ModifyButton /> </Link>
        ): null}   
        {isLoggedIn ? (
          <DeleteButton />
          ) : null
        }
        </div>
      </div>
    </div>
  );
}
