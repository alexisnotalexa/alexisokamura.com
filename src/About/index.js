import Footer from 'Footer';
import NavBar from "NavBar";
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <NavBar />
            <div className='about__content'>
                <div className='about__temp' />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat maximus nisi a luctus. Nullam iaculis risus ullamcorper scelerisque pharetra. Integer porttitor congue libero, id cursus tortor. Vivamus varius ligula sed lobortis consequat. Curabitur a metus at dolor tempus molestie a nec risus. Aenean vel consequat urna. Duis et semper leo. Donec ante lorem, tincidunt nec augue in, venenatis blandit dolor. Praesent convallis purus sit amet quam tincidunt, pellentesque iaculis diam posuere.<br />
                <br />
                Duis euismod finibus augue, non finibus justo maximus vel. Integer a fermentum risus. Aliquam enim turpis, congue ac vehicula lobortis, congue eu sem. Phasellus lobortis sit amet nibh at ullamcorper. Mauris bibendum tortor eget convallis fermentum. Quisque et magna vehicula eros blandit dapibus a ac nisi. Etiam sit amet ante in nunc finibus consequat ac vel tellus.
                </p>
            </div>
            <Footer />
        </div>
    )
};

export default About;