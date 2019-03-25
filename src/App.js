import React from 'react';
import './App.css';
import Board from './models/Board';
import SpeakerBox from './models/SpeakerBox';
import './style.css'
  
  
function App(props) {
  
    return (
      <div className="App">
      <SpeakerBox/>
      <Board id='idb'/>
      </div>
    );
  };

export default App;
