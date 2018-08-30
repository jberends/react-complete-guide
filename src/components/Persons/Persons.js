import React, { PureComponent } from 'react';

import Person from './Person/Person'

class Persons extends PureComponent {
  constructor(props) {
    super(props)
    console.log('[Persons.js] Inside constructor', props);
  }
  
  // componentWillMount() {
  //   console.log('[Persons.js] Inside CWM');
  // }

  // componentDidMount() {
  //   console.log('[Persons.js] Inside CDM');
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log('[UPDATE Persons.js] Inside componentWillReceiveProps');
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE Persons.js] ShouldComponentUpdate', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons;
  //   // return true;
  // }

  // componentWillUpdate() {
  //   console.log('[UPDATE Persons.js] Inside componentWillUpdate');
  // }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate');
  }

  
  render() {
    console.log('[Persons.js] Inside Persons Render()');
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)} />
    })
  };
}

export default Persons;