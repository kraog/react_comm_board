import initialState from './initialState';


export default function cellReducer(state = initialState, action) {
    switch(action.type) {
        
        /* Add cells to the state array */
     
		case "ADD_CELL": {
			let cellList = [];
			for(let cellbuffer in action.cellList){
				cellList.push(cellbuffer);
			}
			let newstate = {
				phrase:state.phrase,
				cellList:cellList
			}
			return newstate;
		}

		case "ADD_PHRASE": {
			let newstate = {
				phrase:(state.phrase + " " + action.phrase),
				cellList:state.cellsList
			}
			return newstate;
		}

		default: return state;
	}
}
