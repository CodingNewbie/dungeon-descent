import React, { useState, useEffect, useRef, useCallback} from 'react';
import { createCharacter } from './Character';
import { Floor } from './Floor';
import { Stats, StatsDisplay, BonusStatsDisplay } from './Stats';
import EncounterPopup from './EncounterPopup';
import HeroStatus from './HeroStatus';
import ChestInteraction from './interactions/ChestInteraction';
import DoorInteraction from './interactions/DoorInteraction';
import MonsterInteraction from './interactions/MonsterInteraction';
import Inventory from './Inventory';
import { handleEvent } from '../../utils/gameUtils';
import selectMonster from '../../utils/selectMonster';
import selectLoot from '../../utils/selectLoot';
import monsters from '../../config/Monsters';
import { MAX_EVENTS } from '../../constants';
import '../../styles/game/App.css';
import '../../styles/game/EventsContainer.css';
import '../../styles/game/InfoContainer.css';
import '../../styles/game/StatsContainer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import IntroPopup from './IntroPopup';

const rarityColors = {
  Common: '#FFFFFF',
  Uncommon: '#00FF00',
  Rare: '#0000FF',
  Epic: '#800080',
  Legendary: '#FFA500'
};

function Game() {
  const [events, setEvents] = useState([]);
  const [character, setCharacter] = useState(createCharacter('Khor'));
  const [floor, setFloor] = useState(new Floor());
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
  const [heroHealth, setHeroHealth] = useState(character.getHp());
  const [monsterHealth, setMonsterHealth] = useState(0);
  const [monsterStats, setMonsterStats] = useState(new Stats());
  const [monsterStatus, setMonsterStatus] = useState('alive');
  const [monsterType, setMonsterType] = useState('skeleton');
  const [monsterXP, setMonsterXP] = useState(0);
  const [monsterGold, setMonsterGold] = useState(0);
  const [monsterAnimation, setMonsterAnimation] = useState('idle');
  const [isMonsterHit, setIsMonsterHit] = useState(false);
  const [heroXP, setHeroXP] = useState(0);
  const [requiredXP, setRequiredXP] = useState(100);
  const [heroLevel, setHeroLevel] = useState(1);
  const [gold, setGold] = useState(0);
  const [inventory, setInventory] = useState([]);
  const [showInventory, setShowInventory] = useState(false);
  const [droppedLoot, setDroppedLoot] = useState([]);
  const [characterTurn, setCharacterTurn] = useState(0);
  const [showIntroPopup, setShowIntroPopup] = useState(true);

  const backgroundAudioRef = useRef(null);
  const combatAudioRef = useRef(null);
  const bossAudioRef = useRef(null);
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

  useEffect(() => {
    setHeroHealth(character.getHp());
  }, [character]);

  const handleCreateCharacter = () => {
    const newCharacter = createCharacter('Bob');
    setCharacter(newCharacter);
  };

  const handleChestOpen = () => {
    const roll = Math.random();
    if (roll < 0.3) {
      const selectedMonster = monsters.find(monster => monster.type === 'Mimic');
      initializeCombat(selectedMonster);
    } else {
      const result = roll < 0.5 ? 'The chest is empty.' : 'You found 100 gold.';
      if (roll >= 0.5) {
        setGold(prevGold => prevGold + 100);
      }
      handleEvent(setEvents, result, MAX_EVENTS);
      resetChestState();
    }
  };

  const initializeCombat = useCallback((selectedMonster) => {
    console.log('Initializing combat with monster:', selectedMonster);
    setMonsterType(selectedMonster.type);
    setMonsterStats(selectedMonster.stats);
    const monsterHp = selectedMonster.stats.getHp();
    console.log(`Initializing combat with monster: ${selectedMonster.type}, Health: ${monsterHp}`);
    setMonsterHealth(monsterHp);
    setMonsterStatus('alive');
    setMonsterXP(selectedMonster.xp);
    setMonsterGold(selectedMonster.gold);
    setMonsterAnimation('idle');
    setCombatLogs([]);
    setPopupVisible(true);
    handleCombatPhase(selectedMonster.type);
  }, []);
  
  const resetChestState = () => {
    setLockedChest(false);
    setChestInteraction(null);
  };

  const handleChestIgnore = () => {
    handleEvent(setEvents, 'You ignored the chest.', MAX_EVENTS);
    resetChestState();
  };

  const handleDoorOpen = () => {
    if (isBossRoom) {
      handleBossRoom();
    } else {
      floor.changeRooms();
      setCurrentRoom(floor.roomCount);
      handleEvent(setEvents, 'You opened the door and entered a new room.', MAX_EVENTS);
    }
    resetDoorState();
  };

  const handleBossRoom = () => {
    const bossMonster = monsters.find(monster => monster.isBoss);
    if (bossMonster) {
      initializeCombat(bossMonster);
      console.log(`Entering boss room. Boss: ${bossMonster.type}`);
    } else {
      console.error('No boss monster found!');
    }
  };

  const resetDoorState = () => {
    setFoundDoor(false);
    setDoorInteraction(null);
  };

  const handleDoorIgnore = () => {
    handleEvent(setEvents, 'You ignored it and decided to move on.', MAX_EVENTS);
    floor.encounterCount = 0;
    resetDoorState();
  };

  const handleEngage = () => {
    setMonsterHealth(monsterStats.getHp()); 
    setMonsterStatus('alive');
    setMonsterAnimation('idle');
    setCombatLogs([]);
    setPopupVisible(true);
    handleCombatPhase(monsterType);
  };

  const handleFlee = () => {
    handleEvent(setEvents, `You fled from the ${monsterType}.`, MAX_EVENTS);
    setMonsterEncounter(null);
  };

  useEffect(() => {
    if (characterTurn === 1) {
      handleHeroTurn();
    } else if (characterTurn === 2) {
      handleMonsterTurn();
    }
  }, [characterTurn]);

  const handleHeroTurn = () => {
    console.log("Hero move");
    const newHealth = applyHeroDamage();
    handleMonsterHealth(newHealth);

    if (newHealth <= 0) {
      handleMonsterDefeat();
    } else {
      setCharacterTurn(2);
    }
  };

  const applyHeroDamage = () => {
    const newHealth = monsterHealth - 200;
    setIsMonsterHit(true);
    setTimeout(() => setIsMonsterHit(false), 200);
    setCombatLogs((prevLogs) => [...prevLogs, `You dealt 200 damage to the ${monsterType}.`]);
    return newHealth;
  };

  const handleMonsterHealth = (newHealth) => {
    setMonsterHealth(newHealth);
  };

  const updateHeroXP = () => {
    setHeroXP(prevXP => {
      const newXP = prevXP + monsterXP;
      if (newXP >= requiredXP) {
        setHeroLevel(prevLevel => prevLevel + 1);
        setRequiredXP(prev => prev + 100);
        return newXP - requiredXP;
      }
      return newXP;
    });
  };

  const findCurrentMonster = () => {
    const currentMonster = monsters.find(monster => monster.type === monsterType);
    console.log('Current Monster:', currentMonster);
    return currentMonster;
  };
  

  const handleLoot = (currentMonster) => {
    if (currentMonster) {
      const loot = selectLoot(currentMonster.lootTable);
      setDroppedLoot(loot);
      if (loot.length > 0) {
        setCombatLogs((prevLogs) => [
          ...prevLogs,
          `You found: <span style="color: ${rarityColors[loot[0].rarity]}">${loot[0].item}</span>.`
        ]);
      }
    } else {
      console.error('Monster not found:', monsterType);
    }
  };

  const handleBossDefeat = () => {
    console.log("Boss defeated. Progressing to next floor.");
    setIsBossRoom(false);
    floor.changeFloors();
    setCurrentFloor(floor.depth);
    setCurrentRoom(1);
    handleEvent(setEvents, 'You defeated the boss and progressed to the next floor!', MAX_EVENTS);
  };

  const handleMonsterDefeat = () => {
    console.log(`${monsterType} defeated. Gold dropped: ${monsterGold}`);
    setCombatLogs((prevLogs) => [...prevLogs, `${monsterType} dropped ${monsterGold} gold.`]);
    setMonsterStatus('dead');
    setGold(prevGold => prevGold + monsterGold);
    updateHeroXP();
  
    const currentMonster = findCurrentMonster();
    handleLoot(currentMonster);
    setCharacterTurn(0);
  
    if (currentMonster && currentMonster.isBoss) {
      handleBossDefeat();
    }
  };
  
  const handleMonsterTurn = () => {
    console.log("Monster move");
    setMonsterAnimation('attack');
    const newHealth = applyMonsterDamage();
    handleHeroHealth(newHealth);

    if (newHealth <= 0) {
      handleHeroDeath();
    } else {
      setCharacterTurn(1);
    }

    resetMonsterAnimation();
  };

  const applyMonsterDamage = () => {
    const newHealth = heroHealth - 100;
    setCombatLogs((prevLogs) => [...prevLogs, `${monsterType} dealt 100 damage to you.`]);
    return newHealth;
  };

  const handleHeroHealth = (newHealth) => {
    setHeroHealth(newHealth);
  };

  const handleHeroDeath = () => {
    setCombatLogs((prevLogs) => [...prevLogs, 'You have died.']);
    setCharacterTurn(0);
  };

  const resetMonsterAnimation = () => {
    setTimeout(() => setMonsterAnimation('idle'), 500);
  };

  const handleCombatPhase = (monsterType) => {
    setCombatLogs(['Combat begins!']);
    backgroundAudioRef.current.pause();
    if (monsterType === 'gorehoof-the-ravager') {
      bossAudioRef.current.currentTime = 0; // Reset boss audio to the start
      bossAudioRef.current.play().catch((error) => {
        console.log('Error playing boss audio:', error);
      });
    } else {
      combatAudioRef.current.currentTime = 0; // Reset combat audio to the start
      combatAudioRef.current.play().catch((error) => {
        console.log('Error playing combat audio:', error);
      });
    }
    setCharacterTurn(1);
  };

  const handleClaimReward = () => {
    if (droppedLoot.length > 0) {
      setInventory((prevInventory) => [...prevInventory, ...droppedLoot]);
      handleEvent(setEvents, (
        <>
          You claimed: <span style={{ color: rarityColors[droppedLoot[0].rarity] }}>{droppedLoot[0].item}</span>.
        </>
      ), MAX_EVENTS);
    } else {
      handleEvent(setEvents, 'You claimed the reward. There was no loot.', MAX_EVENTS);
    }

    setDroppedLoot([]);
    setPopupVisible(false);
    setMonsterEncounter(null);
    setHeroHealth(character.getHp());
    setMonsterHealth(monsterStats.getHp());
    setMonsterStatus('alive');
    setMonsterAnimation('idle');
    combatAudioRef.current.pause();
    bossAudioRef.current.pause();
    backgroundAudioRef.current.play().catch((error) => {
      console.log('Error playing background audio:', error);
    });
  };

  useEffect(() => {
    if (!lockedChest && !foundDoor && !monsterEncounter && !popupVisible) {
      const interval = setInterval(() => {
        const encounterMessage = floor.getEncounter();
        console.log("Encounter message:", encounterMessage); 
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
          const monster = selectMonster();
          console.log('Selected Monster:', monster); 
          if (monster && monster.stats) {
            setMonsterType(monster.type);
            setMonsterXP(monster.xp);
            setMonsterGold(monster.gold);
            setMonsterStats(monster.stats); 
            setMonsterHealth(monster.stats.getHp()); // Initialize health from stats
            setMonsterEncounter(`You encountered a ${monster.type.charAt(0).toUpperCase() + monster.type.slice(1)}`);
          } else {
            console.error('Monster or monster stats not found:', monster);
          }
        } else {
          if (encounterMessage === 'You moved to the next floor.') {
            setCurrentFloor(floor.depth);
            setCurrentRoom(floor.roomCount);
          }
          handleEvent(setEvents, encounterMessage, MAX_EVENTS);
        }
      }, 100);
  
      return () => clearInterval(interval);
    }
  }, [floor, lockedChest, foundDoor, monsterEncounter, popupVisible]);
  
      
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
          inventory={inventory}
          setShowInventory={setShowInventory}
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
            {typeof event === 'string' ? event : <>{event}</>}
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
            totalHealth: monsterStats.getHp(),
            type: monsterType,
            status: monsterStatus
          }}
          hero={{
            name: character.name,
            level: heroLevel,
            currentHealth: heroHealth,
            totalHealth: character.getHp(),
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
      {showInventory && (
        <Inventory
          items={inventory}
          onClose={() => setShowInventory(false)}
        />
      )}
      {showIntroPopup && (
        <IntroPopup onConfirm={() => {
          setShowIntroPopup(false);
          backgroundAudioRef.current.currentTime = 0;
          backgroundAudioRef.current.play().catch((error) => {
            console.log('Error playing background audio on load:', error);
          });
        }} />
      )}
      <audio ref={backgroundAudioRef} src="./audio/background.ogg" loop />
      <audio ref={combatAudioRef} src="./audio/battle.ogg" />
      <audio ref={bossAudioRef} src="./audio/boss-battle.ogg" />
    </div>
  );
}

export default Game;
