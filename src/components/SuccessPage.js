import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SuccessPage.css';

function SuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { remainingBalance } = location.state || {};

  return (
    <div className="success-container">
      <div className="success-card">
        <h1>Transaction Successful!</h1>
        <p>Your remaining balance is:</p>
        <h2>${remainingBalance}</h2>
        <button className="btn" onClick={() => navigate('/account')}>Go Back to Account</button>
      </div>
    </div>
  );
}

export default SuccessPage;
