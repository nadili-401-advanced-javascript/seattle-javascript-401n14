import React from 'react';
import AuthProvider from './contexts/AuthContext';
import AuthViewer from './AuthViewer';
import BookViewer from './BookViewer';
import BookAdder from './BookAdder';
import Login from './Login';

function App() {
    // Authentication << Context
    // // username
    // // password
    // // email ??
    // // ** token!!
    // // Having this be a context lets us share the above data to ANY descendants

    // RBAC (Role Based Access Control)
    // // Hey if you're not allowed here, we won't show you this thing
    // // ** role !!

    return (
        <div className='App'>
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

export default App;
