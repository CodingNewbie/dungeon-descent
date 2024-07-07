// src/App.jsx
import React, { useState, useEffect, useRef } from "react";
import { createCharacter } from "./components/Character";
import { Floor } from "./components/Floor"; // Import the Floor class
import "./styles/App.css";

function App() {
  const [events, setEvents] = useState([]);
  const [character, setCharacter] = useState(createCharacter(""));
  const [floor, setFloor] = useState(new Floor());

  const handleCreateCharacter = () => {
    const newCharacter = createCharacter("Bob");
    setCharacter(newCharacter);
  };

  const eventsEndRef = useRef(null);
  const MAX_EVENTS = 50;

  useEffect(() => {
    const interval = setInterval(() => {
      const encounterMessage = floor.get_encounter();
      setEvents((prevEvents) => {
        const updatedEvents = [...prevEvents, encounterMessage];
        if (updatedEvents.length > MAX_EVENTS) {
          updatedEvents.shift();
        }
        return updatedEvents;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [floor]);

  useEffect(() => {
    if (eventsEndRef.current) {
      eventsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [events]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dungeon Descent</h1>
      </header>
      <button onClick={handleCreateCharacter}>Create Character</button>
      <p>{character.name}</p>
      
      <div className="Info-container">
        <p>{floor.floor_name()}</p>
      </div>
      <div className="Events-container">
        {events.map((event, index) => (
          <div key={index} className="Event">
            {event}
          </div>
        ))}
        <div ref={eventsEndRef} />
      </div>
    </div>
  );
}

export default App;
