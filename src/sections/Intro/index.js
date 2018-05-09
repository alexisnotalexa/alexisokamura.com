import React from 'react';
import './Intro.css';

import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Intro = () => {
  return (
    <div className="intro align-center">
      <div className="intro__container">
        <h1>
          Hello! I’m <a class="h1--highlight">Alexis Okamura</a>, a full
          stack developer passionate about design and building delightful
          user experiences.
        </h1>
      </div>
      <Link to="projects" smooth={true} duration={500}>get to know me</Link>
      <div className="vertical-line" />
    </div>
  );
}

export default Intro;