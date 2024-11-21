import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Account.css';

function Account() {
  const navigate = useNavigate();

  return (
    <div className="account-container">
      <h1 className="account-title">Welcome to Your EXL Account</h1>
      <p className="account-description">
        Manage your transactions and access account features easily.
      </p>
      <div className="account-actions">
        <button className="account-buttonL" onClick={() => navigate('/withdraw')}>Withdraw</button>
        <button className="account-buttonR" onClick={() => navigate('/deposit')}>Deposit</button>
        <button className="account-buttonL" onClick={() => navigate('/balance')}>Check Balance</button>
        <button className="account-buttonR" onClick={() => navigate('/fastwithdraw')}>Fast Withdraw</button>
        <button className="account-buttonL" onClick={() => navigate('/changepin')}>Change PIN</button>
        <button className="account-buttonR" onClick={() => navigate('/transactions')}>Mini Statement</button>
      </div>
    </div>
  );
}

export default Account;
