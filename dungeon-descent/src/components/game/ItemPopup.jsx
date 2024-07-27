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

const ItemPopup = ({ item, onClose, onEquipItem, onUnequipItem, onSellItem, equipment }) => {
  if (!item) {
    return null;
  }

  const stats = item.stats ? Object.entries(item.stats.getStats ? item.stats.getStats() : item.stats) : [];
  const isEquipped = equipment.includes(item);

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
          {isEquipped ? (
            <button onClick={() => onUnequipItem(item)}>Unequip</button>
          ) : (
            <button onClick={() => onEquipItem(item)}>Equip</button>
          )}
          <button onClick={() => onSellItem(item)}>
            <i className="fa-solid fa-coins" style={{ color: '#FFD43B' }}></i>
            {item.price}
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
  onEquipItem: PropTypes.func.isRequired,
  onUnequipItem: PropTypes.func.isRequired,
  onSellItem: PropTypes.func.isRequired,
  equipment: PropTypes.array.isRequired
};

export default ItemPopup;
