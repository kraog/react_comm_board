import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './models/Board';
import SpeechSynthesizer from './speechSynthesizer'
import ButtonObject from './objectButtons.json';
import './style.css'


let phrase="";
const rootBoard = <Board id='idb' elems={ButtonObject}/>;
const synthesizer = SpeechSynthesizer(window);
const saySomething = (text) => {
	if (synthesizer.isAvailable()) {
    alert('SpeechSynthesizer speaking');
	  synthesizer.speak(text);
    } else {
      alert('SpeechSynthesizer not available');
    }
  };


  document.addEventListener('say-something', (event) => {
    event.preventDefault();
    saySomething(event.detail);
    phrase += event.detail;
  });
  
  document.addEventListener('dir_go', (event) => {
    event.preventDefault();
    //rootBoard.removeChild(rootBoard.firstChild);
    //BoardBuilder(document).build(rootBoard,event.detail, Session.getBackPathId(),ButtonObject);
    //Session.getIntoPathId(event.detail);
  });
class App extends Component {
  
render() {
    return (
      <div className="App">
       <input id="text" type="text" value={phrase} width="3000px"/>
      <button id="btnSpeak"><img width="20px" height="20px" src="https://d30y9cdsu7xlg0.cloudfront.net/png/51498-200.png" /></button><br/>
      {rootBoard}
      </div>
    );
  }
}

export default App;
