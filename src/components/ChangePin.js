import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUserPin } from '../api'; // Use the new API function
import './ChangePin.css';

function ChangePin({ user, setUser }) {
  const [currentPin, setCurrentPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const redirectToLogin = () => {
    setUser(null);
    navigate('/');
  };

  const handleChangePin = async () => {
    if (currentPin !== user.pin) {
      setMessage('Current PIN is incorrect.');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    if (newPin !== confirmPin) {
      setMessage('New PIN and Confirm PIN do not match.');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    if (newPin.length !== 4 || isNaN(newPin)) {
      setMessage('PIN must be a 4-digit number.');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    try {
      // Call the API to update the PIN
      await updateUserPin(user.id, newPin);

      // Update the local user state
      setUser({ ...user, pin: newPin });

      setMessage('PIN changed successfully! Redirecting to login page...');
      setTimeout(() => redirectToLogin(), 3000); // Redirect after success
    } catch (error) {
      console.error('Error changing PIN:', error);
      setMessage('Failed to change PIN. Please try again.');
    }
  };

  return (
    <div className="change-pin-container">
      <h1>Change PIN</h1>
      {message && <p className="message">{message}</p>}
      <input
  type="password"
  placeholder="Current PIN"
  value={currentPin}
  onChange={(e) => {
    if (e.target.value.length <= 4) {
      setCurrentPin(e.target.value);
    }
  }}
  onKeyPress={(e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault(); // Prevent non-numeric input
    }
  }}
/>
<input
  type="password"
  placeholder="New PIN"
  value={newPin}
  onChange={(e) => {
    if (e.target.value.length <= 4) {
      setNewPin(e.target.value);
    }
  }}
  onKeyPress={(e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault(); // Prevent non-numeric input
    }
  }}
/>
<input
  type="password"
  placeholder="Confirm New PIN"
  value={confirmPin}
  onChange={(e) => {
    if (e.target.value.length <= 4) {
      setConfirmPin(e.target.value);
    }
  }}
  onKeyPress={(e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault(); // Prevent non-numeric input
    }
  }}
/>


      <button onClick={handleChangePin} className="btn">
        Change PIN
      </button>
    </div>
  );
}

export default ChangePin;
