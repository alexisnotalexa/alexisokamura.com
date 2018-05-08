import React from 'react';
import './Projects.css';

import Project from '../../components/Project';

import ExpressGallery from '../../assets/express-gallery.jpg';
import HelpYourCity from '../../assets/help-your-city.jpg';
import ReactKanban from '../../assets/react-kanban.jpg';
import WeatherApp from '../../assets/weather-app.jpg';


const Projects = () => {
  return (
    <div className="projects align-center">
      <Project
        title="React Kanban"
        description=""
        img={ReactKanban}
        link="https://objective-wiles-a54e09.netlify.com/"
        color="lightskyblue"
        stack={['React', 'Redux', 'Express', 'Node', 'PostgreSQL', 'Sequelize', 'Redis', 'CSS']}
      />
      <Project
        title="Help Your City"
        description=""
        img={HelpYourCity}
        link="https://objective-wiles-a54e09.netlify.com/"
        color="lightcoral"
        stack={['React', 'Redux', 'Express', 'Node', 'PostgreSQL', 'Sequelize', 'JWT', 'Twilio']}
      />
      <Project
        title="Free Code Camp Projects"
        description=""
        img={WeatherApp}
        link="https://objective-wiles-a54e09.netlify.com/"
        color="khaki"
        stack={['HTML', 'CSS', 'Javascript', 'jQuery', 'Bootstrap', 'AJAX']}
      />
      <Project
        title="Express Gallery"
        description=""
        img={ExpressGallery}
        link="https://objective-wiles-a54e09.netlify.com/"
        color="lightblue"
        stack={['Express', 'Node', 'PostgreSQL', 'Redis', 'Handlebars', 'HTML', 'SCSS', 'Gulp']}
      />
    </div>
  );
}

export default Projects;