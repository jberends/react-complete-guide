import React, { Component } from 'react';

class Person extends Component {
  render () {
    return <p>I'm {this.props.name} and I am {Math.floor(Math.random() * 50)} year old!</p>
  }
}

export default Person;