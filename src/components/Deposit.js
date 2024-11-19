import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUserBalance } from '../api';

function Deposit({ user, setUser }) {
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleDeposit = async () => {
    const depositAmount = Number(amount);

    if (isNaN(depositAmount) || depositAmount <= 0) {
      setErrorMessage('Please enter a valid amount');
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

      // Update the local user state
      setUser({ ...user, balance: newBalance });

      // Navigate to SuccessPage with the new balance
      navigate('/success', { state: { remainingBalance: newBalance } });
    } catch (error) {
      setErrorMessage('Transaction failed. Please try again.');
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  return (
    <div className="transaction">
      <h2>Deposit Money</h2>
      <input
        type="number"
        value={amount}
        placeholder="Enter amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDeposit} className="btn">Deposit</button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default Deposit;
