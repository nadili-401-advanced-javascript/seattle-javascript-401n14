import React from 'react';

function Dropdown(props) {
    let options = [];

    props.list.forEach((val, ind) => {
        options.push(
            <option key={ind} value={ind}>
                {val}
            </option>,
        );
    });

    return <select>{options}</select>;
}

export default Dropdown;
