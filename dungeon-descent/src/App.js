import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Game from './components/Game';
import './styles/App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router basename="/dungeon-descent">
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
