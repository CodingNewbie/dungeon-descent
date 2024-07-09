import React from 'react';
import '../styles/EncounterPopup.css';

function EncounterPopup({ onClose }) {
  return (
    <div className="EncounterPopup">
      <div className="popup-content">
        <h2>Engage with the Enemy</h2>
        <p>Details of the encounter...</p>
        <button onClick={onClose}>Close</button>
      </div>
      <div className="popup-overlay" onClick={onClose}></div>
    </div>
  );
}

export default EncounterPopup;
