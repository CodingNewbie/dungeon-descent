import React from 'react';
import PropTypes from 'prop-types';
import itemsConfig from '../config/Items';  
import '../styles/Inventory.css';

const Inventory = ({ items, onClose }) => {
  return (
    <div className="Inventory">
      <div className="Inventory-overlay" onClick={onClose}></div>
      <div className="Inventory-content-wrapper">
        <div className="Inventory-content">
          <div className="Inventory-header">
            <h2>Inventory</h2>
            <span className="Inventory-close" onClick={onClose}>&times;</span>
          </div>
          <ul>
            {items.map((itemName, index) => (
              <li key={index}>{itemName}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Inventory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Inventory;
