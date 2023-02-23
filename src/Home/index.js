import Footer from 'Footer';
import NavBar from 'NavBar';
import './Home.css';

const Home = () => {
    const renderGradientBlob = () => (
        <div className='home__gradient'>
            <div className='home__gradient__color' />
            <div className='home__gradient__color' />
            <div className='home__gradient__color' />
            <div className='home__gradient__color' />
            <div className='home__gradient__backdrop' />
        </div>
    );

    return (
        <div className='home'>
            <NavBar />
            <div className='home__content-container'>
                <div className='home__content'>
                    <h1>Hi, I'm Alexis, not <i>Alexa</i>.<br />I'm a Software Engineer based in Brooklyn, NY.</h1>
                    <span>-</span>
                    <h3>Blah blah blah</h3>
                    {renderGradientBlob()}
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Home;