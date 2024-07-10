import React, { useState, useEffect, useRef } from 'react';
import { createCharacter } from './Character';
import { Floor } from './Floor'; 
import { Stats, StatsDisplay, BonusStatsDisplay } from './Stats';
import EncounterPopup from './EncounterPopup';
import ChestInteraction from './interactions/ChestInteraction';
import DoorInteraction from './interactions/DoorInteraction';
import MonsterInteraction from './interactions/MonsterInteraction';
import HeroStatus from './HeroStatus';
import { handleEvent } from '../utils/gameUtils';
import { MAX_EVENTS, INITIAL_HERO_HEALTH, INITIAL_MONSTER_HEALTH } from '../constants';
import '../styles/App.css';
import '../styles/EventsContainer.css';
import '../styles/InfoContainer.css';
import '../styles/StatsContainer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Game() {
  const [events, setEvents] = useState([]);
  const [character, setCharacter] = useState(createCharacter('Bob'));
  const [floor] = useState(new Floor());
  const [stats] = useState(new Stats());
  const [lockedChest, setLockedChest] = useState(false);
  const [chestInteraction, setChestInteraction] = useState(null);
  const [foundDoor, setFoundDoor] = useState(false);
  const [doorInteraction, setDoorInteraction] = useState(null);
  const [currentFloor, setCurrentFloor] = useState(1);
  const [currentRoom, setCurrentRoom] = useState(1);
  const [isBossRoom, setIsBossRoom] = useState(false);
  const [monsterEncounter, setMonsterEncounter] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [combatLogs, setCombatLogs] = useState([]);
  const [heroHealth, setHeroHealth] = useState(INITIAL_HERO_HEALTH);
  const [monsterHealth, setMonsterHealth] = useState(INITIAL_MONSTER_HEALTH);
  const [monsterStatus, setMonsterStatus] = useState('alive');
  const [monsterType, setMonsterType] = useState('skeleton');
  const [monsterAnimation, setMonsterAnimation] = useState('idle');
  const [isMonsterHit, setIsMonsterHit] = useState(false);
  const [heroXP, setHeroXP] = useState(0);  // Add this state for hero's current XP
  const [requiredXP, setRequiredXP] = useState(100);  // Add this state for required XP to next level
  const [heroLevel, setHeroLevel] = useState(1);  // Add this state for hero's level
  const [gold, setGold] = useState(0);  // Add this state for hero's current gold

  const eventsEndRef = useRef(null);
  const combatLogsEndRef = useRef(null);

  useEffect(() => {
    if (eventsEndRef.current) {
      eventsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [events, chestInteraction, doorInteraction, monsterEncounter]);

  useEffect(() => {
    if (combatLogsEndRef.current) {
      combatLogsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [combatLogs, popupVisible]);

  const handleCreateCharacter = () => {
    const newCharacter = createCharacter('Bob');
    setCharacter(newCharacter);
  };

  const handleChestOpen = () => {
    const roll = Math.random();
    if (roll < 0.3) {
      setMonsterType('mimic');
      setMonsterHealth(INITIAL_MONSTER_HEALTH);
      setMonsterStatus('alive');
      setMonsterAnimation('idle');
      setCombatLogs([]);
      setPopupVisible(true);
      handleCombatPhase();
    } else {
      const result = roll < 0.5 ? 'The chest is empty.' : 'You found 100 gold.';
      if (roll >= 0.5) {
        setGold(prevGold => prevGold + 100);  // Add gold when a chest is found
      }
      handleEvent(setEvents, result, MAX_EVENTS);
      setLockedChest(false);
      setChestInteraction(null);
    }
  };

  const handleChestIgnore = () => {
    handleEvent(setEvents, 'You ignored the chest.', MAX_EVENTS);
    setLockedChest(false);
    setChestInteraction(null);
  };

  const handleDoorOpen = () => {
    if (isBossRoom) {
      floor.changeFloors();
      setCurrentFloor(floor.depth);
      setCurrentRoom(1);
      setIsBossRoom(false);
      handleEvent(setEvents, 'You entered the boss room and moved to the next floor.', MAX_EVENTS);
    } else {
      floor.changeRooms();
      setCurrentRoom(floor.roomCount);
      handleEvent(setEvents, 'You opened the door and entered a new room.', MAX_EVENTS);
    }
    setFoundDoor(false);
    setDoorInteraction(null);
  };

  const handleDoorIgnore = () => {
    handleEvent(setEvents, 'You ignored it and decided to move on.', MAX_EVENTS);
    floor.encounterCount = 0;
    setFoundDoor(false);
    setDoorInteraction(null);
  };

  const handleEngage = () => {
    setMonsterHealth(INITIAL_MONSTER_HEALTH);
    setMonsterStatus('alive');
    setMonsterAnimation('idle');
    setCombatLogs([]);
    setPopupVisible(true);
    handleCombatPhase();
  };

  const handleFlee = () => {
    handleEvent(setEvents, `You fled from the ${monsterType}.`, MAX_EVENTS);
    setMonsterEncounter(null);
  };

  const handleCombatPhase = () => {
    setCombatLogs(['Combat begins!']);
    let heroTurn = true;
    let continueCombat = true;

    const combatStep = () => {
      if (!continueCombat) return;

      if (heroTurn) {
        setMonsterHealth((prevHealth) => {
          const newHealth = prevHealth - 200;
          setIsMonsterHit(true);
          setTimeout(() => setIsMonsterHit(false), 200);
          setCombatLogs((prevLogs) => [...prevLogs, `You dealt 200 damage to the ${monsterType}.`]);
          if (newHealth <= 0) {
            setCombatLogs((prevLogs) => [...prevLogs, `${monsterType} dropped 100 gold.`]);
            setMonsterStatus('dead');
            setGold(prevGold => prevGold + 100);  // Add gold when a monster is defeated
            setHeroXP(prevXP => prevXP + 50);  // Add XP when a monster is defeated
            if (heroXP + 50 >= requiredXP) {  // Check if XP exceeds required XP
              setHeroLevel(prevLevel => prevLevel + 1);  // Level up the hero
              setHeroXP(0);  // Reset XP
              setRequiredXP(prevXP => prevXP + 100);  // Increase required XP for next level
            }
            continueCombat = false;
            return 0;
          }
          return newHealth;
        });
      } else {
        setHeroHealth((prevHealth) => {
          setMonsterAnimation('attack');
          const newHealth = prevHealth - 100;
          setCombatLogs((prevLogs) => [...prevLogs, `${monsterType} dealt 100 damage to you.`]);
          if (newHealth <= 0) {
            setCombatLogs((prevLogs) => [...prevLogs, 'You have died.']);
            continueCombat = false;
            return 0;
          }
          setTimeout(() => setMonsterAnimation('idle'), 500);
          return newHealth;
        });
      }
      heroTurn = !heroTurn;

      if (heroHealth > 0 && monsterHealth > 0 && continueCombat) {
        setTimeout(combatStep, 1000);
      }
    };

    setTimeout(combatStep, 1000);
  };

  const handleClaimReward = () => {
    handleEvent(setEvents, 'You claimed the reward.', MAX_EVENTS);
    setPopupVisible(false);
    setMonsterEncounter(null);
    setHeroHealth(INITIAL_HERO_HEALTH);
    setMonsterHealth(INITIAL_MONSTER_HEALTH);
    setMonsterStatus('alive');
    setMonsterAnimation('idle');
  };

  useEffect(() => {
    if (!lockedChest && !foundDoor && !monsterEncounter) {
      const interval = setInterval(() => {
        const encounterMessage = floor.getEncounter();
        if (encounterMessage === 'You found a locked chest.') {
          setLockedChest(true);
          setChestInteraction(encounterMessage);
        } else if (encounterMessage === 'You found a door.') {
          setFoundDoor(true);
          setDoorInteraction(encounterMessage);
        } else if (encounterMessage === 'You found the door to the boss room.') {
          setFoundDoor(true);
          setDoorInteraction(encounterMessage);
          setIsBossRoom(true);
        } else if (encounterMessage.startsWith('You encountered a')) {
          const monster = encounterMessage.split(' ').pop().toLowerCase();
          setMonsterType(monster);
          setMonsterEncounter(encounterMessage);
        } else {
          if (encounterMessage === 'You moved to the next floor.') {
            setCurrentFloor(floor.depth);
            setCurrentRoom(floor.roomCount);
          }
          handleEvent(setEvents, encounterMessage, MAX_EVENTS);
        }
      }, 500);

      return () => clearInterval(interval);
    }
  }, [floor, lockedChest, foundDoor, monsterEncounter]);

  return (
    <div className="Game">
      <header className="App-header">
        <h1>Dungeon Descent</h1>
      </header>
      <div className="Hero-status-container">
        <HeroStatus
          name={character.name}
          level={heroLevel}
          currentXP={heroXP}
          requiredXP={requiredXP}
          gold={gold}
        />
      </div>
      <div className="Stats-container-wrapper">
        <StatsDisplay stats={stats} />
        <BonusStatsDisplay stats={stats} />
      </div>
      <div className="Info-container">
        <p>Floor: {currentFloor}</p>
        <p>Room: {currentRoom}</p>
      </div>
      <div className="Events-container">
        {events.map((event, index) => (
          <div key={index} className="Event">
            {event}
          </div>
        ))}
        {chestInteraction && (
          <ChestInteraction 
            chestInteraction={chestInteraction} 
            handleChestOpen={handleChestOpen} 
            handleChestIgnore={handleChestIgnore} 
          />
        )}
        {doorInteraction && (
          <DoorInteraction 
            doorInteraction={doorInteraction} 
            handleDoorOpen={handleDoorOpen} 
            handleDoorIgnore={handleDoorIgnore} 
            isBossRoom={isBossRoom} 
          />
        )}
        {monsterEncounter && (
          <MonsterInteraction 
            monsterEncounter={monsterEncounter} 
            handleEngage={handleEngage} 
            handleFlee={handleFlee} 
          />
        )}
        <div ref={eventsEndRef} />
      </div>
      {popupVisible && (
        <EncounterPopup
          monster={{
            name: monsterType.charAt(0).toUpperCase() + monsterType.slice(1),
            level: 10,
            currentHealth: monsterHealth,
            totalHealth: INITIAL_MONSTER_HEALTH,
            type: monsterType,
            status: monsterStatus
          }}
          hero={{
            name: 'Khor',
            level: 10,
            currentHealth: heroHealth,
            totalHealth: INITIAL_HERO_HEALTH,
          }}
          combatLogs={combatLogs}
          onClaimReward={handleClaimReward}
          monsterHealth={monsterHealth}
          monsterStatus={monsterStatus}
          monsterType={monsterType}
          monsterAnimation={monsterAnimation}
          isMonsterHit={isMonsterHit}
        />
      )}
    </div>
  );
}

export default Game;
