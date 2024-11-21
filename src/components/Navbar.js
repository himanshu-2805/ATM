import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import DateTime from './DateTime';
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide Navbar on Home Page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => navigate('/account')}>
          EXL ATM
        </div>
        <div className="navbar-links">
          <button className="navbar-button" onClick={() => navigate('/account')}>Account</button>
          <button className="navbar-button" onClick={() => navigate('/')}>Logout</button>
        </div>
        <DateTime/>
      </div>
    </nav>
  );
}

export default Navbar;
