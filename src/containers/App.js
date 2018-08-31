import React, { Component } from 'react';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import Wrapper from '../hoc/Wrapper';
import withClass from '../hoc/withClass';

import classes from './App.css'

export const AuthContext = React.createContext(false);

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props)
    this.state = {
      persons: [
        { id: 'adas', name: "Jochem", age: 33 },
        { id: '123s', name: "Piet", age: 2 },
        { id: 'hgfh', name: "Anneke", age: 23 }
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    }
  }

  componentDidMount() {
    console.log('[App.js] Inside CDM');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] ShouldComponentUpdate', nextProps, nextState);
  //   return true;
  // }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      '[UPDATE App.js] Found new props',
      nextProps,
      prevState);

      return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log(
      "[UPDATE App.js] Inside getSnapshotBeforeUpdate"
    );
  }

  deletePersonHandler = (personIndex) => {
    // const newPersons = this.state.persons.slice();
    const newPersons = [...this.state.persons]
    newPersons.splice(personIndex, 1);
    this.setState({ persons: newPersons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const thePerson = { ...this.state.persons[personIndex] };

    thePerson.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = thePerson;
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const show = (this.state.showPersons) ? false : true
    this.setState((prevState, props) => {
      return {
        showPersons: show,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  mouseLogHandler = (props) => {
    console.log('mouse!')
  }

  loginHandler = () => {
    this.setState({ authenticated: true })
  }

  render() {
    console.log('[App.js] Inside render()');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
    }

    return (

      <Wrapper>
        <button onClick={() => { this.setState({ showPersons: true }) }}>Show Persons</button>
        <Cockpit
          showPersonms={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
          logger={this.mouseLogHandler}
          login={this.loginHandler} />

        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>

      </Wrapper>

    );
  }
}

export default withClass(App, classes.App);
