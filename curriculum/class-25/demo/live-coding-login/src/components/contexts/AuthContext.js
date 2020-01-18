import React, { useState } from 'react';
import fetch from 'node-fetch';

export const AuthContext = React.createContext();

function AuthProvider(props) {
    const [state, setState] = useState({
        username: '',
        password: '',
        email: '',
        token: '',
        role: '',
        roleEntry: '',
        update: (key, val) => {
            setState(state => {
                let newState = { ...state };
                newState[key] = val;
                return newState;
            });
        },
        clear: () => {
            setState({ ...state });
        },
        signin: async (username, password) => {
            // go from username, password to Basic Auth

            // Basic =j3ifjlk2134KDdjfk29j
            const basicAuth =
                'Basic ' +
                Buffer.from(username + ':' + password).toString('base64');

            // HTTP Request
            const api = 'https://js401n14-lab25.herokuapp.com/signin';

            let response = await fetch(api, {
                method: 'POST',
                headers: {
                    Authorization: basicAuth,
                },
            });

            let body = await response.json();

            // what should we return
            // A TOKEN!!

            // save body.token and body.role into our auth context state
            await setState(state => {
                return {
                    ...state,
                    token: body.token,
                    role: body.role,
                    password: '',
                };
            });
        },

        signup: async (username, password, email, role) => {
            // Http request
            const api = 'https://js401n14-lab25.herokuapp.com/signup';
            const body = {
                username: username,
                password: password,
                email: email,
                role: role,
            };

            let response = await fetch(api, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            let json = await response.json();
            await setState(state => {
                return {
                    ...state,
                    token: json.token,
                    role: json.role,
                    password: '',
                };
            });
        },

        getBooks: async token => {
            const api = 'https://js401n14-lab25.herokuapp.com/books';

            let response = await fetch(api, {
                method: 'GET',
                headers: {
                    Authorization: token,
                },
            });

            let json = await response.json();
            return json;
        },

        addBook: async (title, author, roles, token) => {
            // Http request
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
                    Authorization: token,
                },
            });
        },
    });

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
