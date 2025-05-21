import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking outside or on links
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && 
          !event.target.closest('.navbar-links') && 
          !event.target.closest('.mobile-menu-btn')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  // Close menu when window is resized beyond mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <span className="logo-icon">♯</span> AMS
          </a>
        </div>
        <div className="navbar-button">
          <a href="/donate" className="donate-btn">Donate Now</a>
        </div>
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu} 
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="/funding" onClick={() => setMobileMenuOpen(false)}>Funding</a>
          <a href="/events" onClick={() => setMobileMenuOpen(false)}>Events</a>
          <a href="/about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="/how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
          <a href="/news" onClick={() => setMobileMenuOpen(false)}>News</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
