const bookInitialState = {
    library: [],
    favorites: [],
};

const bookReducer = (state = bookInitialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'SAVE_LIBRARY':
            newState.library = action.data;
            break;
        default:
            break;
    }

    return newState;
};

export default bookReducer;
