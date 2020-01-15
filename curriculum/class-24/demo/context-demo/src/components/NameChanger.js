import React, { useContext } from 'react';
import faker from 'faker';
import { NameContext } from './GetName';

function NameChanger(props) {
    const context = useContext(NameContext);
    const changeName = () => {
        context.update(faker.name.firstName());
    };

    const changeBear = () => {
        context.updateBear('Polar');
    };

    return (
        <div>
            <button className='btn btn-primary' onClick={changeName}>
                Change Name
            </button>
            <button className='btn btn-primary' onClick={changeBear}>
                Change Name
            </button>
        </div>
    );
}

export default NameChanger;
