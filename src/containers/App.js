import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'adas', name: "Jochem", age: 33 },
      { id: '123s', name: "Piet", age: 2 },
      { id: 'hgfh', name: "Anneke", age: 23 }
    ],
    otherState: 'some other value',
    showPersons: false
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
    this.setState({ showPersons: show })
  }

  mouseLogHandler = (props) => {
    console.log('mouse!')
  }

  render() {
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

      <div className={classes.App}>
        <Cockpit 
          showPersonms={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
          logger={this.mouseLogHandler}
          />        
        {persons}
      </div>

    );
  }
}

export default App;
