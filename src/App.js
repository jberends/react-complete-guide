import React, { Component } from 'react';
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
    showPersons: true
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

  mouseLogHandler = (props) => {
    console.log('mouse!')
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
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
      )
    };
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
        <button
          style={style}
          // onClick={(event) => this.nameChangedHandler('Pietertje!!!')}
          onMouseOver={this.mouseLogHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
