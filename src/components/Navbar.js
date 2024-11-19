import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>
        EXL ATM
      </div>
      <div className="navbar-links">
        <button className="navbar-button" onClick={() => navigate('/')}>Home</button>
        {/* <button className="navbar-button" onClick={() => navigate('/account')}>Account</button> */}
      </div>
    </nav>
  );
}

export default Navbar;
