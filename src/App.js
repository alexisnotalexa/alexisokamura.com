import React, { Component } from 'react';

// COMPONENTS
import Navbar from './components/Navbar';
import Intro from './sections/Intro';
import About from './sections/About';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
import Contact from './sections/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
