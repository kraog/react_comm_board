import React from 'react';
import {connect} from "react-redux";
import './App.css';
import Board from './models/Board';
import SpeakerBox from './models/SpeakerBox';
import './style.css'
  
  
function App(props) {
  
    return (
      <div className="App">
      <SpeakerBox/>
      <Board id='idb' elems={props.elemsList}/>
      </div>
    );
  };


function mapStateToProps(state){
	return {
    elemsList: state.cellList,
	}
}




export default connect(mapStateToProps)(App);
