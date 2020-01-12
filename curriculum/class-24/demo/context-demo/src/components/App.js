import React from 'react';
import GetName from './GetName';
import Child from './Child';
import GrandChildConsumer from './GrandChildConsumer';
import NameChanger from './NameChanger';

function App() {
    return (
        <div>
            <h1>My App!</h1>
            <GetName>
                <Child>
                    <GrandChildConsumer />
                    <NameChanger />
                </Child>
            </GetName>
        </div>
    );
}

export default App;
