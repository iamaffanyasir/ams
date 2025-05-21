import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo-column">
            <a href="/" className="footer-logo">
              <span className="logo-icon">♯</span> AMS
            </a>
            
            <div className="footer-newsletter">
              <div className="newsletter-title">
                SIGN UP FOR OUR<br />
                MONTHLY NEWSLETTER
              </div>
              
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">WORK</h4>
              <ul className="footer-menu">
                <li><a href="/services">Services</a></li>
                <li><a href="/donation">Donation</a></li>
                <li><a href="/charity-events">Charity Events</a></li>
                <li><a href="/see-all">See all</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">COMPANY</h4>
              <ul className="footer-menu">
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/news">News</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">SOCIAL</h4>
              <ul className="footer-menu">
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p>2023 | AMS © All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
