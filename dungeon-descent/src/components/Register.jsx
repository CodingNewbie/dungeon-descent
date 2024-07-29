import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // useNavigate hook for redirection

  const register = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/dj-rest-auth/registration/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password1, password2 }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data); // Log the response data for debugging
        const errorMsg = data.password1 ? data.password1[0] : 'Registration failed';
        throw new Error(errorMsg);
      }

      console.log('User registered successfully:', data);
      localStorage.setItem('token', data.access); // Store the token

      // Redirect to game screen after successful registration
      navigate('/game');
    } catch (error) {
      setError(error.message);
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={register}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          placeholder="Password"
          required
        />
        <input
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Register</button>
        {error && <p>{error}</p>}
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
