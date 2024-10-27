import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} <span>E</span>ventzo | All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
