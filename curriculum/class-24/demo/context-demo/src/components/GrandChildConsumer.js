import React from 'react';
import { AppContext } from './App';

function GrandChildConsumer() {
    return (
        <AppContext.Consumer>
            {context => {
                return (
                    <div>
                        <p>
                            The name from my grandparent is:{' '}
                            <span style={{ color: 'blue' }}>
                                {context.name}
                            </span>
                        </p>
                    </div>
                );
            }}
        </AppContext.Consumer>
    );
}

export default GrandChildConsumer;
