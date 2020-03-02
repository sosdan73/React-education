import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    // Can initiate state HERE with this.state
  }

  state = {
      persons: [
        { id: '1', name: 'Max', age: 28 },
        { id: '2', name: 'Manu', age: 29 },
        { id: '3', name: 'Stephanie', age: 26 },
      ],
      otherState: 'some other state',
      showPersons: false,
      showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);    
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
    
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        persons={this.state.persons} />
    }

    

    return (
        <div className={classes.App}>
          <button onClick={() => {
            this.setState({ showCockpit: false }) }}>
            Remove Cockpit
          </button>
          {this.state.showCockpit ?
            <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler} />
            : null
          }
          {persons}  
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;