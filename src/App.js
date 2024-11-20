import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Account from './components/Account';
import Withdraw from './components/Withdraw';
import Deposit from './components/Deposit';
import Balance from './components/Balance';
import SuccessPage from './components/SuccessPage';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home setUser={setUser} />} />
        {user && (
          <>
            <Route path="/account" element={<Account />} />
            <Route path="/withdraw" element={<Withdraw user={user} setUser={setUser} />} />
            <Route path="/deposit" element={<Deposit user={user} setUser={setUser} />} />
            <Route path="/balance" element={<Balance user={user} />} />
            <Route path="/success" element={<SuccessPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
