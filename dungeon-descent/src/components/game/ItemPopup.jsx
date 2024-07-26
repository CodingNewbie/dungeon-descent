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

const formatStat = (stat) => {
  const formattedStat = stat.toUpperCase();
  return `${formattedStat}+`;
};

const ItemPopup = ({ item, onClose, onEquip, onSell }) => {
  if (!item) {
    return null;
  }

  const stats = item.stats ? Object.entries(item.stats.getStats ? item.stats.getStats() : item.stats) : [];

  return (
    <div className="ItemPopup">
      <div className="ItemPopup-overlay" onClick={onClose}></div>
      <div className="ItemPopup-content">
        <div className="ItemPopup-header">
          <h2 style={{ color: rarityColors[item.rarity] }}>
            <i className={`ra ${item.icon}`} style={{ color: rarityColors[item.rarity], marginRight: '10px' }}></i>
            {item.name}
          </h2>
        </div>
        <div className="ItemPopup-body">
          <ul>
            {stats.length > 0 ? (
              stats.map(([stat, value], index) => (
                <li key={index}>{formatStat(stat)}{value}</li>
              ))
            ) : (
              <li>No stats available</li>
            )}
          </ul>
        </div>
        <div className="ItemPopup-footer">
          <button onClick={onEquip}>Equip</button>
          <button onClick={onSell}>
            <i className="fa-solid fa-coins" style={{ color: '#FFD43B' }}></i> {item.price}
          </button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

ItemPopup.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    stats: PropTypes.object,
    icon: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onEquip: PropTypes.func.isRequired,
  onSell: PropTypes.func.isRequired,
};

export default ItemPopup;
