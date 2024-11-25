import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SuccessPage.css';

function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">
        <h1>Transaction Successful!</h1>
        <br></br>
        <p>Do you want to view your final remaining balance?</p>
        <div className="success-buttons">
          <button className="btn" onClick={() => navigate('/balance')}>
            Yes
          </button>
          <button className="btn" onClick={() => navigate('/account')}>
           No 
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
