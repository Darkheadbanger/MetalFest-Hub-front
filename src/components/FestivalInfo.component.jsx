import React from 'react';

export default function FestivalInfo({ title = '', url = '' }) {
  return (
    <div className="festival-information">
      <div className="festival-title">{title}</div>
      <div className="festival-visit">{url}</div>
    </div>
  );
}
