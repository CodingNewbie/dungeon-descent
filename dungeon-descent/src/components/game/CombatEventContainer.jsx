import React, { useEffect } from 'react';
import '../../styles/game/CombatEventContainer.css';

function CombatEventContainer({ combatLogs, onClaimReward, monsterDefeated, lootFound }) {
  
  useEffect(() => {
    console.log("monsterDefeated:", monsterDefeated);
    console.log("lootFound:", lootFound);
  }, [monsterDefeated, lootFound]);

  return (
    <div className="CombatEventContainer">
      <div className="CombatLogs">
        {combatLogs.map((log, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: log }} />
        ))}
      </div>
      {monsterDefeated && lootFound && (
        <button className="ClaimRewardButton" onClick={onClaimReward}>
          Claim Reward
        </button>
      )}
    </div>
  );
}

export default CombatEventContainer;
