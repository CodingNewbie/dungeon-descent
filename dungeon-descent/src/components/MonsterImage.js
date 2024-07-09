import React from 'react';
import '../styles/MonsterImage.css';

function MonsterImage({ src, alt }) {
  return (
    <div className="MonsterImage">
      <img src={src} alt={alt} />
    </div>
  );
}

export default MonsterImage;