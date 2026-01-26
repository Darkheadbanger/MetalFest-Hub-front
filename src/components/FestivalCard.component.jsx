import React from 'react';
import FestivalImage from './FestivalImage.component.jsx';
import FestivalInfo from './FestivalInfo.component.jsx';
import FestivalDetails from './FestivalDetails.component.jsx';
import FeaturedBands from './FeaturedBands.component.jsx';

export default function FestivalCard({ festival = {} }) {
  const { image, title, url, date, place, bands } = festival;

  return (
    <div className="festival-container">
      <FestivalImage src={image} alt={title} />
      <div className="festival-information-container">
        <FestivalInfo title={title} url={url} />
        <FestivalDetails date={date} place={place} />
        <FeaturedBands bands={bands} />
      </div>
    </div>
  );
}
