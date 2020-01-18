// thunk will auto-populate dispatch and getState;
import fetch from 'node-fetch';

const updateAfterAuth = (dispatch, data) => {
    dispatch({
        type: 'UPDATE',
        data: data.token,
        key: 'token',
    });

    dispatch({
        type: 'UPDATE',
        data: data.role,
        key: 'role',
    });

    dispatch({
        type: 'UPDATE',
        data: '',
        key: 'password',
    });
};

export const signin = async (dispatch, getState) => {
    let state = getState();

    const basicAuth =
        'Basic ' +
        Buffer.from(state.username + ':' + state.password).toString('base64');

    const api = 'https://js401n14-lab25.herokuapp.com/signin';

    let response = await fetch(api, {
        method: 'POST',
        headers: {
            Authorization: basicAuth,
        },
    });

    let json = await response.json();
    updateAfterAuth(dispatch, json);
};

export const signup = async (dispatch, getState) => {
    const state = getState();
    // Http request
    const api = 'https://js401n14-lab25.herokuapp.com/signup';
    const body = {
        username: state.username,
        password: state.password,
        email: state.email,
        role: state.role,
    };

    let response = await fetch(api, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    let json = await response.json();

    updateAfterAuth(dispatch, json);
};
