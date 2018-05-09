import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Navbar from './components/Navbar';
import Intro from './sections/Intro';
import About from './sections/About';
import Skills from './sections/Skills';
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
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
