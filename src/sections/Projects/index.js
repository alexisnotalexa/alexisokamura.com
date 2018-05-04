import React from 'react';
import './Projects.css';

import Row from '../../components/Row';

import ReactKanban from '../../assets/react-kanban.jpg';

const Projects = () => {
  return (
    <div className="projects align-center">
      <div className="project-container">
        <div className="img">
          <img src={ReactKanban} />
        </div>
        <div>
          <div className="project-container__stack">
            <span>#React</span>
            <span>#React</span>
            <span>#React</span>
            <span>#React</span>
            <span>#React</span>
            <span>#React</span>
          </div>
          <div className="project-container__info">
            <h1>React Kanban</h1>
            <span>Pinterest PBR&B scenester occupy. Mixtape live-edge listicle semiotics, crucifix DIY chartreuse messenger bag. Poutine viral etsy tumeric artisan schlitz roof party gastropub pickled put a bird on it jean shorts succulents kickstarter. Semiotics snackwave aesthetic helvetica readymade wayfarers polaroid pinterest mlkshk tumblr hammock blog venmo man bun live-edge.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;