import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import Game from './components/game/Game';
import './styles/game/App.css';
import './styles/landing/LandingPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Nav from './components/Nav';

function App() {
  return (
    <Router basename="/dungeon-descent">
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
