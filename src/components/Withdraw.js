import React, { useState } from 'react';
import { updateUserBalance } from '../api';

function Withdraw({ user, setUser }) {
  const [amount, setAmount] = useState('');

  const handleWithdraw = async () => {
    if (amount > user.balance) {
      alert('Insufficient balance');
      return;
    }
    const newBalance = user.balance - amount;
    await updateUserBalance(user.id, newBalance);
    setUser({ ...user, balance: newBalance });
    alert('Withdrawal successful');
  };

  return (
    <div>
      <h2>Withdraw Money</h2>
      <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}

export default Withdraw;
