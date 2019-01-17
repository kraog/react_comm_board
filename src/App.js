import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './models/Board';

class App extends Component {
  render() {
  let elementors = Array.from([{id:'id1',
                    id_parent:'id_parent1',
                    src:'dfgdtfgh',
                    type:'',
                    value:'1'},{id:'id2',
                    id_parent:'id_parent2',
                    src:'dfgdtfgh',
                    type:'',
                    value:'2'}]);
    return (
      <div className="App">
      <Board id='idb' elems='elementors'/>
      </div>
    );
  }
}

export default App;
