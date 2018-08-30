import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}><Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)} /></ErrorBoundary>

          }
          )}
        </div>
      );
      btnClass = classes.Red
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (

      <div className={classes.App}>
        <h1>Hi, I'm a react app</h1>
        <p className={assignedClasses}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonHandler}
          onMouseOver={this.mouseLogHandler}>Show or Hide Persons</button>
        {persons}
      </div>

    );
  }
}

export default App;
