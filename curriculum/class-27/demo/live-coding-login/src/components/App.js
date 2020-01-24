import React from 'react';
import AuthViewer from './AuthViewer';
import BookViewer from './BookViewer';
import BookAdder from './BookAdder';
import Login from './Login';

function App(props) {
    return (
        <div className='App'>
            <Login />
            <AuthViewer>
                <h1>Welcome! You're Logged In!</h1>
                <BookViewer />
            </AuthViewer>
            <AuthViewer role='admin'>
                <BookAdder />
            </AuthViewer>
        </div>
    );
}

export default App;
