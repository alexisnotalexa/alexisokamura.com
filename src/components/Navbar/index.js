import React from 'react';
import './styles.css';

import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="about" smooth={true} duration={500}>About</Link>
      <Link to="projects" smooth={true} duration={500}>Projects</Link>
      <a>Resume</a>
      <Link to="contact" smooth={true} duration={500}>Contact</Link>
    </div>
  );
}

export default Navbar;