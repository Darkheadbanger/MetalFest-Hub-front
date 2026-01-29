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

import "../styles/CardFestival.css"
 function FestivalCardId({ festival }) {
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
          </div>
        </div>
      </div>
    </>
  );
}
export default FestivalCardId;