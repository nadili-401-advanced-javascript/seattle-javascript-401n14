import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';

function AuthViewer(props) {
    // if the user is allowed (token exists and/or role matches what role i need) to view this content
    // show it, otherwise show nothing

    // AuthViewer is a View Controller -> it determines if its children should be seen
    // it doesn't actually have any major content itself (relies on children)

    const auth = useContext(AuthContext);

    let shouldShow = auth.token !== ''; // does the token exist?

    // if we are looking for a specific role, does the user's role match?
    // let a = false;
    // let b = true;
    // let c = a && b ==> false
    // let d = a || b ==> true
    // a &= b ==> a && b ==> false
    // a |= b ==> a || b ==> true
    if (props.role) shouldShow &= auth.role === props.role;

    if (props.invert) shouldShow = !shouldShow;

    return shouldShow ? <div>{props.children}</div> : '';
}

export default AuthViewer;
