import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 },
      ]
  });

  const [ otherState, setOtherState ] = useState(
    'Some other state'
  )

  // It is better to use multiple useState functions in order to manipulate our states properly
    console.log(otherState, setOtherState);

  const switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DO NOT DO THIS: this.state.persons.name = 'Maximilian';
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ]
    })
  };

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 },
      ]
    })
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit', 
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (

    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button 
        onClick={() => switchNameHandler('Maximilian!!')}
        style={style}
      >
        Switch Name
      </button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} 
        click={switchNameHandler}/>
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age} 
        click={switchNameHandler.bind(this, 'Max!')}
        changed={nameChangedHandler}>
          My hobbies: Racing</Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} 
        click={switchNameHandler}/>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
}

export default app;