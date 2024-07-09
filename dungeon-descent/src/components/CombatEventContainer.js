import React, { useRef, useEffect } from 'react';
import '../styles/CombatEventContainer.css';

function CombatEventContainer({ combatLogs, onClaimReward, monsterDefeated }) {
  const combatLogsEndRef = useRef(null);

  useEffect(() => {
    if (combatLogsEndRef.current) {
      combatLogsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [combatLogs]);

  return (
    <div className="CombatEventContainer">
      {combatLogs.map((log, index) => (
        <div key={index} className="CombatEvent" dangerouslySetInnerHTML={{ __html: log }}></div>
      ))}
      {monsterDefeated && (
        <div className="CombatEvent claim-reward">
          <button onClick={onClaimReward}>Claim</button>
        </div>
      )}
      <div ref={combatLogsEndRef} />
    </div>
  );
}

export default CombatEventContainer;
