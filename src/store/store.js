import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from './middleware/thunk.js';

import storeReducer from './storeReducer.js';


let reducers = {
  store: storeReducer,
};

const store = () => createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));

export default store();