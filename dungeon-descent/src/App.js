import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Game from './components/Game';
import './styles/App.css';
import './styles/LandingPage.css';
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
