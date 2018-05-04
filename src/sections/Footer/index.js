import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer align-center">
      <div className="footer__container">
        <span>Copyright &copy; 2018 – Alexis Okamura</span>
        <div className="footer__links">
          <a href="https://codepen.io/alexisnotalexa" target="_blank" title="CodePen">Codepen</a>
          <a href="https://github.com/alexisnotalexa" target="_blank" title="GitHub">Github</a>
          <a href="https://www.linkedin.com/in/alexiskokamura" target="_blank" title="Linkedin">Linkedin</a>
          <a href="https://twitter.com/alexisnotalexa" target="_blank" title="Twitter">Twitter</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;