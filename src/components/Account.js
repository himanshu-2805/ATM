import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Account.css';

function Account() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="account-container">
      <h1 className="account-title">Welcome to Your EXL Account</h1>
      <p className="account-description">
        Manage your transactions and access account features easily.
      </p>
      <div className="account-actions">
        <div className="button-group">
          <button className="manual-button" onClick={() => handleButtonClick('/withdraw')}>🔘</button>
          <button className="account-buttonL" onClick={() => handleButtonClick('/withdraw')}>Withdraw</button>
        </div>
        <div className="button-group">
          
          <button className="account-buttonR" onClick={() => handleButtonClick('/deposit')}>Deposit</button>
          <button className="dd" onClick={() => handleButtonClick('/deposit')}>🔘</button>
        </div>
        <div className="button-group">
          <button className="manual-button" onClick={() => handleButtonClick('/balance')}>🔘</button>
          <button className="account-buttonL" onClick={() => handleButtonClick('/balance')}>Check Balance</button>
        </div>
        <div className="button-group">
         
          <button className="account-buttonR" onClick={() => handleButtonClick('/fastwithdraw')}>Fast Withdraw</button>
          <button className="manual-buttonR" onClick={() => handleButtonClick('/fastwithdraw')}>🔘</button>
        </div>
        <div className="button-group">
          <button className="manual-button" onClick={() => handleButtonClick('/changepin')}>🔘</button>
          <button className="account-buttonL" onClick={() => handleButtonClick('/changepin')}>Change PIN</button>
        </div>
        <div className="button-group">
         
          <button className="account-buttonR" onClick={() => handleButtonClick('/transactions')}>Mini Statement</button>
          <button className="manual-buttonR" onClick={() => handleButtonClick('/transactions')}>🔘</button>
        </div>
      </div>
    </div>
  );
}

export default Account;
