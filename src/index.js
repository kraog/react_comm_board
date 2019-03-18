import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {addCell} from './actions';
import ObjectButtonsArasaac from './objectButtonsArasaac.json';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

const state = configureStore();
  
state.dispatch(addCell(ObjectButtonsArasaac));
state.subscribe(() => {
});
ReactDOM.render(<Provider store={state}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
 