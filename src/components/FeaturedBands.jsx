import React from 'react';

export default function FeaturedBands({ bands = [] }) {
  if (!bands || bands.length === 0) return <div className="features-bands">No bands listed</div>;

  return (
    <div className="features-bands">
      {bands.map((b, idx) => (
        <div key={b.id ?? idx} className="band-item">
          {b.name ?? b}
        </div>
      ))}
    </div>
  );
}
