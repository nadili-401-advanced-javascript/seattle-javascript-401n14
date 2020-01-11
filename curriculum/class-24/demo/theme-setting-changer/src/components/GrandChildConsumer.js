import React, { useContext } from 'react';
import { NameContext } from './GetName';

function GrandChildConsumer() {
    const context = useContext(NameContext);
    return (
        <div>
            <p>My name is {context.name}</p>
            <p>My name is also {context.name}</p>
        </div>
    );
}

export default GrandChildConsumer;
