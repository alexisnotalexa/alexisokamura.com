import React from 'react';
import './Contact.css';

import { Link } from 'react-scroll';

const Contact = () => {
  return (
    <div className="contact align-center">
      <div className="contact-container max-width">
        <div className="contact__about">
          <h4>Alexis Okamura</h4>
          <p>Alexis, not <u>Alexa</u>. Traveler. Food connoisseur. Full Stack Developer based in Honolulu. I like to make things pretty.</p>
          <h4>Menu</h4>
          <p><Link to="about" smooth={true} duration={500}>About</Link></p>
          <p><Link to="skills" smooth={true} duration={500}>Skills</Link></p>
          <p><Link to="projects" smooth={true} duration={500}>Projects</Link></p>
        </div>
        <div className="contact__info">
          <h4>Don't be shy</h4>
          <a href="mailto:alexiskokamura@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
            <p>alexiskokamura@gmail.com</p>
          </a>
          <a href="https://twitter.com/alexisnotalexa" target="_blank" rel="noopener noreferrer" title="Twitter">
            <p>@alexisnotalexa</p>
          </a>
          <h4>Social</h4>
          <a href="https://codepen.io/alexisnotalexa" target="_blank" rel="noopener noreferrer" title="CodePen">
            <p><span className="slash">//</span>Codepen</p>
          </a>
          <a href="https://github.com/alexisnotalexa" target="_blank" rel="noopener noreferrer" title="GitHub">
            <p><span className="slash">//</span>Github</p>
          </a>
          <a href="https://www.linkedin.com/in/alexiskokamura" target="_blank" rel="noopener noreferrer" title="Linkedin">
            <p><span className="slash">//</span>Linkedin</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;