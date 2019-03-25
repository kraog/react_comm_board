import React from 'react';
import {connect} from "react-redux";
import { clearText} from '../actions';
import say from '../utils/speacher';

    
//Represents a single speaker Box in a Board
function SpeakerBox(props)  {
    return(
            <div>
            <input id="text" className="textBox" value={props.text} width="3000px"/>
            <button id="btnSpeak" onClick={() => say(props.text)}>
            <img width="20px" height="20px" src="https://d30y9cdsu7xlg0.cloudfront.net/png/51498-200.png" />
            </button>
            <button id="btnClear" onClick={props.onClear}>
            <img width="20px" height="20px" src="https://cdn1.iconfinder.com/data/icons/pixel-perfect-at-16px-volume-1/16/5094-512.png" />
            </button><br/>
            </div>         
        );	
}


function mapStateToProps(state){
	return {
    elemsList: state.cellList,
    text:state.phrase,
	}
}

function mapDispatchToProps(dispatch){
	return {
    onClear:() =>dispatch(clearText())
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(SpeakerBox);