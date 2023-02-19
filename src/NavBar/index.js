import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <Link className='navbar__logo' to={'/'}>ao</Link>
            <div className='navbar__links'>
                <Link to={'/about'}>About</Link>
                <Link to={'/'}>Resume</Link>
            </div>
        </nav>
    );
};

export default NavBar;