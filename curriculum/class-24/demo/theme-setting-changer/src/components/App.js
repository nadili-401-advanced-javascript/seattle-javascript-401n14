import React from 'react';
import GetTheme from './GetTheme';
import GetSettings from './GetSettings';
import Reactor from './Reactor';
import Setter from './Setter';

function App() {
    return (
        <div>
            <GetTheme>
                <GetSettings>
                    <Reactor>I can access Theme AND Settings!</Reactor>
                    <Setter />
                </GetSettings>
            </GetTheme>
        </div>
    );
}

export default App;
