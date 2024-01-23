import React from 'react';
import './Header.css';
import logo from './logo.png'; // Import the image
 
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Your logo */}
        <img src={logo} alt="logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contacts">Contacts</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      {/* Any additional content */}
    </header>
  );
};

export default Header;
