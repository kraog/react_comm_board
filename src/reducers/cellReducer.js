import initialState from './initialState';


export default function cellReducer(state = initialState.cells, action) {
    switch(action.type) {
        
        /* Add cells to the state array */
     
		case "ADD_CELL": {
			return {
				...state,
				cellList: [...state.cellList, action.payload]
			}
		}

		default: return state;
	}
}
