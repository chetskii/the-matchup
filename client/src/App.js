import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import httpClient from './httpClient'
import './App.css';
import Home from './views/Home'
import SignUp from './views/SignUp'
import LogIn from './views/LogIn'
import LogOut from './views/LogOut'

class App extends Component {

  state = {
    currentUser: httpClient.getCurrentUser()
  }

  onAuthSuccess() {
    this.setState({ currentUser: httpClient.getCurrentUser() })
  }

  onLogOutSuccess() {
    this.setState({ currentUser: null })
  }

  render() {
    return (
      <div className="App">
        <h1>Upcoming Matches will go here</h1>
      </div>
    );
  }
}

export default App;
