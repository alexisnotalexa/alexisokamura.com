import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__container">
        <h1>
          Hello! I’m <strong>Alexis Okamura</strong>, a full stack developer passionate
          about design and building delightful user experiences.
        </h1>
      </div>
      <span>view work</span>
      <div className="vertical-line" />
    </div>
  );
}

export default Intro;