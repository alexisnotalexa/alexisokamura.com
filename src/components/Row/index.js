import React, { Component } from 'react';
import './styles.css';

class Row extends Component {
  render() {
    return (
      <div className="row">
        {this.props.children}
      </div>
    );
  }
}

export default Row;