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

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    });    
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [ ...this.state.persons ];
    persons[personIndex] = person;
    this.setState( { persons: persons } );
  }

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit', 
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            })
          }
        </div> 
      );
    }

    return (

      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          onClick={this.togglePersonsHandler}
          style={style} >
            Toggle Persons
        </button>
        {persons}
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;