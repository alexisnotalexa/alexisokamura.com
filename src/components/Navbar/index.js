import React from 'react';
import './styles.css';

import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

// COMPONENTS
import Logo from '../Logo';

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <div className="nav">
      <Link to="about" smooth={true} duration={500}>About</Link>
      <Link to="projects" smooth={true} duration={500}>Projects</Link>
      <a>Resume</a>
      <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;