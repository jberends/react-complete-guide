import React, { Component } from 'react';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import Wrapper from '../hoc/Wrapper';
import withClass from '../hoc/withClass';

import classes from './App.css'

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
      toggleClicked: 0
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside CWM');
  }

  componentDidMount() {
    console.log('[App.js] Inside CDM');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE App.js] Inside componentWillReceiveProps');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] ShouldComponentUpdate', nextProps, nextState);
  //   return true;
  // }

  componentWillUpdate() {
    console.log('[UPDATE App.js] Inside componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
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
        toggleClicked: prevState.toggleClicked +1
      }
    });
  }

  mouseLogHandler = (props) => {
    console.log('mouse!')
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
        <button onClick={()=> {this.setState({showPersons:true})}}>Show Persons</button>
        <Cockpit
          showPersonms={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
          logger={this.mouseLogHandler}
        />
        {persons}
      </Wrapper>

    );
  }
}

export default withClass(App, classes.App);
