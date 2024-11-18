import React, { useState } from 'react';
import { updateUserBalance } from '../api';

function Deposit({ user, setUser }) {
  const [amount, setAmount] = useState('');

  const handleDeposit = async () => {
    const newBalance = user.balance + Number(amount);
    await updateUserBalance(user.id, newBalance);
    setUser({ ...user, balance: newBalance });
    alert('Deposit successful');
  };

  return (
    <div>
      <h2>Deposit Money</h2>
      <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
}

export default Deposit;
