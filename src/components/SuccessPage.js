import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SuccessPage.css';

function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">
        <h1>Transaction Successful!</h1>
        <p>What would you like to do next?</p>
        <div className="success-buttons">
          <button className="btn" onClick={() => navigate('/balance')}>
            Check Balance
          </button>
          <button className="btn" onClick={() => navigate('/account')}>
            Account Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
