import React, { Component } from 'react';
import Radium from 'radium';
import './App.css';
import Person from './Person/Person'

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
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const show = (this.state.showPersons) ? false : true
    this.setState( { showPersons: show })
  }

  mouseLogHandler = (props) => {
    console.log('mouse!')
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer',
      border: '0px solid white',
      ':hover': {
        backgroundColor: 'lightgreen', 
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          }
          )}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon', 
        color: 'black'
      }
    }

    const classes = [];

    if (this.state.persons.length <=2 ) {
      classes.push('red')
    }
    if (this.state.persons.length <=1 ) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}
          onMouseOver={this.mouseLogHandler}>Show or Hide Persons</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
