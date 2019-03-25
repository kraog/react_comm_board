import React from 'react';
import Cell  from './Cell'

// Represents a Board or a subBoard with its Cells
function Board(props) {
		return( 
			React.createElement('div', {id: 'board0',className:'board'},
				props.elems.map(u => {
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
};

export default Board;
