import initialState from './initialState';


export default function cellReducer(state = initialState, action) {
    switch(action.type) {
     
		case "ADD_CELL": {
			let cellList = [];
			action.cellList.map(u => {
				cellList.push(u);
			});
			let newstate = {
				phrase:state.phrase,
				cellList:cellList
			}
			return newstate;
		}

		case "ADD_PHRASE": {
			let newstate = {
				phrase:(state.phrase + " " + action.phrase),
				cellList:state.cellList
			}
			return newstate;
		}

		default: return state;
	}
}
