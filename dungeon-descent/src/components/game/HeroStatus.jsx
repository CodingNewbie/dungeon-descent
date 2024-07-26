import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Inventory from './Inventory';
import '../../styles/game/HeroStatus.css';

const HeroStatus = ({ name, level, currentXP, requiredXP, gold, inventory, onItemClick }) => {
  const [showInventory, setShowInventory] = useState(false);
  const xpPercentage = (currentXP / requiredXP) * 100;

  const handleInventoryClick = () => {
    setShowInventory(true);
  };

  const handleCloseInventory = () => {
    setShowInventory(false);
  };

  return (
    <div className="HeroStatus">
      <p><i className="fa-solid fa-user" style={{ color: '#ffffff' }}></i> {name} Lv. {level}</p>
      <div>
        <p>Exp</p>
        <p>{currentXP}/{requiredXP} ({xpPercentage.toFixed(2)}%)</p>
      </div>
      <p><i className="fa-solid fa-coins" style={{ color: '#FFD43B' }}></i> {gold}</p>
      <button onClick={handleInventoryClick}>Inventory</button>
      {showInventory && (
        <Inventory
          items={inventory}
          onClose={handleCloseInventory}
          onItemClick={onItemClick} // Pass the onItemClick prop to Inventory
        />
      )}
    </div>
  );
};

HeroStatus.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  currentXP: PropTypes.number.isRequired,
  requiredXP: PropTypes.number.isRequired,
  gold: PropTypes.number.isRequired,
  inventory: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired, // Define the onItemClick prop
};

export default HeroStatus;
