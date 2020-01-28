import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    search: '',
    fullParty: false,
    party: [],
    results: [],
};

export const reducer = (state = initialState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case 'RESULTS':
            newState.results = action.data;
            newState.count = action.data.length;
            break;
        case 'SEARCH':
            newState.search = action.data;
            break;
        case 'PARTY':
            newState.party = action.data;
            newState.fullParty = action.data.length === 6;
            break;
        default:
            break;
    }
    return newState;
};

export default createStore(reducer, applyMiddleware(thunk));
