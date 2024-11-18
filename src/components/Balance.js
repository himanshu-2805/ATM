import React from 'react';

function Balance({ user }) {
  return (
    <div>
      <h2>Account Balance</h2>
      <p>Your balance is: ₹{user.balance}</p>
    </div>
  );
}

export default Balance;
