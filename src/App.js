import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Intro from './sections/Intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
      </div>
    );
  }
}

export default App;
