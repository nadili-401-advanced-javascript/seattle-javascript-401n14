import { useState, useEffect } from 'react';

function getInitialValue(key, defaultValue) {
    // check if local storage exists, else return default
    let value;

    value = window.localStorage.getItem(key)
        ? window.localStorage.getItem(key)
        : defaultValue;

    return value;
}

const useLocalStorage = (key, defaultValue) => {
    // set size in localStorage if undefined or different
    // get size that was updated
    const [size, setSize] = useState(getInitialValue(key, defaultValue));

    useEffect(() => {
        try {
            window.localStorage.setItem(key, size);
        } catch (e) {
            console.error(e);
        }
    }, [size, key]);

    return [size, setSize];
};

export default useLocalStorage;
