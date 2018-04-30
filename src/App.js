import React, { Component } from 'react';
import './App.css';

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
