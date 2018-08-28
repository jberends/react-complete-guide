import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Jochem", age: 33},
      {name: "Pieter", age:2},
      {name: "Anneke", age:23}
    ]
  }

  switchNameHandler = (props) => {
    console.log('was clicked');
  }

  mouseLogHandler = (props) => {
    console.log('mouse!')
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler} onMouseOver={this.mouseLogHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} hobbies="Racing" />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
