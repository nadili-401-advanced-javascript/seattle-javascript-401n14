import React, { useState } from 'react';

export const ThemeContext = React.createContext();

function GetTheme(props) {
    const [state, setState] = useState({
        themeColor: '#00ff00',
        updateThemeColor: col => {
            setState({ ...state, themeColor: col });
        },
    });

    return (
        <ThemeContext.Provider value={state}>
            <div>
                <h1>Your Theme Provider</h1>
                {props.children}
            </div>
        </ThemeContext.Provider>
    );
}

export default GetTheme;
