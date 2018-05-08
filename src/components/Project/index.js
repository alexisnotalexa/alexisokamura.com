import React from 'react';
import './styles.css';

const Project = ({ title, description, img, link, color, stack }) => {
  let techStack = stack.map(tech => {
    return (<span>#{tech}</span>)
  });
  return (
    <div className="project-container">
      <a href={link} target="_blank">
        <div className="img-container" style={{background: color}}>
          <img src={img} />
        </div>
      </a>
      <div className="project-container__stack">
        {techStack}
      </div>
      <div className="project-container__info">
        <a href={link} target="_blank"><h1>{title}</h1></a>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default Project;