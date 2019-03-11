import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {addCell} from './actions';
import ButtonObject from './objectButtons.json';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const state = configureStore();

state.dispatch(addCell(ButtonObject));
state.subscribe(() => {
    // vemos el nuevo store
    alert(state.getState().cellJSONlist);
});
ReactDOM.render(<App elemsList={state.getState().cellJSONlist} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
