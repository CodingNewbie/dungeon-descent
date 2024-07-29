import React, { useEffect, useRef } from 'react';
import '../../styles/game/CombatEventContainer.css';

function CombatEventContainer({ combatLogs, onClaimReward, monsterDefeated, lootFound }) {
  const combatLogsEndRef = useRef(null);

  useEffect(() => {
    if (combatLogsEndRef.current) {
      combatLogsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [combatLogs]);

  useEffect(() => {
    console.log("monsterDefeated:", monsterDefeated);
    console.log("lootFound:", lootFound);
  }, [monsterDefeated, lootFound]);

  return (
    <div className="CombatEventContainer">
      <div className="CombatLogs">
        {combatLogs.map((log, index) => (
          <div key={index} className="CombatEvent" dangerouslySetInnerHTML={{ __html: log }} />
        ))}
        <div ref={combatLogsEndRef} />
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
