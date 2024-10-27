import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="#" element={<h1>About Page</h1>} />
        <Route path="#" element={isAuthenticated ? <h1>Profile Page</h1> : <h1>Please log in</h1>} />
        <Route path="#" element={<button onClick={handleLogin}>Login</button>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
