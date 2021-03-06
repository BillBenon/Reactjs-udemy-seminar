import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Bill', age: 43},
      { name: 'Gilbert', age: 45},
      { name: 'Jill', age: 47}
    ],
    otherState: 'some other value'
  }


  switchNameHandler = (newName) => {
    // console.log('Was clicked.');
    // DON'T DO THIS: personsState.persons[0].name = 'Bill Benon';
    this.setState({
      persons: [
        { name: newName, age: 44},
        { name: 'Gilbert', age: 46},
        { name: 'Jill', age: 48}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Bill', age: 43},
        { name: event.target.value, age: 45},
        { name: 'Jill', age: 47}
      ]
    })
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App!</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Bill Benon')}>Switch Name</button>
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Benon')}
            changed={this.nameChangedHandler}>My hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
        </div>
      </div>
    );
  }
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this works now?'));
}

export default App;
