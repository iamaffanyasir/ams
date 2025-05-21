import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <span className="logo-icon">♯</span> AMS
          </a>
        </div>
        <div className="navbar-links">
          <a href="/funding">Funding</a>
          <a href="/events">Events</a>
          <a href="/about">About</a>
          <a href="/how-it-works">How It Works</a>
          <a href="/news">News</a>
        </div>
        <div className="navbar-button">
          <a href="/donate" className="donate-btn">Donate Now</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
