// Keypad.js

import React, { Component } from 'react';

class Keypad extends Component {
  handleChange = () => {
    console.log('Entering password...');
  };

  render() {
    return (
      <input
        type="password"
        onChange={this.handleChange}
      />
    );
  }
}

export default Keypad;
