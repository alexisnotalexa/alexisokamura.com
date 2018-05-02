import React, { Component } from 'react';
import './styles.css';

import { Reveal } from 'react-reveal';

class Row extends Component {
  render() {
    return (
      <Reveal duration={1000} effect="test">
        <div className="row">
          {this.props.children}
        </div>
      </Reveal>
    );
  }
}

export default Row;