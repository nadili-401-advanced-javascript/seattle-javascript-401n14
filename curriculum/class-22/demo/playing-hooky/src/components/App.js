import React, { useState } from 'react';
import HookyForm from './HookyForm';
import HookyFormFunction from './HookyFormFunction';
import '../styles/styles.scss';

function App() {
    let [showHooky, setShowHooky] = useState(true);

    return (
        <div className='App'>
            <h1>Who's Playing Hooky?</h1>
            {showHooky ? <HookyFormFunction /> : ''}
            <button
                onClick={() => {
                    setShowHooky(!showHooky);
                }}
            >
                Toggle Mount
            </button>
        </div>
    );
}

export default App;
