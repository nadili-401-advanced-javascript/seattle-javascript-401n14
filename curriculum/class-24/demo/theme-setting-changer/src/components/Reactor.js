import React, { useContext } from 'react';
import { ThemeContext } from './GetTheme';
import { SettingsContext } from './GetSettings';

function Reactor(props) {
    const theme = useContext(ThemeContext);
    const settings = useContext(SettingsContext);
    return (
        <div
            style={{
                color: theme.themeColor,
                fontSize: settings.fontSize,
            }}
        >
            {props.children}
        </div>
    );
}

export default Reactor;
