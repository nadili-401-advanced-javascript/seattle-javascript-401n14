import React from 'react';

function Child(props) {
    return (
        <div>
            <h4>My stylish container!</h4>
            {props.children}
        </div>
    );
}

export default Child;
