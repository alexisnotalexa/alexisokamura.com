import React from 'react';
import './styles.css';

const Project = ({ title, description, img, color, stack }) => {
  let techStack = stack.map(tech => {
    return (<span>#{tech}</span>)
  });
  return (
    <div className="project-container">
      <div className="img" style={{background: color}}>
        <img src={img} />
      </div>
      <div className="project-container__stack">
        {techStack}
      </div>
      <div className="project-container__info">
        <h1>{title}</h1>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default Project;