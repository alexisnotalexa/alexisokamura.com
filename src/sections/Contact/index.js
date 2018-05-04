import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact align-center">
      <div className="contact-container">
        <div className="contact__about">
          <h4>About</h4>
          <p>If you’re going to have any takeaways after looking through my site, I am Alexis, not <u>Alexa.</u>  I’m a full stack developer living in Honolulu, Hawaii.  More than anything I love being creative and get excited about being able to create products that will visually stun people.</p>
          <p>When I’m not hacking away at my computer I’m jumping on my next flight to see what else this world has to offer!</p>
          <p><strong>I’m currently looking for full-time opportunities on the West Coast.</strong></p>
        </div>
        <div className="contact__info">
          <h4>Contact</h4>
          <p>alexiskokamura@gmail.com</p>
          <p>@alexisnotalexa</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;