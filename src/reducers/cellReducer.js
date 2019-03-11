import initialState from './initialState';


export default function cellReducer(state = initialState, action) {
    switch(action.type) {
        
        /* Add cells to the state array */
     
		case "ADD_CELL": {
			state = action.payload;
			return state;
		}

		default: return state;
	}
}
