import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-email">
        <span>Email</span>
        <span>hello@alexisokamura.com</span>
      </div>
      <div className="footer-links">
        <span>Linkedin</span>
        <span>Github</span>
        <span>Codepen</span>
        <span>Twitter</span>
        <span>Resume</span>
      </div>
    </div>
  );
}

export default Footer;