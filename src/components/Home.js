import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../api';
import Navbar from './Navbar';
import './Home.css';

function Home({ setUser }) {
  const [accountNumber, setAccountNumber] = useState('');
  const [pin, setPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = await getUser(accountNumber, pin);
    if (user) {
      setUser(user);
      navigate('/account');
    } else {
      setErrorMessage('Invalid account number or PIN');
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <h2>Welcome to EXL ATM</h2>
          <input
            type="text"
            placeholder="Enter Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          <button onClick={handleLogin} className="btn">Login</button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </div>
    </>
  );
}

export default Home;
