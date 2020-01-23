const authInitialState = {
    username: '',
    password: '',
    email: '',
    roleEntry: '',
    token: '',
    role: '',
};

const authReducer = (state = authInitialState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case 'UPDATE':
            newState[action.key] = action.data;
            break;
        default:
            break;
    }

    return newState;
};

export default authReducer;
