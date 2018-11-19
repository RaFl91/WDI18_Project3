import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import User from './components/User'
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/users/:userId" component={User}/>
          <Route path='/' component={HomePage}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
