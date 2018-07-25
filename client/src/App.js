import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import httpClient from './httpClient'
import './App.css';
import Home from './views/Home'
import SignUp from './views/SignUp'
import LogIn from './views/LogIn'
import LogOut from './views/LogOut'
import NavBar from './NavBar'
import Match from './views/Match'
import CreateMatch from './views/CreateMatch'

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
      <div className="App container">
        <NavBar currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/signup' render={(routeProps) => {
            return <SignUp {...routeProps} onSignUpSuccess={this.onAuthSuccess.bind(this)}/>
          }} />
          <Route path='/login' render={(routeProps) => {
            return <LogIn {...routeProps} onLogInSuccess={this.onAuthSuccess.bind(this)} />
          }} />
          <Route path='/logout' render={(routeProps) => {
            return <LogOut {...routeProps} onLogOutSuccess={this.onLogOutSuccess.bind(this)} />
          }} />
          <Route exact path='/' component={Home} />
          <Route path='/matches/new' component={CreateMatch} />
          <Route exact path='/matches/:id' component={Match} />
        </Switch>
      </div>
    );
  }
}

export default App;
