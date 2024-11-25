import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUserBalance, addTransaction } from '../api';
import './FastWithdraw.css';

function FastWithdraw({ user, setUser }) {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  
  // Add more predefined amounts for fast withdrawal
  const amounts = [5000, 10000, 15000, 20000, 25000, 30000];

  const handleFastWithdraw = async (amount) => {
    if (user.balance < amount) {
      setErrorMessage('Insufficient balance');
      setTimeout(() => setErrorMessage(''), 3000); // Clear the error message after 3 seconds
      return;
    }

    const newBalance = user.balance - amount;

    try {
      if (!user.id) {
        setErrorMessage('User ID is missing');
        setTimeout(() => setErrorMessage(''), 3000); // Clear the error message after 3 seconds
        return;
      }

      // Update balance on the server
      await updateUserBalance(user.id, newBalance);
      const negwithdrawAmount = 0 - amount;

      // Update the local user state
      setUser({ ...user, balance: newBalance });

      await addTransaction({
        userId: user.id,
        date: new Date().toISOString(),
        description: 'Debit',
        amount: negwithdrawAmount,
      });

      // Navigate to SuccessPage with remaining balance
      navigate('/success', { state: { remainingBalance: newBalance } });
    } catch (error) {
      console.error('Error during withdrawal:', error);
      setErrorMessage('Transaction failed. Please try again.');
      setTimeout(() => setErrorMessage(''), 3000); // Clear the error message after 3 seconds
    }
  };

  return (
    <div className="fast-withdraw-container">
      <h1>Fast Withdraw</h1>
      <p>Select an amount to withdraw instantly:</p>
      {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Error message */}
      <div className="fast-withdraw-options">
        {amounts.map((amount) => (
          <button
            key={amount}
            onClick={() => handleFastWithdraw(amount)}
            className="fast-withdraw-button"
          >
            ₹{amount}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FastWithdraw;
