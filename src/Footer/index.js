import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>{year} &copy; Alexis Okamura</p>
            <hr />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faGithubAlt} />
            <FontAwesomeIcon icon={faEnvelope} />
        </footer>
    )
};

export default Footer;