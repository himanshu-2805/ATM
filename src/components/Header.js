import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ onLogout }) {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup timer on component unmount
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleLogout = () => {
    onLogout();
    navigate('/'); // Redirect to the home screen
  };

  return (
    <header className="header-container">
      <div className="header-left">
        <h1>EXL ATM</h1>
      </div>
      <div className="header-center">
        <p>Time Spent: <span className="time-spent">{formatTime(timeElapsed)}</span></p>
      </div>
      <div className="header-right">
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
