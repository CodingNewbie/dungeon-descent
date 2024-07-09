import React from 'react';
import '../styles/HealthBar.css';

function HealthBar({ current, total }) {
  const healthPercentage = (current / total) * 100;
  const widthStyle = current > 0 ? `${healthPercentage}%` : '0%';
  const paddingStyle = current > 0 ? '5px' : '0';

  return (
    <div className="HealthBar">
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
