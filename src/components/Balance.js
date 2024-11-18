import React from 'react';
import './Balance.css';

function Balance({ user }) {
  return (
    <div className="balance-container">
      <h2>Account Balance</h2>
      <div className="balance-card">
        <p>Your current balance is:</p>
        <h1 className="balance-amount">₹{user.balance.toFixed(2)}</h1>
      </div>
    </div>
  );
}

export default Balance;
