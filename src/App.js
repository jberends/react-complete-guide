import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Jochem", age: 33},
      {name: "Piet", age:2},
      {name: "Anneke", age:23}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    this.setState({persons: [
      {name: "Jochem", age: 33},
      {name: newName, age:2},
      {name: "Anneke", age:23}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: "Jochem", age: 33},
      {name: event.target.value, age:2},
      {name: "Anneke", age:23}
    ]})
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

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={(event) => this.switchNameHandler('Pietertje!!!')} 
          onMouseOver={this.mouseLogHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} hobbies="Racing" 
          click={this.switchNameHandler.bind(this, "Pieter")}
          changed={this.nameChangedHandler}
          />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
