import React, { Component } from 'react';

import classes from "./Person.css"
import withClass from '../../../hoc/withClass';
import Wrapper from '../../../hoc/Wrapper';

class Person extends Component {

  // constructor(props) {
  //   super(props)
  //   console.log('[Person.js] Inside constructor', props);
  // }
  
  // componentWillMount() {
  //   console.log('[Person.js] Inside CWM');
  // }

  // componentDidMount() {
  //   console.log('[Person.js] Inside CDM');
  // }

  render() {
    console.log('[Person.js] Inside render()');

    return (
      <Wrapper>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {Math.floor(Math.random() * this.props.age)} year old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </Wrapper>
    );
  }
}

export default withClass(Person, classes.Person);
