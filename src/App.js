import React, { Component } from 'react';
//import logo from './logo.svg';
import Dashboard from './components/dashboard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>PetFul</h1>
        </header>
       <Dashboard/>
      </div>
    );
  }
}

export default App;
