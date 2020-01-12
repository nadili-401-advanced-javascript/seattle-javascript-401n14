import React, { useContext } from 'react';
import { ThemeContext } from './GetTheme';
import { SettingsContext } from './GetSettings';

function Setter(props) {
    const theme = useContext(ThemeContext);
    const settings = useContext(SettingsContext);

    return (
        <div>
            <label>Change Theme Color</label>
            <input
                type='text'
                value={theme.themeColor}
                onChange={e => {
                    theme.updateThemeColor(e.target.value);
                }}
            />

            <label>Change Font Size</label>
            <input
                type='text'
                value={settings.fontSize}
                onChange={e => {
                    settings.updateFontSize(e.target.value);
                }}
            />
        </div>
    );
}

export default Setter;
