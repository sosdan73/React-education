import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
      persons: [
        { id: '1', name: 'Max', age: 28 },
        { id: '2', name: 'Manu', age: 29 },
        { id: '3', name: 'Stephanie', age: 26 },
      ],
      otherState: 'some other state',
      showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DO NOT DO THIS: this.state.persons.name = 'Maximilian';
    this.setState({
      persons: [
        { id: '1', name: newName, age: 28 },
        { id: '2', name: 'Manu', age: 29 },
        { id: '3', name: 'Stephanie', age: 27 },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 },
      ]
    })
  }

  render() {
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
          onClick={() => this.switchNameHandler('Maximilian!!')}
          style={style}
        >
          Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} 
          click={this.switchNameHandler}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}>
            My hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
          click={this.switchNameHandler}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;