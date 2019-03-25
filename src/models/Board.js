import React from 'react';
import Cell  from './Cell'
import {connect} from "react-redux";

// Represents a Board or a subBoard with its Cells
function Board(props) {
		return( 
			React.createElement('div', {id: props.id,className:'board'},
				props.elems.map(u => {
		            return (
		              <Cell {...u} />
		            );
          	})
				)
			)
};


function mapStateToProps(state){
	return {
    elems: state.cellList,
	}
}

export default connect(mapStateToProps)(Board);
