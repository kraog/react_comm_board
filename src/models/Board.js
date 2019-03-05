import React, { Component } from 'react';
import Cell  from './Cell'


const BACKSRC = 'https://cdn4.iconfinder.com/data/icons/folders-directories-1/32/file-document-directory-folio-folder-up-512.png';
// Represents a Board or a subBoard with its Cells
class Board extends Component {

	render(){
		return( 
			React.createElement('div', {id: 'board0',class:'board'},
				this.props.elems.map(u => {
		            return (
		              <Cell
		                id={u.id} 
		                id_parent={u.id_parent} 
		                src={u.src} 
		                type={u.type} 
		                value={u.value} 
		              />
		            );
          		})

			)
			)
	}
};

export default Board;
