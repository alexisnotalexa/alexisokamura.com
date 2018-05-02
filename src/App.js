import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Navbar from './components/Navbar';
import Intro from './sections/Intro';
import Projects from './sections/Projects';
import About from './sections/About';
import Footer from './sections/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
