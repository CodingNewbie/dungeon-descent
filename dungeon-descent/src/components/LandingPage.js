import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';  

function LandingPage() {
  return (
    <div className="LandingPage">
      <header className="LandingPage-header">
        <h1>Welcome to Dungeon Descent</h1>
        <p>Your adventure awaits...</p>
        <Link to="/game">
          <button>Start Game</button>
        </Link>
      </header>
    </div>
  );
}

export default LandingPage;
