import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from "./Person.css"
import withClass from '../../../hoc/withClass';
import Wrapper from '../../../hoc/Wrapper';

import { AuthContext } from '../../../containers/App';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
    this.inputElement = React.createRef();
  }

  componentDidMount() {
    console.log('CDM of Person');
    if (this.props.position === 0) {
      this.inputElement.current.focus()
    }
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log('[Person.js] Inside render()');

    return (
      <Wrapper>
        <AuthContext.Consumer>
          {auth => auth ? <p>I'm authenticated</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {Math.floor(Math.random() * this.props.age)} year old!</p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          position={this.props.position}
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
// export default Person;

