import React from 'react';
import './Projects.css';

// COMPONENTS
import Project from '../../components/Project';

// ASSETS
import ExpressGallery from '../../assets/express-gallery.jpg';
import HelpYourCity from '../../assets/help-your-city.jpg';
import ReactKanban from '../../assets/react-kanban.jpg';
import WeatherApp from '../../assets/weather-app.jpg';

const Projects = () => {
  return (
    <div className="projects align-center">
      <Project
        title="React Kanban"
        description="A task managing web application (essentially a kanban board) built for one of the required projects for Devleague.  In this project, I decided to explore and learn more about working with React.  I created two versions, one utilizing a full spectrum of technologies - React, Redux, Express, Node, Redis, PostgreSQL, Sequelize, and Axios.  While the other solely using React and Redux."
        img={ReactKanban}
        link="https://objective-wiles-a54e09.netlify.com/"
        color="lightskyblue"
        stack={['React', 'Redux', 'Express', 'Node', 'PostgreSQL', 'Sequelize', 'Redis', 'Axios', 'CSS']}
      />
      <Project
        title="Help Your City"
        description="In 2017 a series of natural disasters hit the US and during those times the chances of someone getting the help they needed from emergency services were very slim.  This is where the idea of Help Your City sprung to life.  Help Your City is a social rescue web application.  It was based on the idea that during natural disasters there may be people who are completely safe and have the tools or resources to help other people in need.  Users can send out help requests that would send notifications to every other user in a certain radius and people can respond to those help requests."
        img={HelpYourCity}
        link="https://helpyour.city/"
        color="lightcoral"
        stack={['React', 'Redux', 'Express', 'Node', 'PostgreSQL', 'Sequelize', 'JWT', 'Twilio']}
      />
      <Project
        title="CodePen Projects"
        description=""
        img={WeatherApp}
        link="https://codepen.io/alexisnotalexa/"
        color="khaki"
        stack={['HTML', 'CSS', 'Javascript', 'jQuery', 'Bootstrap', 'AJAX']}
      />
      <Project
        title="Express Gallery"
        description=""
        img={ExpressGallery}
        link="https://github.com/alexisnotalexa/Express-Gallery"
        color="lightblue"
        stack={['Express', 'Node', 'PostgreSQL', 'Redis', 'Handlebars', 'HTML', 'SCSS', 'Gulp']}
      />
    </div>
  );
}

export default Projects;