// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import './styles/App.css';

function App() {
  const [events, setEvents] = useState([]);
  const eventsEndRef = useRef(null);

  useEffect(() => {
    eventsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [events]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEvents(prevEvents => [...prevEvents, `New event at ${new Date().toLocaleTimeString()}`]);
    }, 2000);

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
