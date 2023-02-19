import Footer from 'Footer';
import NavBar from 'NavBar';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <NavBar />
            <header>
                <h1>Hi, I'm Alexis, not <i>Alexa</i>.<br />I'm a Software Engineer based in Brooklyn, NY.</h1>
            </header>
            <Footer />
        </div>
    )
};

export default Home;