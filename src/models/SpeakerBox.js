import React, { Component } from 'react';


    
const clearText = (textContainer) =>{
    clearText.value = "";
}
//Represents a single speaker Box in a Board
class SpeakerBox extends Component {
    


	render(){
		return(
		
                <div>
                <input id="text" type="text" value={this.props.text} width="3000px"/>
                <button id="btnSpeak" onClick={() => this.props.onClicker(document.getElementById('text').value)}>
                <img width="20px" height="20px" src="https://d30y9cdsu7xlg0.cloudfront.net/png/51498-200.png" />
                </button>
                <button id="btnClear" onClick={() => this.props.onClear(document.getElementById('text'))}>
                <img width="20px" height="20px" src="https://cdn1.iconfinder.com/data/icons/pixel-perfect-at-16px-volume-1/16/5094-512.png" />
                </button><br/>
                </div>         
			);
				
				
	};
	
}


export default SpeakerBox;