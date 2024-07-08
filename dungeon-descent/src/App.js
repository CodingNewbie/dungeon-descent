// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { createCharacter } from './components/Character';
import { Floor } from './components/Floor'; // Import the Floor class
import { Stats, StatsDisplay, BonusStatsDisplay } from './components/Stats'; // Import Stats, StatsDisplay, and BonusStatsDisplay
import './styles/App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [character, setCharacter] = useState(createCharacter(''));
  const [floor] = useState(new Floor());
  const [stats] = useState(new Stats());
  const [lockedChest, setLockedChest] = useState(false);
  const [chestInteraction, setChestInteraction] = useState(null);
  const [foundDoor, setFoundDoor] = useState(false);
  const [doorInteraction, setDoorInteraction] = useState(null);
  const [currentFloor, setCurrentFloor] = useState(1);
  const [currentRoom, setCurrentRoom] = useState(1);
  const [isBossRoom, setIsBossRoom] = useState(false);

  const handleCreateCharacter = () => {
    const newCharacter = createCharacter('Bob');
    setCharacter(newCharacter);
  };

  const eventsEndRef = useRef(null);
  const MAX_EVENTS = 50;

  const handleChestOpen = () => {
    const roll = Math.random();
    const result = roll < 0.5 ? 'The chest is empty.' : 'You found 100 gold.';
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
    setFoundDoor(false);
    setDoorInteraction(null);
  };

  useEffect(() => {
    if (!lockedChest && !foundDoor) {
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
  }, [floor, lockedChest, foundDoor]);

  useEffect(() => {
    if (eventsEndRef.current) {
      eventsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [events, chestInteraction, doorInteraction]);

  return (
    <div className="App">
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
          <div className="Chest-interaction">
            <p>{chestInteraction}</p>
            <button onClick={handleChestOpen}>Open the chest</button>
            <button onClick={handleChestIgnore}>Ignore</button>
          </div>
        )}
        {doorInteraction && (
          <div className="Door-interaction">
            <p style={isBossRoom ? { color: 'red' } : {}}>{doorInteraction}</p>
            <button onClick={handleDoorOpen}>Enter</button>
            <button onClick={handleDoorIgnore}>Ignore</button>
          </div>
        )}
        <div ref={eventsEndRef} />
      </div>
    </div>
  );
}

export default App;
