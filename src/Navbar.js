import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="Logo">
        <Link to="/"><span>E</span>ventzo</Link>
      </div>
      <div className='navDiv'>
      <button className="toggle-button" onClick={toggleNavbar}>
        ☰
      </button>
      <ul className={`NavItems ${isOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {isAuthenticated ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><button onClick={onLogout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;