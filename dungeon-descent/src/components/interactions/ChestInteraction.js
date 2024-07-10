import React from 'react';

const ChestInteraction = ({ chestInteraction, handleChestOpen, handleChestIgnore }) => (
  <div className="interaction">
    <p>{chestInteraction}</p>
    <button onClick={handleChestOpen}>Open the chest</button>
    <button onClick={handleChestIgnore}>Ignore</button>
  </div>
);

export default ChestInteraction;