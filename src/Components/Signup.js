import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from './users';  
import './LoginSignup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  const addUser = async () => {
    try {
    const response = await fetch(`http://localhost:8000/signup`, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
    name:username,
    password
    }),
    });
    if (response.ok) {
    console.log("User added");
    } else {
    console.error("Failed to add User");
    }
    } catch (err) {
    console.log("Error adding User:", err);
    }
};
  const handleSubmit = (event) => {
    event.preventDefault();
    addUser();
   console.log(users)
    setTimeout(() => {
    
      navigate('/home');
    }, 1000);
  };

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Signup</h2>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit">Signup</button>
        </form>
        <p>Already a User? <a href="/">Login</a></p>
      </div>
    </div>
  );
};

export default Signup;
