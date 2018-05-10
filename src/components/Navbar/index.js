import React from 'react';
import './styles.css';

import { Link } from 'react-scroll';

// COMPONENTS
import Logo from '../Logo';

// ASSETS
import resume from '../../assets/Alexis-Okamura-Resume.pdf';

const Navbar = () => {
  return (
    <div className="navbar max-width">
      <Logo />
      <div className="nav">
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <a href={resume} alt="Alexis Okamura Resume">Résumé</a>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;