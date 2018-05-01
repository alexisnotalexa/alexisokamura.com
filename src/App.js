import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Navbar from './components/Navbar';
import Intro from './sections/Intro';
import Projects from './sections/Projects';
import About from './sections/About';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
        <Projects />
        <About />
      </div>
    );
  }
}

export default App;
