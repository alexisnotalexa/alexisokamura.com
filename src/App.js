import React, { Component } from 'react';
import './App.css';

import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

// COMPONENTS
import Intro from './sections/Intro';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
      </div>
    );
  }
}

export default App;
