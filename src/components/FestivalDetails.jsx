import React from 'react';

export default function FestivalDetails({ date = '', place = '', price = "" }) {
  return (
    <div className="festival-details">
      <p className="date">{date}</p>
      <p className="place">{place}</p>
      <p className="price">{price} euros</p>
    </div>
  );
}
