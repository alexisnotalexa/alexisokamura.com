import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>{year} &copy; Alexis Okamura</p>
            <hr />
            {/* <p>Linkedin</p> */}
            <FontAwesomeIcon icon={faLinkedinIn} />
            {/* <p>Twitter</p> */}
            <FontAwesomeIcon icon={faTwitter} />
        </footer>
    )
};

export default Footer;