import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function GetSettings(props) {
    const [state, setState] = useState({
        fontSize: '40px',
        updateFontSize: size => {
            setState({ ...state, fontSize: size });
        },
    });

    return (
        <SettingsContext.Provider value={state}>
            <div>
                <h1>Your Settings Provider</h1>
                {props.children}
            </div>
        </SettingsContext.Provider>
    );
}

export default GetSettings;
