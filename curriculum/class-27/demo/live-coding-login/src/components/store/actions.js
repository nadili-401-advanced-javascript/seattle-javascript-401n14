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

export const signin = () => {
    return async (dispatch, getState) => {
        let state = getState();

        const basicAuth =
            'Basic ' +
            Buffer.from(
                state.auth.username + ':' + state.auth.password,
            ).toString('base64');

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
};

export const signup = () => {
    return async (dispatch, getState) => {
        const state = getState();
        // Http request
        const api = 'https://js401n14-lab25.herokuapp.com/signup';
        const body = {
            username: state.auth.username,
            password: state.auth.password,
            email: state.auth.email,
            role: state.auth.role,
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
};

// dispatch(getBooks());
// dispatch(addBook(...));

export const getBooks = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const api = 'https://js401n14-lab25.herokuapp.com/books';

        let response = await fetch(api, {
            method: 'GET',
            headers: {
                Authorization: state.auth.token,
            },
        });

        let json = await response.json();
        dispatch({ type: 'SAVE_LIBRARY', data: json });
    };
};

export const addBook = (title, author, roles) => {
    return async (dispatch, getState) => {
        const state = getState();
        const api = 'https://js401n14-lab25.herokuapp.com/books';
        const body = {
            title: title,
            author: author,
            auth: roles,
        };

        await fetch(api, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                Authorization: state.auth.token,
            },
        });

        dispatch(getBooks());
    };
};
