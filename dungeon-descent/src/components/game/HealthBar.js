import React, { useState, useEffect } from 'react';
import '../../styles/game/HealthBar.css';



function HealthBar({ current, total }) {
  const [isShaking, setIsShaking] = useState(false);

  const healthPercentage = (current / total) * 100;
  const widthStyle = current > 0 ? `${healthPercentage}%` : '0%';
  const paddingStyle = current > 0 ? '5px' : '0';

  useEffect(() => {
    if (current < total) {
      setIsShaking(true);
      const timer = setTimeout(() => {
        setIsShaking(false);
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [current, total]);

  return (
    <div className={`HealthBar ${isShaking ? 'shake' : ''}`}>
      <div
        className="HealthBar-inner"
        style={{ width: widthStyle, paddingLeft: paddingStyle }}
      >
        <span className="HealthBar-text">{current}/{total}</span>
      </div>
    </div>
  );
}

export default HealthBar;
