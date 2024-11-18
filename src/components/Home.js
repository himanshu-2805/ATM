import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../api';

function Home({ setUser }) {
  const [accountNumber, setAccountNumber] = useState('');
  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = await getUser(accountNumber, pin);
    if (user) {
      setUser(user);
      navigate('/account');
    } else {
      alert('Invalid account number or PIN');
    }
  };

  return (
    <div className="home">
      <h2>Welcome to EXL ATM</h2>
      <input
        type="text"
        placeholder="Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <input
        type="password"
        placeholder="PIN"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      <button onClick={handleLogin} className="btn">Login</button>
    </div>
  );
}

export default Home;
