import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to={'/'}>ao</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Resume</Link>
        </nav>
    );
};

export default NavBar;