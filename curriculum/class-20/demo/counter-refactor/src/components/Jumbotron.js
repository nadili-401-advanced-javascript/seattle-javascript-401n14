import React from 'react';

// Child "dumb"
function Jumbotron(props) {
    return (
        <div className='jumbotron'>
            <h1>Your Jumbotron message is!! : {props.message}</h1>
            <p>Way to go! Jumbotrons are great!!!!</p>
            <button className='btn btn-primary'>Yes they are!</button>
        </div>
    );
}

export default Jumbotron;
