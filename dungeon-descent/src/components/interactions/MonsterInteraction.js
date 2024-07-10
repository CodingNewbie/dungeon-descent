import React from 'react';

const MonsterInteraction = ({ monsterEncounter, handleEngage, handleFlee }) => (
  <div className="interaction">
    <p>{monsterEncounter}</p>
    <button onClick={handleEngage}>Engage</button>
    <button onClick={handleFlee}>Flee</button>
  </div>
);

export default MonsterInteraction;