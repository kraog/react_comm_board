import React, { Component } from 'react';



//Represents a single cell in a Board
class Cell extends Component {
	

	render(){
		return(
			React.createElement('div', {
				className: this.props.type, 
				value: this.props.value,
				onClick:(() =>this.props.onClickCell(this.props.value))},
				<div>
					<img className= 'cell_image' alt={this.props.value} src={this.props.src}/><br/>
					{this.props.value}
				</div>) 			
			);
	};
	
}


export default Cell;