import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import FormInput from './form-elements/FormInput';
import AuthViewer from './AuthViewer';

function Login(props) {
    const auth = useContext(AuthContext);
    console.log(auth);

    // being logged in = i have a token

    return (
        <div>
            <AuthViewer invert={true}>
                <h1>Login</h1>
                <FormInput
                    type='text'
                    label='Username'
                    id='username'
                    value={auth.username}
                    onChange={e => {
                        auth.update('username', e.target.value);
                    }}
                />
                <FormInput
                    type='text'
                    label='Password'
                    id='password'
                    value={auth.password}
                    onChange={e => {
                        auth.update('password', e.target.value);
                    }}
                />
                <FormInput
                    type='text'
                    label='Email'
                    id='email'
                    value={auth.email}
                    onChange={e => {
                        auth.update('email', e.target.value);
                    }}
                />
                <FormInput
                    type='text'
                    label='Role'
                    id='role'
                    value={auth.roleEntry}
                    onChange={e => {
                        auth.update('roleEntry', e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        auth.signin(auth.username, auth.password);
                    }}
                >
                    Sign In
                </button>
                <button
                    onClick={() => {
                        auth.signup(
                            auth.username,
                            auth.password,
                            auth.email,
                            auth.roleEntry,
                        );
                    }}
                >
                    Sign Up
                </button>
            </AuthViewer>
            <AuthViewer>
                <button onClick={auth.clear}>Log Out</button>
            </AuthViewer>
        </div>
    );
}

// In order to sign in:
// Take the username and password >> "username:password"
// Encode using base64 >> base64("username:password") >> =39jfsdlkfvVDIdfsk
// Add the 'Basic ' identifier >> "Basic =39jfsdlkfvVDIdfsk"
// NOW we are (almost) ready to go!

// We need to make an HTTP request to our API Server
// "/signin"

export default Login;
