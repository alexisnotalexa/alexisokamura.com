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

    const renderLink = (text, to) => (
        <Link to={to}>{text}</Link>
    );
    
    return (
        <nav className='navbar'>
            <Link className='navbar__logo' to={'/'}>ao</Link>
            <div />
            <div className='navbar__links'>
                {renderThemeIcon()}
                {renderLink('About', '/about')}
                {renderLink('Resume', '/')}
            </div>
        </nav>
    );
};

export default NavBar;