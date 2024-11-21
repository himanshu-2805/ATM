import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { fetchUserTransactions } from '../api'; // Import the API function
import './Transactions.css';

function Transactions({ user }) {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const data = await fetchUserTransactions(user.id); // Fetch transactions using API
        setTransactions(data);
      } catch (err) {
        console.error('Failed to fetch transactions:', err);
      }
    };

    getTransactions();
  }, [user.id]);

  return (
    <div className="transactions-container">
      <h1>Mini Statement</h1>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{new Date(transaction.date).toLocaleString()}</td>
                <td>{transaction.description}</td>
                <td
                  className={
                    transaction.amount > 0
                      ? 'transaction-amount deposit'
                      : 'transaction-amount withdraw'
                  }
                >
                  ₹{transaction.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* Add Back to Account button */}
      <button 
        className="back-to-account-button" 
        onClick={() => navigate('/account')}
      >
        Back to Account
      </button>
    </div>
  );
}

export default Transactions;
