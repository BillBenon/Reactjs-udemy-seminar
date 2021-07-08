import React, { Component } from 'react';
import './App.css';

import UserInput from './userInput/userInput';
import UserOutput from './userOutput/userOutput';

class App extends Component {

  state = {
    username: 'greatbill'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div>
        <UserInput
        changed={this.usernameChangedHandler}
        currentName={this.state.username} />
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="Bill"/>
      </div>
    );
  }
}

export default App;
