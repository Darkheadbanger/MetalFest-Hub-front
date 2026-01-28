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
export default function FestivalCard({ festival }) {
  const { isLoggedIn } = useContext(AuthContext);
  console.log("iccci", festival.FestivalImage)
  return (
    <div className="festival-container">
      <FestivalImage festival={festival} />
      <div className="festival-information-container">
        <FestivalInfo title={festival.festivalName}/>
        <FestivalDetails date={festival.festivalDate} place={festival.festivalLocation} />
        <FeaturedBands bands={festival.featureBands} />
        <div className="festival-buttons">
        {isLoggedIn ? (
          <Link to={`/updateFestival/${festival._id}`}> <ModifyButton /> </Link>
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
