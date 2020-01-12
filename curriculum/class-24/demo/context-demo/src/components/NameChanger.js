import React, { useContext } from 'react';
import faker from 'faker';
import { NameContext } from './GetName';

function NameChanger(props) {
    const context = useContext(NameContext);
    const changeName = () => {
        context.update(faker.name.firstName());
    };

    return (
        <button className='btn btn-primary' onClick={changeName}>
            Change Name
        </button>
    );
}

export default NameChanger;
