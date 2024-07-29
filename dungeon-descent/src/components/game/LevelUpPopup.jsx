import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/game/LevelUpPopup.css';

const LevelUpPopup = ({ levelUpOptions, handleStatIncrease, handleReroll, rerollCount }) => {
  return (
    <>
      <div className="Overlay"></div>
      <div className="LevelUpPopup">
        <h2>Level Up!</h2>
        <button 
          className="reroll-button" 
          onClick={handleReroll} 
          disabled={rerollCount <= 0}
        >
          Reroll {rerollCount}/2
        </button>
        <div className="LevelUpOptions">
          {levelUpOptions.map((option, index) => (
            <button key={index} onClick={() => handleStatIncrease(option)}>
              <strong>{option.label}</strong>
              <br />
              {option.description}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

LevelUpPopup.propTypes = {
  levelUpOptions: PropTypes.array.isRequired,
  handleStatIncrease: PropTypes.func.isRequired,
  handleReroll: PropTypes.func.isRequired,
  rerollCount: PropTypes.number.isRequired,
};

export default LevelUpPopup;
