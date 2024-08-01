import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createCharacter } from './Character';
import Floor from './Floor';
import { Stats, StatsDisplay, BonusStatsDisplay } from './Stats';
import EncounterPopup from './EncounterPopup';
import HeroStatus from './HeroStatus';
import ChestInteraction from './interactions/ChestInteraction';
import DoorInteraction from './interactions/DoorInteraction';
import MonsterInteraction from './interactions/MonsterInteraction';
import Inventory from './Inventory';
import ItemPopup from './ItemPopup';
import LevelUpPopup from './LevelUpPopup';
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
import debounce from 'lodash.debounce';
import IntroPopup from './IntroPopup';

const rarityColors = {
  Common: '#FFFFFF',
  Uncommon: '#00FF00',
  Rare: '#0000FF',
  Epic: '#800080',
  Legendary: '#FFA500'
};

const STATES_URL = `${process.env.REACT_APP_BACKEND_HOST}/states`;
const token = localStorage.getItem('token');

console.log("API Token:", token);

const saveStates = async (states, token) => {
  try {
    const response = await fetch(STATES_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(states),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    console.log("Saved states successfully.");
  } catch (error) {
    console.error(error.message);
  }
};

function Game() {
  const [hasLoadedFromBackend, setHasLoadedFromBackend] = useState(false);
  const [events, setEvents] = useState([]);
  const [character, setCharacter] = useState(createCharacter('Khor'));
  const [floor, setFloor] = useState(new Floor());
  const [heroStats, setHeroStats] = useState(new Stats({
    hp: 10000,
    atk: 150,
    def: 10,
    atkSpd: 1.5,
    vamp: 5,
    cRate: 10,
    cDmg: 15,
    bonusHp: 0,
    bonusAtk: 0,
    bonusDef: 0,
    bonusAtkSpd: 0,
    bonusVamp: 0,
    bonusCRate: 0,
    bonusCDmg: 0
  }));
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
  const [lootFound, setLootFound] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [equipment, setEquipment] = useState(new Array(6).fill(null));
  const [showLevelUpPopup, setShowLevelUpPopup] = useState(false);
  const [levelUpOptions, setLevelUpOptions] = useState([]);
  const [rerollCount, setRerollCount] = useState(2);

  const backgroundAudioRef = useRef(null);
  const combatAudioRef = useRef(null);
  const bossAudioRef = useRef(null);
  const eventsEndRef = useRef(null);
  const combatLogsEndRef = useRef(null);

  const handleItemClick = (item) => {
    console.log('Item clicked:', item);
    setSelectedItem(item);
  };

  const closeItemPopup = () => {
    console.log('Closing item popup');
    setSelectedItem(null);
  };

  const handleSellItems = (rarityOrItem) => {
    if (typeof rarityOrItem === 'string') {
      const itemsToSell = inventory.filter(item => item.rarity === rarityOrItem);
      const totalGold = itemsToSell.reduce((acc, item) => acc + item.price, 0);
      setGold(prevGold => prevGold + totalGold);
      setInventory(prevInventory => prevInventory.filter(item => item.rarity !== rarityOrItem));
      setEvents(prevEvents => [
        ...prevEvents,
        `Sold ${itemsToSell.length} ${rarityOrItem} items for ${totalGold} gold.`
      ]);
    } else {
      setGold(prevGold => prevGold + rarityOrItem.price);
      setInventory(prevInventory => prevInventory.filter(item => item !== rarityOrItem));
      setEvents(prevEvents => [
        ...prevEvents,
        `Sold ${rarityOrItem.name} for ${rarityOrItem.price} gold.`
      ]);
      closeItemPopup();
    }
  };

  const handleEquipItem = (item) => {
    console.log('Equipping item:', item);
  
    const firstEmptySlot = equipment.findIndex(slot => slot === null);
    if (firstEmptySlot !== -1) {
      setEquipment(prevEquipment => {
        const newEquipment = [...prevEquipment];
        newEquipment[firstEmptySlot] = item;
        return newEquipment;
      });
  
      setInventory(prevInventory => prevInventory.filter(invItem => invItem !== item));
      setSelectedItem(null);
      incrementBonusStats(item.stats);
    } else {
      console.log('No empty slot available to equip the item.');
    }
  };
  
  const handleUnequipItem = (item) => {
    console.log('Unequipping item:', item);
  
    setEquipment(prevEquipment => {
      const newEquipment = prevEquipment.map(slot => (slot === item ? null : slot));
      return newEquipment;
    });
  
    setInventory(prevInventory => [...prevInventory, item]);
    setSelectedItem(null);
    decrementBonusStats(item.stats);
  };
  
  const incrementBonusStats = (stats) => {
    setHeroStats(prevStats => new Stats({
      hp: prevStats.getHp(),
      atk: prevStats.getAtk(),
      def: prevStats.getDef(),
      atkSpd: prevStats.getAtkSpd(),
      vamp: prevStats.getVamp(),
      cRate: prevStats.getCRate(),
      cDmg: prevStats.getCDmg(),
      bonusHp: prevStats.getBonusHp() + (stats.hp || 0),
      bonusAtk: prevStats.getBonusAtk() + (stats.atk || 0),
      bonusDef: prevStats.getBonusDef() + (stats.def || 0),
      bonusAtkSpd: prevStats.getBonusAtkSpd() + (stats.atkSpd || 0),
      bonusVamp: prevStats.getBonusVamp() + (stats.vamp || 0),
      bonusCRate: prevStats.getBonusCRate() + (stats.cRate || 0),
      bonusCDmg: prevStats.getBonusCDmg() + (stats.cDmg || 0)
    }));
  };
  
  const decrementBonusStats = (stats) => {
    setHeroStats(prevStats => new Stats({
      hp: prevStats.getHp(),
      atk: prevStats.getAtk(),
      def: prevStats.getDef(),
      atkSpd: prevStats.getAtkSpd(),
      vamp: prevStats.getVamp(),
      cRate: prevStats.getCRate(),
      cDmg: prevStats.getCDmg(),
      bonusHp: prevStats.getBonusHp() - (stats.hp || 0),
      bonusAtk: prevStats.getBonusAtk() - (stats.atk || 0),
      bonusDef: prevStats.getBonusDef() - (stats.def || 0),
      bonusAtkSpd: prevStats.getBonusAtkSpd() - (stats.atkSpd || 0),
      bonusVamp: prevStats.getBonusVamp() - (stats.vamp || 0),
      bonusCRate: prevStats.getBonusCRate() - (stats.cRate || 0),
      bonusCDmg: prevStats.getBonusCDmg() - (stats.cDmg || 0)
    }));
  };
  
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

  useEffect(() => {
    const getStates = async () => {
      try {
        const response = await fetch(STATES_URL, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const states = await response.json();
        setHasLoadedFromBackend(true);
        if(states.currentFloor) setCurrentFloor(states.currentFloor);
        if(states.currentRoom) setCurrentRoom(states.currentRoom);
        if(states.gold) setGold(states.gold);
        if(states.heroLevel) setHeroLevel(states.heroLevel);
        if(states.heroXP) setHeroXP(states.heroXP);
        if(states.requiredXP) setRequiredXP(states.requiredXP);
        if(states.inventory) setInventory(states.inventory);
        if(states.equipment) setEquipment(states.equipment);
        if(states.heroStats) setHeroStats(new Stats(states.heroStats));
        if(states.monsterStats) setMonsterStats(new Stats(states.monsterStats));
        console.log(states);
      } catch (error) {
        console.error(error.message);
      }
    };

    getStates();
  }, []);

  const debouncedSaveStates = useCallback(
    debounce((states) => saveStates(states, token), 3000),
    [token]
  );

  useEffect(() => {
    const states = {
      heroStats,
      currentFloor,
      currentRoom,
      monsterStats,
      heroXP,
      requiredXP,
      heroLevel,
      gold,
      inventory,
      equipment
    };

    if (hasLoadedFromBackend) {
      debouncedSaveStates(states);
    }
  }, [hasLoadedFromBackend, currentFloor, currentRoom, equipment, gold, heroLevel, heroStats, heroXP, inventory, monsterStats, requiredXP, debouncedSaveStates]);

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
    handleCombatPhase(selectedMonster);
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

  const getRandomBoss = () => {
    const bosses = monsters.filter(monster => monster.isBoss);
    const randomIndex = Math.floor(Math.random() * bosses.length);
    return bosses[randomIndex];
  };

  const handleBossRoom = () => {
    const bossMonster = getRandomBoss();
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

  const calculateDamage = (atk, def, cRate, cDmg) => {
    const baseDamage = Math.max(atk - def, 1);
    const variance = baseDamage * 0.2;
    let damage = baseDamage + (Math.random() * (2 * variance) - variance);
  
    const isCritical = Math.random() < (cRate / 100);
    if (isCritical) {
      damage *= (1 + (cDmg / 100));
    }
  
    return {
      damage: Math.max(Math.round(damage), 0),
      isCritical
    };
  };
  
  const handleHeroTurn = () => {
    console.log("Hero move");
    const heroTotalAtk = heroStats.getTotalAtk();
    const monsterTotalDef = monsterStats.getTotalDef();
    const heroCRate = heroStats.getTotalCRate();
    const heroCDmg = heroStats.getTotalCDmg();
    const { damage, isCritical } = calculateDamage(heroTotalAtk, monsterTotalDef, heroCRate, heroCDmg);
    const vampHealing = Math.round(damage * (heroStats.getTotalVamp() / 100));
    setHeroHealth((prevHealth) => Math.min(Math.round(prevHealth + vampHealing), heroStats.getTotalHp()));
    const newHealth = Math.max(monsterHealth - damage, 0); 
    handleMonsterHealth(newHealth, damage, isCritical);
  
    if (newHealth <= 0) {
      handleMonsterDefeat();
    } else {
      setTimeout(() => setCharacterTurn(2), 1000);
    }
  };
  
  const handleMonsterTurn = () => {
    console.log("Monster move");
    const monsterTotalAtk = monsterStats.getTotalAtk();
    const heroTotalDef = heroStats.getTotalDef();
    const { damage, isCritical } = calculateDamage(monsterTotalAtk, heroTotalDef, monsterStats.getTotalCRate(), monsterStats.getTotalCDmg());
    const newHealth = Math.max(heroHealth - damage, 0); 
    handleHeroHealth(newHealth, damage, isCritical);
  
    if (newHealth <= 0) {
      handleHeroDeath();
    } else {
      setTimeout(() => setCharacterTurn(1), 1000); 
    }
  
    resetMonsterAnimation();
  };
  
  const handleMonsterHealth = (newHealth, damage, isCritical) => {
    setMonsterHealth(newHealth);
    setIsMonsterHit(true);
    setTimeout(() => setIsMonsterHit(false), 200);
    setCombatLogs((prevLogs) => [
      ...prevLogs,
      `You dealt ${damage} ${isCritical ? 'crit ' : ''}damage to the ${monsterType}.`
    ]);
  };
  
  const handleHeroHealth = (newHealth, damage, isCritical) => {
    setHeroHealth(newHealth);
    setCombatLogs((prevLogs) => [
      ...prevLogs,
      `${monsterType} dealt ${damage} ${isCritical ? 'crit ' : ''}damage to you.`
    ]);
  };
  

  const updateHeroXP = () => {
    setHeroXP(prevXP => {
      const newXP = prevXP + monsterXP;
      if (newXP >= requiredXP) {
        setHeroLevel(prevLevel => prevLevel + 1);
        setRequiredXP(prev => prev + 100);
        setShowLevelUpPopup(true); 
        setLevelUpOptions(generateLevelUpOptions()); 
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
          `You found: <span style="color: ${rarityColors[loot[0].rarity]}">${loot[0].name}</span>.`
        ]);
        setLootFound(true);
      } else {
        setCombatLogs((prevLogs) => [
          ...prevLogs,
          `No loot found.`
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
    setCombatLogs((prevLogs) => [
      ...prevLogs,
      `${monsterType} dropped ${monsterGold} gold.`
    ]);
    setMonsterStatus('dead');
    setGold(prevGold => prevGold + monsterGold);
    updateHeroXP();

    const currentMonster = findCurrentMonster();
    handleLoot(currentMonster);

    setCharacterTurn(0);
    const bossMonster = monsters.find(monster => monster.isBoss && monster.type === monsterType);

    if (bossMonster) {
      handleBossDefeat();
    }
  };

  const handleHeroDeath = () => {
    setCombatLogs((prevLogs) => [...prevLogs, 'You have died.']);
    setCharacterTurn(0);
  };

  const resetMonsterAnimation = () => {
    setTimeout(() => setMonsterAnimation('idle'), 500);
  };

  const handleCombatPhase = (monster) => {
    console.log('Starting combat phase with monster:', monster);
    console.log('Is boss:', monster.isBoss);
    setCombatLogs(['Combat begins!']);
    backgroundAudioRef.current.pause();
    if (monster.isBoss) {
      bossAudioRef.current.currentTime = 0;
      bossAudioRef.current.play().catch((error) => {
        console.log('Error playing boss audio:', error);
      });
    } else {
      combatAudioRef.current.currentTime = 0;
      combatAudioRef.current.play().catch((error) => {
        console.log('Error playing combat audio:', error);
      });
    }
    setCharacterTurn(1);
  };

  const handleClaimReward = () => {
    if (droppedLoot.length > 0) {
      console.log("Previous Inventory:", inventory);
      console.log("Dropped Loot:", droppedLoot);
      setInventory((prevInventory) => {
        const newInventory = [...prevInventory, ...droppedLoot];
        console.log("Updated Inventory:", newInventory);
        return newInventory;
      });
      handleEvent(setEvents, (
        <>
          You claimed: <span style={{ color: rarityColors[droppedLoot[0].rarity] }}>{droppedLoot[0].name}</span>.
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
            setMonsterHealth(monster.stats.getHp());
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

  const generateLevelUpOptions = () => {
    const options = [
      { label: 'HP UP', description: 'Increase HP by 12%', increase: () => setHeroStats((prevStats) => new Stats({ ...prevStats, hp: prevStats.getHp() * 1.12 })) },
      { label: 'ATK UP', description: 'Increase ATK by 8%', increase: () => setHeroStats((prevStats) => new Stats({ ...prevStats, atk: prevStats.getAtk() * 1.08 })) },
      { label: 'DEF UP', description: 'Increase DEF by 8%', increase: () => setHeroStats((prevStats) => new Stats({ ...prevStats, def: prevStats.getDef() * 1.08 })) },
      { label: 'ATK.SPD UP', description: 'Increase ATK.SPD by 3%', increase: () => setHeroStats((prevStats) => new Stats({ ...prevStats, atkSpd: prevStats.getAtkSpd() * 1.03 })) },
      { label: 'VAMP UP', description: 'Increase VAMP by 2%', increase: () => setHeroStats((prevStats) => new Stats({ ...prevStats, vamp: prevStats.getVamp() * 1.02 })) },
      { label: 'C.RATE UP', description: 'Increase C.RATE by 1%', increase: () => setHeroStats((prevStats) => new Stats({ ...prevStats, cRate: prevStats.getCRate() + 1 })) },
      { label: 'C.DMG UP', description: 'Increase C.DMG by 6%', increase: () => setHeroStats((prevStats) => new Stats({ ...prevStats, cDmg: prevStats.getCDmg() + 6 })) },
    ];
    const shuffledOptions = options.sort(() => Math.random() - 0.5);
    return shuffledOptions.slice(0, 3);
  };  

  const handleLevelUp = (option) => {
    option.increase();
    setShowLevelUpPopup(false);
  };

  const handleReroll = () => {
    if (rerollCount > 0) {
      setRerollCount(rerollCount - 1);
      setLevelUpOptions(generateLevelUpOptions());
    }
  };

  return (
    <div className="Game">
      <header className="App-header">
        <h1>Dungeon Descent</h1>
      </header>
      <HeroStatus
        name={character.name}
        level={heroLevel}
        currentXP={heroXP}
        requiredXP={requiredXP}
        gold={gold}
        inventory={inventory}
        onItemClick={handleItemClick}
        onSellItems={handleSellItems}
        equipment={equipment}
      />
      <div className="Stats-container-wrapper">
        <StatsDisplay stats={heroStats} />
        <BonusStatsDisplay stats={heroStats} />
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
          lootFound={lootFound}
        />
      )}
      {showInventory && (
        <Inventory
          items={inventory}
          onClose={() => setShowInventory(false)}
          onItemClick={handleItemClick}
          onSellItems={handleSellItems}
          equipment={equipment}
        />
      )}
      {selectedItem && (
        <ItemPopup
          item={selectedItem}
          onClose={closeItemPopup}
          onEquipItem={handleEquipItem}
          onUnequipItem={handleUnequipItem}
          onSellItem={handleSellItems}
          equipment={equipment}
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
      {showLevelUpPopup && (
        <LevelUpPopup
          levelUpOptions={levelUpOptions}
          handleStatIncrease={handleLevelUp}
          handleReroll={handleReroll}
          rerollCount={rerollCount}
        />
      )}
      <audio ref={backgroundAudioRef} src="./audio/background.ogg" loop />
      <audio ref={combatAudioRef} src="./audio/battle.ogg" />
      <audio ref={bossAudioRef} src="./audio/boss-battle.ogg" />
    </div>
  );
}

export default Game;
