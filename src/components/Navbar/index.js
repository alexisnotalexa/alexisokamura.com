import React from 'react';
import './styles.css';

import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#section1">Work</a>
      <a href="#section2">About</a>
      <a href="#">Contact</a>
      <Link activeClass="active" to="test1" spy={true} smooth={true} duration={500}>
          Test 1
      </Link>
      <Link activeClass="active" to="test2" spy={true} smooth={true} duration={500}>
          Test 2
      </Link>
    </div>
  );
}

export default Navbar;