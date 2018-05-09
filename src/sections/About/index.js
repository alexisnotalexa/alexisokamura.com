import React from 'react';
import './About.css';

import Skills from '../Skills';

import me from '../../assets/alexis-okamura.jpg';

const About = () => {
  return (
    <div className="about align-center">
      <div className="about-container max-width">
        <div className="profile-img">
          <img src={me} alt="Alexis Okamura" />
        </div>
        <div className="about-info">
          <span>Nice to meet you!</span>
          <p>Lorem ipsum dolor amet vape aesthetic DIY hashtag shaman flexitarian. Poke live-edge paleo copper mug portland, vape VHS brunch butcher ethical. Photo booth whatever celiac listicle paleo shabby chic. Fingerstache forage mixtape la croix artisan humblebrag. Synth fingerstache unicorn pour-over you probably haven't heard of them. Hot chicken small batch organic helvetica franzen, lomo godard 8-bit locavore disrupt truffaut trust fund affogato pok pok.</p>
          <p>Lorem ipsum dolor amet vape aesthetic DIY hashtag shaman flexitarian. Poke live-edge paleo copper mug portland, vape VHS brunch butcher ethical. Photo booth whatever celiac listicle paleo shabby chic. Fingerstache forage mixtape la croix artisan humblebrag. Synth fingerstache unicorn pour-over you probably haven't heard of them. Hot chicken small batch organic helvetica franzen, lomo godard 8-bit locavore disrupt truffaut trust fund affogato pok pok.</p>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default About;