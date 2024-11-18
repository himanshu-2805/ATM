import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">EXL ATM</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {/* <Link to="/account">Account</Link> */}
      </div>
    </nav>
  );
}

export default Navbar;
