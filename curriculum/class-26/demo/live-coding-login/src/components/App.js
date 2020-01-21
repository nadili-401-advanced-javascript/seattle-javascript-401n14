import React from 'react';
import AuthProvider from './contexts/AuthContext';
import AuthViewer from './AuthViewer';
import BookViewer from './BookViewer';
import BookAdder from './BookAdder';
import Login from './Login';
import { connect } from 'react-redux';

function App(props) {
    return (
        <div className='App'>
            <button
                onClick={() => {
                    props.updateTest('b');
                }}
            >
                Dispatch
            </button>
            <AuthProvider>
                <Login />
                <AuthViewer>
                    <h1>Welcome! You're Logged In!</h1>
                    <BookViewer />
                </AuthViewer>
                <AuthViewer role='admin'>
                    <BookAdder />
                </AuthViewer>
            </AuthProvider>
        </div>
    );
}

const mapStateToProps = state => ({
    test: state.test,
});

const mapDispatchToProps = dispatch => ({
    updateTest: data => {
        dispatch({ type: 'UPDATE_TEST', data: data });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
