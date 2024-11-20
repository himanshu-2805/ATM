import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUserBalance } from '../api';
import './Withdraw.css';

function Withdraw({ user, setUser }) {
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleWithdraw = async () => {
    const withdrawAmount = Number(amount);

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
      setErrorMessage('Please enter a valid amount');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    if (withdrawAmount < 100) {
      setErrorMessage('Withdrawal amount must be at least ₹100.');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    if (withdrawAmount % 100 !== 0) {
      setErrorMessage('Withdrawal amount must be a multiple of ₹100.');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    if (withdrawAmount > 40000) {
      setErrorMessage('Withdrawal limit exceeded. The maximum amount is ₹40,000.');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    if (withdrawAmount > user.balance) {
      setErrorMessage('Insufficient balance');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    const newBalance = user.balance - withdrawAmount;

    try {
      if (!user.id) {
        setErrorMessage('User ID is missing');
        setTimeout(() => setErrorMessage(''), 3000);
        return;
      }

      // Update balance on the server
      await updateUserBalance(user.id, newBalance);

      // Update the local user state
      setUser({ ...user, balance: newBalance });

      // Navigate to SuccessPage with remaining balance
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
      <h2>Withdraw Money</h2>
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
      <button onClick={handleWithdraw} className="btn">Withdraw</button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default Withdraw;
