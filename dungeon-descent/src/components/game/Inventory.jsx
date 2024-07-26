import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../styles/game/Inventory.css';

const rarityColors = {
  Common: '#FFFFFF',
  Uncommon: '#00FF00',
  Rare: '#0000FF',
  Epic: '#800080',
  Legendary: '#FFA500'
};

const Inventory = ({ items, onClose, onItemClick, onSellItems }) => {
  const [selectedRarity, setSelectedRarity] = useState('Common');

  const handleRarityChange = (event) => {
    setSelectedRarity(event.target.value);
  };

  const handleSell = () => {
    onSellItems(selectedRarity);
  };

  useEffect(() => {
    const dropdown = document.querySelector('.Inventory-rarity-dropdown');
    dropdown.style.color = rarityColors[selectedRarity];
  }, [selectedRarity]);

  return (
    <div className="Inventory">
      <div className="Inventory-overlay" onClick={onClose}></div>
      <div className="Inventory-content">
        <div className="Inventory-header">
          <h2>Inventory</h2>
          <span className="Inventory-close" onClick={onClose}>&times;</span>
        </div>
        <div className="Inventory-actions">
          <button className="Inventory-sell-button" onClick={handleSell}>Sell</button>
          <select
            className="Inventory-rarity-dropdown"
            value={selectedRarity}
            onChange={handleRarityChange}
          >
            {Object.keys(rarityColors).map((rarity) => (
              <option
                key={rarity}
                value={rarity}
                className={rarity}
              >
                {rarity}
              </option>
            ))}
          </select>
        </div>
        <ul>
          {items.map((item, index) => {
            return (
              <li
                key={index}
                style={{ color: rarityColors[item.rarity] }}
                onClick={() => onItemClick(item)}
              >
                <i className={`ra ${item.icon}`} style={{ color: rarityColors[item.rarity], marginRight: '10px' }}></i>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

Inventory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired 
  })).isRequired,
  onClose: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
  onSellItems: PropTypes.func.isRequired
};

export default Inventory;
