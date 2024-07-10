import React from 'react';
import PropTypes from 'prop-types';
import '../styles/HeroStatus.css';

const HeroStatus = ({ name, level, currentXP, requiredXP, gold }) => {
  const xpPercentage = (currentXP / requiredXP) * 100;

  return (
    <div className="HeroStatus">
      <p><i className="fa-solid fa-user" style={{ color: '#ffffff' }}></i> {name} Lv. {level}</p>
      <p></p>
      <div>
        <p>Exp</p>
        <p>{currentXP}/{requiredXP} ({xpPercentage.toFixed(2)}%)</p>
      </div>
      
      <p><i className="fa-solid fa-coins" style={{ color: '#FFD43B' }}></i> {gold}</p>
    </div>
  );
};

HeroStatus.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  currentXP: PropTypes.number.isRequired,
  requiredXP: PropTypes.number.isRequired,
  gold: PropTypes.number.isRequired,
};

export default HeroStatus;
