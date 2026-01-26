import React from 'react';
import festivalImage from '../assets/images/hellfest.jpg';

// export default function FestivalImage({ src = festivalImage, alt = 'Festival image', className = 'festival-image' }) {
export default function FestivalImage() {
  return (
    <div className="festival-image">
      <img src={festivalImage} alt="jj" />
    </div>
  );
}
