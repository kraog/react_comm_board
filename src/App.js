import React, { Component } from 'react';
import {connect} from "react-redux";
import './App.css';
import Board from './models/Board';
import SpeakerBox from './models/SpeakerBox';
import './style.css'
import { clearText } from './actions';


//const rootBoard = <Board id='idb' elems={ButtonObject}/>;




  
  document.addEventListener('dir_go', (event) => {
    event.preventDefault();
    //rootBoard.removeChild(rootBoard.firstChild);
    //BoardBuilder(document).build(rootBoard,event.detail, Session.getBackPathId(),ButtonObject);
    //Session.getIntoPathId(event.detail);
  });
  
  
class App extends Component {
  
  render = () => {
    return (
      <div className="App">
      <SpeakerBox text={this.props.text} onClicker={this.props.clicker} onClear={this.props.clear}/>
      <Board id='idb' elems={this.props.elemsList}/>
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
    clear:(text) =>dispatch(clearText(text.value))
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
