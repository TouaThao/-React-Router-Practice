import React, { Component } from 'react';

import './App.css';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
//componet

import About from '../Pages/About';
import Home from '../Pages/Home'
class App extends Component {
  render() {
    console.log(this.state);
    return (
      <Router>
        
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <nav>
          <ul>
            <li><NavLink exact activeClassName="selected" to="/about"> About </NavLink> </li>
            <li><NavLink exact activeClassName="selected" to="/Home"> Home </NavLink> </li>
          </ul>
        </nav>
        <br />
        <Route path="/Home" component={Home} />
        <Route path="/about" component={About} />
      </div>
      </Router>
    );
  }
}

export default App;
