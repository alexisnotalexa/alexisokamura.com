import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__container">
        <h1 className="intro__h1">
          Hello! I’m Alexis Okamura, a full stack developer passionate
          about design and building delightful user experiences.
        </h1>
        <span>Let's talk story 🤙 hello@alexisokamura.com</span>
        <div className="line" />
      </div>
    </div>
  );
}

export default Intro;