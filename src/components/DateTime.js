import React, { useState, useEffect } from 'react';

const DateTime = () => {
  // State to store the current date and time
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Function to update the time
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    // Set an interval to update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs once on mount

  // Format the time and date
  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString();

  return (
    <div style={styles.container}>
      <div style={styles.topRightContainer}>
        {/* <i style={styles.icon}>🔔</i> Example icon */}
        <p style={styles.dateTime}>{formattedDate} {formattedTime}</p>
      </div>
    </div>
  );
};

const styles = {
  
  topRightContainer: {
    position: 'absolute',
    top: '56px', // Position from the top of the screen
    right: '10px', // Position from the right of the screen
    display: 'flex', // Use flexbox to align the icon and text
    alignItems: 'center', // Vertically center the items
  },
  icon: {
    fontSize: '15px', // Size of the icon
    marginRight: '10px', // Space between the icon and the date-time text
  },
  dateTime: {
    fontSize: '12px', // Slightly larger font size for better readability
    color: '#75736c', // A vibrant color like tomato red
    // fontWeight: 'bold', // Making the text bold
    fontFamily: 'Arial, sans-serif', // Using a clean and modern font
    textShadow: '.5px .5px 1px #000', // Adding a subtle shadow for depth

  },
};

export default DateTime;
