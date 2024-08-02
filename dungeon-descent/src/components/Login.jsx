import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setCurrentUser } = useAuth();

  const login = async (e) => {
    e.preventDefault();
    try {
      const requestData = { username, password };
      console.log('Sending login request with data:', requestData);

      const response = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/dj-rest-auth/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData), 
      });

      const data = await response.json();
      console.log('Login response:', data);

      if (!response.ok) {
        throw new Error(data.detail || 'Login failed');
      }

      localStorage.setItem('token', data.access);
      setCurrentUser(data.user); 
      console.log('User logged in successfully:', data);
      navigate('/game');
    } catch (error) {
      setError(error.message);
      console.error('Error logging in user:', error);
    }
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <h2>Dungeon Descent</h2>
        <form onSubmit={login}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
          {error && <p>{error}</p>}
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
