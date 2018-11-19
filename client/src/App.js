import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import User from './components/User'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Orbitron|Raleway');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    background: # 32B2A4;
  }
`
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Global />
          <NavBar />
          <Switch>
            <Route exact path="/users/:userId" component={User} />
            <Route path='/' component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
