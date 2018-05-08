import React from 'react';
import './Projects.css';

import Row from '../../components/Row';
import Project from '../../components/Project';

import ReactKanban from '../../assets/react-kanban.jpg';

const Projects = () => {
  return (
    <div className="projects align-center">
      <Project
        title={'Test'}
        description={'fjldksjfdslkfjalfkjs'}
        img={ReactKanban}
        link="https://codepen.io/"
        color={'midnightblue'}
        stack={['react', 'react', 'react']}
      />
    </div>
  );
}

export default Projects;