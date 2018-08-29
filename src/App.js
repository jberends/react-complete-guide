import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Jochem", age: 33 },
      { name: "Piet", age: 2 },
      { name: "Anneke", age: 23 }
    ],
    otherState: 'some other value',
    showPersons: true
  }

  deletePersonHandler = (personIndex) => {
    // const newPersons = this.state.persons.slice();
    const newPersons = [...this.state.persons]
    newPersons.splice(personIndex, 1);
    this.setState({persons: newPersons});
  }

  nameChangedHandler = (newName) => {
    this.setState({
      persons: [
        { name: "Jochem", age: 33 },
        { name: newName, age: 2 },
        { name: "Anneke", age: 23 }
      ]
    })
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
              key={index} />
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
          onClick={(event) => this.nameChangedHandler('Pietertje!!!')}
          onMouseOver={this.mouseLogHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
