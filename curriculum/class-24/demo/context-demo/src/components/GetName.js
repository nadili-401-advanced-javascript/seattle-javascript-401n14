import React, { useState } from 'react';

export const NameContext = React.createContext();

function GetName(props) {
    const [state, setState] = useState({
        update: newName => {
            setState(state => ({ ...state, name: newName }));
        },
        updateBear: newBear => {
            setState(state => ({ ...state, bear: newBear }));
        },
        name: '',
        bear: 'grizzly',
    });

    return (
        <NameContext.Provider value={state}>
            <div>
                <h2>Enter Your Name here: </h2>
                <input
                    type='text'
                    value={state.name}
                    onChange={e => {
                        state.update(e.target.value);
                    }}
                />
                {props.children}
            </div>
        </NameContext.Provider>
    );
}
export default GetName;
