import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

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
          <button className="navbar-button" onClick={() => navigate('/account')}>Dashboard</button>
          <button className="navbar-button" onClick={() => navigate('/')}>Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
