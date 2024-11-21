import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUserBalance, addTransaction } from '../api';
import './Deposit.css';

function Deposit({ user, setUser }) {
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleDeposit = async () => {
    const depositAmount = Number(amount);

    // Validate the entered amount
    if (isNaN(depositAmount) || depositAmount <= 0) {
      setErrorMessage('Please enter a valid amount');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    if (depositAmount < 100) {
      setErrorMessage('Deposit amount must be at least ₹100.');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    if (depositAmount > 49900) {
      setErrorMessage('Deposit limit exceeded. The maximum amount is ₹49,900.');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    if (depositAmount % 100 !== 0) {
      setErrorMessage('Deposit amount must be a multiple of ₹100.');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    const newBalance = user.balance + depositAmount;

    try {
      if (!user.id) {
        setErrorMessage('User ID is missing');
        setTimeout(() => setErrorMessage(''), 3000);
        return;
      }

      // Update balance on the server
      await updateUserBalance(user.id, newBalance);

      await addTransaction({
        userId: user.id,
        date: new Date().toISOString(),
        description: 'Deposit',
        amount: depositAmount,
      });
  

      // Update the local user state
      setUser({ ...user, balance: newBalance });

      // Navigate to SuccessPage with the new balance
      navigate('/success', { state: { remainingBalance: newBalance } });
    } catch (error) {
      setErrorMessage('Transaction failed. Please try again.');
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  // Function to handle numpad button click
  const handleNumpadClick = (value) => {
    setAmount((prevAmount) => prevAmount + value);
  };

  return (
    <div className="transaction">
      <h2>Deposit Money</h2>
      <input
        type="number"
        value={amount}
        placeholder="Enter amount"
        readOnly
        className="transaction-input"
      />
      <div className="numpad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button
            key={num}
            className="numpad-button"
            onClick={() => handleNumpadClick(num.toString())}
          >
            {num}
          </button>
        ))}
        <button
          className="numpad-button"
          onClick={() => setAmount('')} /* Clear the input */
        >
          Clear
        </button>
      </div>
      <button onClick={handleDeposit} className="btn">Deposit</button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default Deposit;
