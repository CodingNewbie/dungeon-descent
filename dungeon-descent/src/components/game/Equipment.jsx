import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../styles/game/Equipment.css';

const rarityColors = {
  Common: '#FFFFFF',
  Uncommon: '#00FF00',
  Rare: '#0000FF',
  Epic: '#800080',
  Legendary: '#FFA500'
};

const Equipment = ({ equipment = [], onItemClick }) => {
  useEffect(() => {
    console.log('Equipment component received props:', equipment);
  }, [equipment]);

  const equippedItems = equipment.filter(item => item !== null);
  const emptySlots = new Array(6 - equippedItems.length).fill(null);
  const fullEquipment = [...equippedItems, ...emptySlots];

  return (
    <div className="Equipment">
      <h2>Equipment</h2>
      <div className="Equipment-grid">
        {fullEquipment.map((item, index) => {
          console.log(`Rendering slot ${index + 1}:`, item);
          return (
            <button
              key={index}
              className="Equipment-slot"
              style={{
                borderColor: item ? rarityColors[item.rarity] : 'white',
                color: item ? rarityColors[item.rarity] : 'gray'
              }}
              onClick={() => item && onItemClick(item)}
            >
              {item ? (
                <i className={`ra ${item.icon}`} style={{ color: rarityColors[item.rarity] }}></i>
              ) : (
                <i className="ra ra-question"></i>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

Equipment.propTypes = {
  equipment: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rarity: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default Equipment;
