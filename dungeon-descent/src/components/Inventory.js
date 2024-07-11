import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Inventory.css';

const rarityColors = {
  Common: '#FFFFFF',
  Uncommon: '#00FF00',
  Rare: '#0000FF',
  Epic: '#800080',
  Legendary: '#FFA500'
};

const Inventory = ({ items, onClose }) => (
  <div className="Inventory">
    <div className="Inventory-overlay" onClick={onClose}></div>
    <div className="Inventory-content">
      <div className="Inventory-header">
        <h2>Inventory</h2>
        <span className="Inventory-close" onClick={onClose}>&times;</span>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ color: rarityColors[item.rarity] }}>
            {item.item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

Inventory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    item: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired
  })).isRequired,
  onClose: PropTypes.func.isRequired
};

export default Inventory;
