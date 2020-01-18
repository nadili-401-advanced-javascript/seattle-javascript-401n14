// create an initial GLOBAL state
// create the reducer
// export a store

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    username: '',
    password: '',
    email: '',
    roleEntry: '',
    token: '',
    role: '',
};

const reducer = (state, action) => {
    let newState = { ...state };

    switch (action.type) {
        case 'UPDATE':
            newState[action.key] = action.data;
            break;
        default:
            break;
    }

    console.log('newState', newState);
    return newState;
};

export default createStore(reducer, initialState, applyMiddleware(thunk));
