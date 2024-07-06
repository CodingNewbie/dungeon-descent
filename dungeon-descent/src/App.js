// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import './styles/App.css';

function App() {
  const [events, setEvents] = useState([]);
  const eventsEndRef = useRef(null);

  const messages = [
    "There is nothing in this area.",
    "You found a corpse.",
    "You found a door.",
    "You moved to the next floor.",
    "You explored and found nothing.",
    "You found an empty chest.",
    "You encountered a Goblin.",
    "You encountered an Orc.",
    "You encountered a Skeleton Archer."
  ];

  useEffect(() => {
    eventsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [events]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setEvents(prevEvents => [...prevEvents, randomMessage]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dungeon Descent</h1>
      </header>
      <div className="Events-container">
        {events.map((event, index) => (
          <div key={index} className="Event">{event}</div>
        ))}
        <div ref={eventsEndRef} />
      </div>
    </div>
  );
}

export default App;
