import React, { Component } from 'react';
import withCounter from './WithCounter'  // Pastikan impor ini memiliki tanda titik koma

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props
    return (
      <button onClick={incrementCount}>
        Clicked {count} times
      </button>
    );
  }
}

export default withCounter(ClickCounter)
