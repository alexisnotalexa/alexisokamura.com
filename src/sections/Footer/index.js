import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer align-center">
      <div className="footer-cont">
        <span>Copyright &copy; 2018 – Alexis Okamura</span>
        <div className="footer-links">
          <span>Linkedin</span>
          <span>Github</span>
          <span>Codepen</span>
          <span>Twitter</span>
          <span>Resume</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;