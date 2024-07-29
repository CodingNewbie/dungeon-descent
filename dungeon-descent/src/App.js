import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import Game from './components/game/Game';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import './styles/game/App.css';
import './styles/landing/LandingPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'rpg-awesome/css/rpg-awesome.min.css';

function App() {
  return (
    <Router basename="/dungeon-descent">
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/game"
            element={
              <PrivateRoute>
                <Game />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
