import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import NavBar from './components/NavBar';
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar />
        <h1>Hello from App</h1>
      </div>
      </Router>
    );
  }
}

export default App;
