import React, { Component } from 'react';
import {connect} from "react-redux";
import './App.css';
import Board from './models/Board';
import SpeakerBox from './models/SpeakerBox';
import './style.css'
import { clearText,addText } from './actions';
import saySomething from './utils/speacher';
  
  
class App extends Component {
  
  render = () => {
    return (
      <div className="App">
      <SpeakerBox text={this.props.text} onClicker={saySomething} onClear={this.props.clear}/>
      <Board id='idb' elems={this.props.elemsList} onClickCell={this.props.setText}/>
      </div>
    );
  }
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
      saySomething(text);
      dispatch(addText(text))
    }
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
