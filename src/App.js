import React, { Component } from 'react';
//import logo from './logo.svg';
import Dashboard from './components/dashboard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <h1 className="banner">PetFul</h1>
        
       <Dashboard/>
      </div>
    );
  }
}

export default App;
