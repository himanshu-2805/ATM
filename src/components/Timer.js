import React, { useEffect, useState } from 'react';
import './Timer.css'; // Optional styling

function Timer() {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      Time Spent: {formatTime(timeElapsed)}
    </div>
  );
}

export default Timer;
