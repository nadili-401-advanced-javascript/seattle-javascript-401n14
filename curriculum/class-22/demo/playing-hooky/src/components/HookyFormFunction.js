import React, { useState, useEffect, useReducer } from 'react';

function stateReducer(state, dispatch) {
    // state = the current state of your component
    // dispatch = information about how you want to change the state
    // reducer = from current state + dispatch >> new State
    let newState = { ...state };

    console.log('In Reducer');
    console.log('current state: ', state);
    console.log('dispatch request', dispatch);

    switch (dispatch.type) {
        case 'changeNum':
            newState.skippedClasses = parseInt(dispatch.data);
            if (newState.skippedClasses >= 5) newState.dangerZone = true;
            else newState.dangerZone = false;
            break;
        case 'resetNum':
            newState.skippedClasses = 0;
            newState.dangerZone = false;
            break;
        default:
            break;
    }

    console.log('newState: ', newState);
    return newState;
}

function HookyFormFunction(props) {
    const [fName, setFName] = useState('John');
    const [lName, setLName] = useState('Doe');
    const [location, setLocation] = useState('Ice Cream Shop');

    // custState is a getter object with skippedClasses and dangerZone
    // as keys

    // custDispatch is a function that calls stateReducer with a
    // dispatch parameter

    // stateReducer takes in current state, dispatch and produces a new state
    const [custState, custDispatch] = useReducer(stateReducer, {
        skippedClasses: 0,
        dangerZone: false, // in danger zone if you skip 5 or more classes
    });

    function changeLocation(e) {
        setLocation(e.target.value);
        //this.setState({ ...this.state, location: e.target.value });
    }

    function useIsLocationValid() {
        const locations = ['Arcade', 'Ice Cream Shop', 'Burning Man'];
        if (locations.includes(location)) return true;
        else return false;
    }

    useEffect(() => {
        // runs on mount and update (if fName and/or lName caused update)
        document.title = fName + ' ' + lName + ' is playing Hooky!';

        // runs on unmount
        return () => {
            document.title = 'No one is playing Hooky';
        };
    }, [fName, lName]);

    return (
        <div>
            <label>
                <span>First Name</span>
                <input
                    type='text'
                    value={fName}
                    onChange={e => {
                        setFName(e.target.value);
                    }}
                />
            </label>
            <br />

            <label>
                <span>Last Name</span>
                <input
                    type='text'
                    value={lName}
                    onChange={e => {
                        setLName(e.target.value);
                    }}
                />
            </label>
            <br />

            <p>{useIsLocationValid() ? 'Valid' : 'Invalid'}</p>
            <label>
                <span>Where are you going?</span>
                <input type='text' value={location} onChange={changeLocation} />
            </label>

            <br />
            <p>{custState.dangerZone ? 'Danger!' : ''}</p>
            <label>
                <span>How many classes have you skipped?</span>
                <input
                    type='number'
                    value={custState.skippedClasses}
                    onChange={e => {
                        custDispatch({
                            type: 'changeNum',
                            data: e.target.value,
                        });
                    }}
                />
            </label>

            <button
                onClick={() => {
                    custDispatch({
                        type: 'resetNum',
                    });
                }}
            >
                Reset Skipped
            </button>
        </div>
    );
}

export default HookyFormFunction;
