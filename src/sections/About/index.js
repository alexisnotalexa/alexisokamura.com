import React from 'react';
import './About.css';

// ASSETS
import me from '../../assets/alexis-okamura.jpg';
import resume from '../../assets/Alexis-Okamura-Resume.pdf';

// COMPONENTS
import Skills from '../Skills';

const About = () => {
  return (
    <div className="about align-center">
      <div className="about-container max-width">
        <div className="profile-img">
          <img src={me} alt="Alexis Okamura" />
        </div>
        <div className="about-info">
          <strong><span>Nice to meet you! – <span role="img" aria-label="wave">👋</span></span></strong>
          <p>Since I could hold a pencil I absolutely loved art.  As I grew older my passion for art translated into programming.  I use my eye for design and my obsessive attention to detail to create pixel-perfect interfaces.  More than anything I love being creative and get excited about being able to create products that will visually stun people.</p>
          <p>When I’m not hacking away at my computer I’m jumping on my next flight to see what else this world has to offer!</p>
          <p>I’m currently looking for full-time opportunities on the West Coast!  Feel free to <u><a href="mailto:alexiskokamura@gmail.com">email me</a></u> or take a look at my <u><a href={resume} target="_blank">resume</a></u>.</p>
        </div>
      </div>
      <hr />
      <Skills />
      <hr />
    </div>
  );
}

export default About;