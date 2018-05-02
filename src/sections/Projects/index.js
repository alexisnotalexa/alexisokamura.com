import React from 'react';
import './Projects.css';

import Row from '../../components/Row';

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-container">
        <div className="project-img">
          <img src="https://www.alexisokamura.com/assets/react-kanban.jpg" />
        </div>
        <div>
          <div className="tech-stack">
            <span>#React</span>
            <span>#React</span>
            <span>#React</span>
            <span>#React</span>
            <span>#React</span>
            <span>#React</span>
          </div>
          <div className="project-info">
          <h1>React Kanban</h1>
            <span>Pinterest PBR&B scenester occupy. Mixtape live-edge listicle semiotics, crucifix DIY chartreuse messenger bag. Poutine viral etsy tumeric artisan schlitz roof party gastropub pickled put a bird on it jean shorts succulents kickstarter. Semiotics snackwave aesthetic helvetica readymade wayfarers polaroid pinterest mlkshk tumblr hammock blog venmo man bun live-edge.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;