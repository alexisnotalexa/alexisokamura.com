import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact align-center">
      <div className="contact-container max-width">
        <div className="contact__about">
          <h4>About</h4>
          <p>If you’re going to have any takeaways after looking through my site, I'm Alexis, not <u>Alexa</u>.  I’m a full stack developer living in Honolulu, Hawaii.  More than anything I love being creative and get excited about being able to create products that will visually stun people.</p>
          <p>When I’m not hacking away at my computer I’m jumping on my next flight to see what else this world has to offer!</p>
          <p>I’m currently looking for full-time opportunities on the West Coast.</p>
          <a href="mailto:alexiskokamura@gmail.com"><button>Contact Me</button></a><a href="" target="_blank"><button>View Resume</button></a>
        </div>
        <div className="contact__info">
          <h4>Contact</h4>
          <a href="mailto:alexiskokamura@gmail.com" target="_blank" title="Email">
            <p>alexiskokamura@gmail.com</p>
          </a>
          <a href="https://twitter.com/alexisnotalexa" target="_blank" title="Twitter">
            <p>@alexisnotalexa</p>
          </a>
          <h4>Social</h4>
          <a href="https://codepen.io/alexisnotalexa" target="_blank" title="CodePen">
            <p>Codepen</p>
          </a>
          <a href="https://github.com/alexisnotalexa" target="_blank" title="GitHub">
            <p>Github</p>
          </a>
          <a href="https://www.linkedin.com/in/alexiskokamura" target="_blank" title="Linkedin">
            <p>Linkedin</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;