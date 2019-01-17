import React, { Component } from 'react';
//Represents a single cell in a Board
class Cell extends Component {
	
	render(){
		return(
			React.createElement('div', {className: this.props.classtype},
				<img className= 'cell_image' src={this.props.src}/>));
	};
	
}
export default Cell;