import React from 'react';
import './styles.css';

import { Reveal } from 'react-reveal';

const Project = ({ title, description, img, link, color, stack }) => {
  let techStack = stack.map(tech => {
    return (<span>#{tech}</span>)
  });

  return (
    <Reveal duration={2000} effect="fade-in">
      <div className="project-container">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="img-container" style={{background: color}}>
            <img src={img} alt={title} />
          </div>
        </a>
        <div className="project-container__stack">
          {techStack}
        </div>
        <div className="project-container__info">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <h1>{title}</h1>
          </a>
          <span>{description}</span>
        </div>
      </div>
    </Reveal>
  );
}

export default Project;