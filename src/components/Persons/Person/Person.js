import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from "./Person.css"
import withClass from '../../../hoc/withClass';
import Wrapper from '../../../hoc/Wrapper';

class Person extends Component {

  componentDidMount() {
    console.log('CDM of Person');
    this.inputElement.focus()
  }

  render() {
    console.log('[Person.js] Inside render()');

    return (
      <Wrapper>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {Math.floor(Math.random() * this.props.age)} year old!</p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => {this.inputElement = inp}}
          type="text"
          onChange={this.props.changed} 
          value={this.props.name} />
      </Wrapper>
    );
  }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
