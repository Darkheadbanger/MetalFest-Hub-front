import React from "react";
import FestivalImage from "./FestivalImage.component.jsx";
import FestivalInfo from "./FestivalInfo.component.jsx";
import FestivalDetails from "./FestivalDetails.component.jsx";
import FeaturedBands from "./FeaturedBands.component.jsx";
import ModifyButton from "./ModifyButton.component.jsx";
import DeleteButton from "./DeleteButton.component.jsx"
import DescriptionFestival from "./descriptionFestival.component.jsx"
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

import "../styles/CardFestival.css"
 function FestivalCardId({ festival }) {
  const { isLoggedIn } = useContext(AuthContext);
  console.log()
  return (
    <>
      <div className="festival-container">
        <FestivalImage festival={festival} />
        <div className="festival-information-container">
          <FestivalInfo title={festival.festivalName}/>
          <FestivalDetails date={festival.festivalDate} place={festival.festivalLocation} />
          <FeaturedBands bands={festival.featureBands} />
          <DescriptionFestival description={festival.description} />
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
    </>
  );
}
export default FestivalCardId;