import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/game/ItemPopup.css';

const rarityColors = {
  Common: '#FFFFFF',
  Uncommon: '#00FF00',
  Rare: '#0000FF',
  Epic: '#800080',
  Legendary: '#FFA500'
};

const ItemPopup = ({ item, onClose }) => {
  if (!item) {
    return null; 
  }

  return (
    <div className="ItemPopup">
      <div className="ItemPopup-overlay" onClick={onClose}></div>
      <div className="ItemPopup-content">
        <div className="ItemPopup-header">
          <h2 style={{ color: rarityColors[item.rarity] }}>{item.name}</h2>
          <span className="ItemPopup-close" onClick={onClose}>&times;</span>
        </div>
        <div className="ItemPopup-body">
          <p>Rarity: <span style={{ color: rarityColors[item.rarity] }}>{item.rarity}</span></p>
          <p>Stats:</p>
          <ul>
            {item.stats && Object.entries(item.stats).map(([stat, value], index) => (
              <li key={index}>{stat}: {value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

ItemPopup.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    stats: PropTypes.object 
  }),
  onClose: PropTypes.func.isRequired
};

export default ItemPopup;
