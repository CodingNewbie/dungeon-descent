import React, { useState, useEffect, useRef } from 'react';
import { createCharacter } from './Character';
import { Floor } from './Floor'; 
import { Stats, StatsDisplay, BonusStatsDisplay } from './Stats';
import EncounterPopup from './EncounterPopup';
import '../styles/App.css';
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
  const [heroHealth, setHeroHealth] = useState(1000);
  const [monsterHealth, setMonsterHealth] = useState(1000);

  const eventsEndRef = useRef(null);
  const combatLogsEndRef = useRef(null);
  const MAX_EVENTS = 50;

  const handleCreateCharacter = () => {
    const newCharacter = createCharacter('Bob');
    setCharacter(newCharacter);
  };

  const handleChestOpen = () => {
    const roll = Math.random();
    const result = roll < 0.5 ? (
      'The chest is empty.'
    ) : (
      <>
        You found <i className="fa-solid fa-coins" style={{ color: '#FFD43B' }}></i> 100 gold.
      </>
    );
    setEvents((prevEvents) => [...prevEvents, result]);
    setLockedChest(false);
    setChestInteraction(null);
  };

  const handleChestIgnore = () => {
    setEvents((prevEvents) => [...prevEvents, 'You ignored the chest.']);
    setLockedChest(false);
    setChestInteraction(null);
  };

  const handleDoorOpen = () => {
    if (isBossRoom) {
      floor.changeFloors();
      setCurrentFloor(floor.depth);
      setCurrentRoom(1);
      setIsBossRoom(false);
      setEvents((prevEvents) => [
        ...prevEvents,
        'You entered the boss room and moved to the next floor.'
      ]);
    } else {
      floor.changeRooms();
      console.log(`Current room after changeRooms: ${floor.roomCount}`);
      setCurrentRoom(floor.roomCount);
      setEvents((prevEvents) => [
        ...prevEvents,
        'You opened the door and entered a new room.'
      ]);
    }
    setFoundDoor(false);
    setDoorInteraction(null);
  };

  const handleDoorIgnore = () => {
    setEvents((prevEvents) => [
      ...prevEvents,
      'You ignored it and decided to move on.'
    ]);
    floor.encounterCount = 0;
    setFoundDoor(false);
    setDoorInteraction(null);
  };

  const handleEngage = () => {
    setCombatLogs([]); // Clear previous combat logs
    setPopupVisible(true);
    handleCombatPhase();
  };

  const handleFlee = () => {
    setEvents((prevEvents) => [...prevEvents, 'You fled from the skeleton.']);
    setMonsterEncounter(null);
  };

  const handleCombatPhase = () => {
    setCombatLogs(['Combat begins!']);
    let heroTurn = true;
    let continueCombat = true;

    const combatStep = () => {
      if (!continueCombat) return; // Stop combat if flag is false

      if (heroTurn) {
        setMonsterHealth((prevHealth) => {
          const newHealth = prevHealth - 200;
          setCombatLogs((prevLogs) => [...prevLogs, `You dealt 200 damage to the Skeleton.`]);
          if (newHealth <= 0) {
            setCombatLogs((prevLogs) => [...prevLogs, `Skeleton dropped <i class="fa-solid fa-coins" style="color: #FFD43B;"></i> 100 gold.`]);
            continueCombat = false;
            return 0;
          }
          return newHealth;
        });
      } else {
        setHeroHealth((prevHealth) => {
          const newHealth = prevHealth - 100;
          setCombatLogs((prevLogs) => [...prevLogs, `Skeleton dealt 100 damage to you.`]);
          if (newHealth <= 0) {
            setCombatLogs((prevLogs) => [...prevLogs, 'You have died.']);
            continueCombat = false;
            return 0;
          }
          return newHealth;
        });
      }
      heroTurn = !heroTurn;

      if (heroHealth > 0 && monsterHealth > 0 && continueCombat) {
        setTimeout(combatStep, 1000);
      }
    };

    combatStep();
  };

  const handleClaimReward = () => {
    setEvents((prevEvents) => [...prevEvents, 'You claimed the reward.']);
    setPopupVisible(false);
    setMonsterEncounter(null);
    setHeroHealth(1000); 
    setMonsterHealth(1000);
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
        } else if (encounterMessage === 'You encountered a Skeleton') {
          setMonsterEncounter(encounterMessage);
        } else {
          if (encounterMessage === 'You moved to the next floor.') {
            setCurrentFloor(floor.depth);
            setCurrentRoom(floor.roomCount);
          }
          setEvents((prevEvents) => {
            const updatedEvents = [...prevEvents, encounterMessage];
            if (updatedEvents.length > MAX_EVENTS) {
              updatedEvents.shift();
            }
            return updatedEvents;
          });
        }
      }, 500);

      return () => clearInterval(interval);
    }
  }, [floor, lockedChest, foundDoor, monsterEncounter]);

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

  return (
    <div className="Game">
      <header className="App-header">
        <h1>Dungeon Descent</h1>
      </header>
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
          <div className="interaction">
            <p>{chestInteraction}</p>
            <button onClick={handleChestOpen}>Open the chest</button>
            <button onClick={handleChestIgnore}>Ignore</button>
          </div>
        )}
        {doorInteraction && (
          <div className="interaction">
            <p style={isBossRoom ? { color: 'red' } : {}}>{doorInteraction}</p>
            <button onClick={handleDoorOpen}>Enter</button>
            <button onClick={handleDoorIgnore}>Ignore</button>
          </div>
        )}
        {monsterEncounter && (
          <div className="interaction">
            <p>{monsterEncounter}</p>
            <button onClick={handleEngage}>Engage</button>
            <button onClick={handleFlee}>Flee</button>
          </div>
        )}
        <div ref={eventsEndRef} />
      </div>
      {popupVisible && (
        <EncounterPopup
          monster={{
            name: 'Skeleton',
            level: 10,
            currentHealth: monsterHealth,
            totalHealth: 1000,
            image: './images/monsters/skeleton-idle.gif',
          }}
          hero={{
            name: 'Khor',
            level: 10,
            currentHealth: heroHealth,
            totalHealth: 1000,
          }}
          combatLogs={combatLogs}
          onClaimReward={handleClaimReward}
        />
      )}
    </div>
  );
}

export default Game;
