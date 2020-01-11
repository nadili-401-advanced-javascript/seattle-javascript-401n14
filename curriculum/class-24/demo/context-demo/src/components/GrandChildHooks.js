import React, { useContext } from 'react';
import { AppContext } from './App';

function GrandChildHooks() {
    const context = useContext(AppContext);
    return (
        <div>
            <p>
                The name from my grandparent is:{' '}
                <span style={{ color: 'green' }}>{context.name}</span>
            </p>
        </div>
    );
}

export default GrandChildHooks;
