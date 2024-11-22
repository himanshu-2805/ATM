import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Account from './components/Account';
import Withdraw from './components/Withdraw';
import Deposit from './components/Deposit';
import Balance from './components/Balance';
import SuccessPage from './components/SuccessPage';
import ChangePin from './components/ChangePin';
import Transactions from './components/Transactions';
import FastWithdraw from './components/FastWithdraw'; 
// import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
        {/* <Header />  */}
       <Navbar />
      <Routes>
        <Route path="/" element={<Home setUser={setUser} />} />
        {user && (
          <>
            <Route path="/account" element={<Account />} />
            <Route path="/fastwithdraw" element={<FastWithdraw user={user} setUser={setUser} />} />
            <Route path="/withdraw" element={<Withdraw user={user} setUser={setUser} />} />
            <Route path="/deposit" element={<Deposit user={user} setUser={setUser} />} />
            <Route path="/balance" element={<Balance user={user} />} />
            <Route path="/changepin" element={<ChangePin user={user} setUser={setUser} />} />
  <Route path="/transactions" element={<Transactions user={user} />} />
            <Route path="/success" element={<SuccessPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
