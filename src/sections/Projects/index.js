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
      <h3>Featured Projects</h3>
      <Project
        title="React Kanban"
        description="A task managing web application (essentially a kanban board) built for one of the required projects for Devleague.  In this project, I decided to explore and learn more about working with React.  I created two versions, one utilizing a full spectrum of technologies - React, Redux, Express, Node, Redis, PostgreSQL, Sequelize, and Axios.  While the other solely using React and Redux.  You can test out the React/Redux version by using 'test' as the username and password to login."
        img={ReactKanban}
        link="https://objective-wiles-a54e09.netlify.com/"
        color="lightskyblue"
        stack={['React', 'Redux', 'Express', 'Node', 'PostgreSQL', 'Sequelize', 'Redis', 'Axios', 'CSS']}
      />
      <Project
        title="Help Your City"
        description="Help Your City is a social rescue web application.  It was based on the idea that during natural disasters there may be people who are completely safe and have the tools or resources available to help other people in need.  Users can send out help requests that are sent to every other user in a certain radius and other users can respond to those help requests.  This project was created in a five-week time span with a team of four.  My role was the lead Front-End Developer, I was responsible for designing the user interface and application flow while managing and delegating tasks to the team."
        img={HelpYourCity}
        link="https://helpyour.city/"
        color="lightcoral"
        stack={['React', 'Redux', 'Express', 'Node', 'PostgreSQL', 'Sequelize', 'JWT', 'Twilio']}
      />
      <Project
        title="Free Code Camp Projects"
        description="In an effort to expose myself to learn more about the front-end I decided to commit to completing Free Code Camp’s Front End Development Certificate.  In order to receive this certificate, I completed a series of required projects and algorithm scripting questions.  In each project, I utilized jQuery and JavaScript to implement the logic of the project while focusing on learning more about different aspects of CSS like CSS-Grid, Flexbox, and CSS animations."
        img={WeatherApp}
        link="https://codepen.io/alexisnotalexa/"
        color="khaki"
        stack={['HTML', 'CSS', 'Javascript', 'jQuery', 'Bootstrap', 'AJAX']}
      />
      <Project
        title="Express Gallery"
        description="Express Gallery is a responsive full stack gallery web application.  Users are allowed to do a full series of CRUD operations.  They can create (add new photos), read (view photos), update (edit photos and their descriptions), and delete (delete their own photos).  For this project, a design spec was given and I implemented both the front-end styles and back-end logic. "
        img={ExpressGallery}
        link="https://github.com/alexisnotalexa/Express-Gallery"
        color="lightblue"
        stack={['Express', 'Node', 'PostgreSQL', 'Redis', 'Handlebars', 'HTML', 'SCSS', 'Gulp']}
      />
    </div>
  );
}

export default Projects;