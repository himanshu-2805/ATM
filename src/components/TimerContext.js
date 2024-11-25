import React, { createContext, useState, useEffect } from 'react';

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [startTime, setStartTime] = useState(null);

  const startTimer = () => {
    setStartTime(Date.now());
  };

  const resetTimer = () => {
    setStartTime(null);
  };

  const getElapsedTime = () => {
    if (!startTime) return 0;
    return Math.floor((Date.now() - startTime) / 1000);
  };

  return (
    <TimerContext.Provider value={{ startTimer, resetTimer, getElapsedTime }}>
      {children}
    </TimerContext.Provider>
  );
};
