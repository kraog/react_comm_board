import React from 'react';
import {connect} from "react-redux";
import {addText } from '../actions';
import say from '../utils/speacher';

//Represents a single cell in a Board
function Cell(props) {
	return(
		React.createElement('div', {
			className: props.type, 
			value: props.value,
			onClick:(() =>props.onClickCell(props.value))},
			<div>
				<img className= 'cell_image' alt={props.value} src={props.src}/><br/>
				{props.value}
			</div>) 			
		);	
};



function mapDispatchToProps(dispatch){
	return {
	onClickCell:(text) =>{
      say(text);
      dispatch(addText(text))
    }
	}
}

export default connect(null,mapDispatchToProps)(Cell);