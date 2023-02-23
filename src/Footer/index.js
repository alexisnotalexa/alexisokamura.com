import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    const renderSocialLinks = () => 
        [faLinkedinIn, faGithubAlt, faEnvelope].map((icon) => <FontAwesomeIcon className='footer__icon' icon={icon} />);

    return (
        <footer>
            <p>{year} &copy; Alexis Okamura</p>
            <div>
                {renderSocialLinks()}
            </div>
        </footer>
    )
};

export default Footer;