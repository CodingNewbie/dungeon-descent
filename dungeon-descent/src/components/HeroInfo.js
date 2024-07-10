import React from 'react';

function HeroInfo({ name, level }) {
  return (
    <div className="HeroInfo">
      <h2>{name} Lv. {level}</h2>
    </div>
  );
}

export default HeroInfo;
