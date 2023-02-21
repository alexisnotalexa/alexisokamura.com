import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';
import { useState } from 'react';

const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const renderThemeIcon = () => (
        <button className='navbar__theme-btn' onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? '🌚' : '🌞'}
        </button>
    )
    
    return (
        <nav className='navbar'>
            <Link className='navbar__logo' to={'/'}>ao</Link>
            <div className='navbar__mobile-menu'>
                {renderThemeIcon()}
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className='navbar__links'>
                {renderThemeIcon()}
                <Link to={'/about'}>About</Link>
                <Link to={'/'}>Resume</Link>
            </div>
        </nav>
    );
};

export default NavBar;