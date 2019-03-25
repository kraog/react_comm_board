import React from 'react';
import {connect} from "react-redux";
import './App.css';
import Board from './models/Board';
import SpeakerBox from './models/SpeakerBox';
import './style.css'
import { clearText,addText } from './actions';
import say from './utils/speacher';
  
  
function App(props) {
  
    return (
      <div className="App">
      <SpeakerBox text={props.text} onClicker={say} onClear={props.clear}/>
      <Board id='idb' elems={props.elemsList} onClickCell={props.setText}/>
      </div>
    );
  };


function mapStateToProps(state){
	return {
    elemsList: state.cellList,
    text:state.phrase,
	}
}


function mapDispatchToProps(dispatch){
	return {
    clear:() =>dispatch(clearText()),
    setText:(text) =>{
      say(text);
      dispatch(addText(text))
    }
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
