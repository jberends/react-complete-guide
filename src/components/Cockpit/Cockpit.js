import React from 'react';

import classes from './Cockpit.css';

import Wrapper from '../../hoc/Wrapper';



const cockpit = (props) => {

  const assignedClasses = [];
  let btnClass = classes.Button;
  

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <Wrapper>
      <h1>Hi, I'm a react app</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}
        onMouseOver={props.logger}>Show or Hide Persons</button>
      <button
        onClick={props.login}>Login</button>

     </Wrapper>
  );
};

export default cockpit;