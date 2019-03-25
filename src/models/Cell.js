import React from 'react';

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


export default Cell;