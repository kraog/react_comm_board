import {createStore} from 'redux';  
import cellReducer from '../reducers/cellReducer';  

/*Create a function called configureStore */

export default function configureStore() {  
  return createStore(cellReducer);
}