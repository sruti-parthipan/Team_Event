import React, { useState } from 'react';
import { useNavigate,NavLink } from 'react-router-dom';
import { validateUser } from '../Api/userApi';
import './LoginSignup.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalidMsg, setInvalidMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const result = await validateUser(username, password);

    if (result.success) {
      navigate('/home');
    } else {
      setInvalidMsg(result.message || 'Invalid username or password');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            id="pwd"
            name="pwd"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="error">{invalidMsg}</span>
          <button type="submit">Login</button>
          <p>Don't have an account? <NavLink to="/signup">Signup</NavLink></p>
        </form>
      </div>
    </div>
  );
};

export default Login;

