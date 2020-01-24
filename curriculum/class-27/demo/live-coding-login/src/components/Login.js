import React from 'react';
import { connect } from 'react-redux';
import FormInput from './form-elements/FormInput';
import AuthViewer from './AuthViewer';
import { signin, signup } from './store/actions';

function Login(props) {
    return (
        <div>
            <AuthViewer invert={true}>
                <h1>Login</h1>
                <FormInput
                    type='text'
                    label='Username'
                    id='username'
                    value={props.username}
                    onChange={e => {
                        props.dispatch({
                            type: 'UPDATE',
                            data: e.target.value,
                            key: 'username',
                        });
                    }}
                />
                <FormInput
                    type='text'
                    label='Password'
                    id='password'
                    value={props.password}
                    onChange={e => {
                        props.dispatch({
                            type: 'UPDATE',
                            data: e.target.value,
                            key: 'password',
                        });
                    }}
                />
                <FormInput
                    type='text'
                    label='Email'
                    id='email'
                    value={props.email}
                    onChange={e => {
                        props.dispatch({
                            type: 'UPDATE',
                            data: e.target.value,
                            key: 'email',
                        });
                    }}
                />
                <FormInput
                    type='text'
                    label='Role'
                    id='role'
                    value={props.roleEntry}
                    onChange={e => {
                        props.dispatch({
                            type: 'UPDATE',
                            data: e.target.value,
                            key: 'roleEntry',
                        });
                    }}
                />
                <button
                    onClick={() => {
                        props.dispatch(signin());
                    }}
                >
                    Sign In
                </button>
                <button
                    onClick={() => {
                        props.dispatch(signup());
                    }}
                >
                    Sign Up
                </button>
            </AuthViewer>
            <AuthViewer>
                <button>Log Out</button>
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

const mstp = state => ({
    username: state.auth.username,
    password: state.auth.password,
    email: state.auth.email,
    roleEntry: state.auth.roleEntry,
});

export default connect(mstp)(Login);
