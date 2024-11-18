import React from 'react';
import { Link } from 'react-router-dom';

function Account() {
  return (
    <div className="account">
      <h2>Account Dashboard</h2>
      <Link to="/withdraw">Withdraw</Link>
      <Link to="/deposit">Deposit</Link>
      <Link to="/balance">Check Balance</Link>
    </div>
  );
}

export default Account;
