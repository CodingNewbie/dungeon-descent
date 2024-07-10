import React from 'react';

const DoorInteraction = ({ doorInteraction, handleDoorOpen, handleDoorIgnore, isBossRoom }) => (
  <div className="interaction">
    <p style={isBossRoom ? { color: 'red' } : {}}>{doorInteraction}</p>
    <button onClick={handleDoorOpen}>Enter</button>
    <button onClick={handleDoorIgnore}>Ignore</button>
  </div>
);

export default DoorInteraction;