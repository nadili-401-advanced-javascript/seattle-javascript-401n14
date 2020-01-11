import React from 'react';
import GrandChildConsumer from './GrandChildConsumer';
import GrandChildHooks from './GrandChildHooks';

function Child() {
    return (
        <div>
            <GrandChildConsumer />
            <GrandChildHooks />
        </div>
    );
}

export default Child;
