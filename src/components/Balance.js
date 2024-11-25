import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Balance.css';

function Balance({ user }) {
  const navigate = useNavigate();

  return (
    <div className="balance-container">
      <h2>Account Balance</h2>
      <div className="balance-card">
        <p>Your current balance is:</p>
        <h1>₹{user.balance.toFixed(2)}</h1>
      </div>
      <button className="btn" onClick={() => navigate('/account')}>
        Go Back to your Account 
      </button>
    </div>
  );
}

export default Balance;
