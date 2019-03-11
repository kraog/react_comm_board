import React, { Component } from 'react';



//Represents a single cell in a Board
class Cell extends Component {
	

	render(){
		return(
			React.createElement('div', {
				className: this.props.type, 
				value: this.props.value,
				onClick:(this.props.type==="symbol_dir"?() => document.dispatchEvent(
	                new CustomEvent('dir_go', { 'detail': this.props.value })
	              ):() =>document.dispatchEvent(
	                new CustomEvent('say-something', { 'detail': this.props.value })
	              ))},
				<img className= 'cell_image' alt={this.props.value} src={this.props.src}/>) 			
			);
				
				
	};
	
}
export default Cell;