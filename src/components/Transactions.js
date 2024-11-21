import React, { useEffect, useState } from 'react';
import { fetchUserTransactions } from '../api'; // Import the API function
import './Transactions.css';

function Transactions({ user }) {
  const [transactions, setTransactions] = useState([]);

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
      <h1>Recent Transactions</h1>
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
                <td>₹{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Transactions;
