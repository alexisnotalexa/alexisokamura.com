import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills align-center">
      <h3>Skills</h3>
      <div className="skills-container max-width">
        <div className="col">
          <h5>Languages</h5>
          <span>JavaScript (ES6)</span>
          <span>CSS/SCSS</span>
          <span>HTML</span>
          <span>JSX</span>
          <span>Java</span>
          <span>SQL</span>
        </div>
        <div className="col">
          <h5>Frameworks</h5>
          <span>React/Redux</span>
          <span>React Native</span>
          <span>Angular.js</span>
          <span>Node</span>
          <span>Express</span>
          <span>Bootstrap</span>
          <span>Handlebars</span>
          <span>jQuery</span>
          <span>JSTL</span>
        </div>
        <div className="col">
          <h5>Tools</h5>
          <span>Git & Github</span>
          <span>Chrome DevTools</span>
          <span>Postman</span>
          <span>Gulp</span>
          <span>Sketch</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;