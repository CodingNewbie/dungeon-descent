import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/game/Inventory.css';

const rarityColors = {
  Common: '#FFFFFF',
  Uncommon: '#00FF00',
  Rare: '#0000FF',
  Epic: '#800080',
  Legendary: '#FFA500'
};

const Inventory = ({ items, onClose, onItemClick }) => {
  console.log('Inventory rendered with onItemClick:', onItemClick);

  return (
    <div className="Inventory">
      <div className="Inventory-overlay" onClick={onClose}></div>
      <div className="Inventory-content">
        <div className="Inventory-header">
          <h2>Inventory</h2>
          <span className="Inventory-close" onClick={onClose}>&times;</span>
        </div>
        <ul>
          {items.map((item, index) => {
            console.log('Rendering item:', item);
            return (
              <li
                key={index}
                style={{ color: rarityColors[item.rarity] }}
                onClick={() => {
                  console.log('Item clicked in Inventory:', item);
                  onItemClick(item);
                }}
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
  onItemClick: PropTypes.func.isRequired
};

export default Inventory;
