import React from 'react';
import MonsterInfo from './MonsterInfo';
import HealthBar from './HealthBar';
import MonsterImage from './MonsterImage';
import HeroInfo from './HeroInfo';
import CombatEventContainer from './CombatEventContainer';
import '../styles/EncounterPopup.css';

function EncounterPopup({ monster, hero, combatLogs, onClaimReward, monsterHealth, monsterStatus, monsterType, monsterAnimation, isMonsterHit }) {
  return (
    <div>
      <div className="popup-overlay" onClick={onClaimReward}></div>
      <div className="EncounterPopup">
        <div className="popup-content">
          <MonsterInfo name={monster.name} level={monster.level} />
          <HealthBar current={monster.currentHealth} total={monster.totalHealth} />
          <MonsterImage type={monster.type} status={monster.status} animation={monsterAnimation} isHit={isMonsterHit} />
          <HeroInfo name={hero.name} level={hero.level} />
          <HealthBar current={hero.currentHealth} total={hero.totalHealth} />
          <CombatEventContainer
            combatLogs={combatLogs}
            onClaimReward={onClaimReward}
            monsterDefeated={monster.currentHealth === 0}
          />
        </div>
      </div>
    </div>
  );
}

export default EncounterPopup;
