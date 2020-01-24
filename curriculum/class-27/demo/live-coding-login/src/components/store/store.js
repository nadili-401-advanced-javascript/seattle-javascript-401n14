// create an initial GLOBAL state
// create the reducer
// export a store

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducer';
import bookReducer from './bookReducer';

const reducer = combineReducers({ auth: authReducer, books: bookReducer });

export default createStore(reducer, applyMiddleware(thunk));
