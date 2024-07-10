import React from 'react';
import PropTypes from 'prop-types';
import '../styles/HeroStatus.css';

const HeroStatus = ({ name, level, currentXP, requiredXP, gold }) => {
  const xpPercentage = (currentXP / requiredXP) * 100;

  return (
    <div className="HeroStatus">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Level:</strong> {level}</p>
      <p><strong>Experience:</strong> {currentXP}/{requiredXP} ({xpPercentage.toFixed(2)}%)</p>
      <p><strong>Gold:</strong> {gold}</p>
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