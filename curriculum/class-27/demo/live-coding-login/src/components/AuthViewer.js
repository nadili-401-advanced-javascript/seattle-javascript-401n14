import React from 'react';
import { connect } from 'react-redux';

function AuthViewer(props) {
    let shouldShow = props.token !== ''; // does the token exist?

    if (props.role) shouldShow &= props.stateRole === props.role;

    if (props.invert) shouldShow = !shouldShow;

    return shouldShow ? <div>{props.children}</div> : '';
}

const mstp = state => ({
    // props.token
    token: state.auth.token,

    // props.stateRole
    stateRole: state.auth.role,
});

export default connect(mstp)(AuthViewer);
