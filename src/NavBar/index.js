import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const renderThemeIcon = () => (
        <button className='navbar__theme-btn' onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? '🌚' : '🌞'}
        </button>
    );
    
    return (
        <nav className='navbar'>
            <Link className='navbar__logo' to={'/'}>ao</Link>
            <div className='navbar__links'>
                {renderThemeIcon()}
                <Link to={'/about'}>About</Link>
                <Link to={'/'}>Resume</Link>
            </div>
        </nav>
    );
};

export default NavBar;