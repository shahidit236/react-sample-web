import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact">
        <h3>Contact Us</h3>
        <p>Email: shahid@gmail.com</p>
        <p>Phone: +91 957-336-3309</p>
        <p>Address: Whitefield, Banglaore, Karnataka, India</p>
      </div>
      <div className="social-links">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Google</a></li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
