import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './models/Board';
import ButtonObject from './objectButtons.json';
import './style.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Board id='idb' elems={ButtonObject}/>
      </div>
    );
  }
}

export default App;
