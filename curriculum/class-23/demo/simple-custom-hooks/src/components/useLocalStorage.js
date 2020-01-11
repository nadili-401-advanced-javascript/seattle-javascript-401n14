import { useState, useEffect } from 'react';

function getInitialValue(key, defaultValue) {
    let value = defaultValue;
    try {
        value = window.localStorage.getItem(key);
    } catch (e) {
        console.error(e);
    }
    return value;
}

const useLocalStorage = (key, defaultValue) => {
    const [name, setName] = useState(getInitialValue(key, defaultValue));

    useEffect(() => {
        window.localStorage.setItem(key, name);
    }, [name, key]);

    return [name, setName];
};

export default useLocalStorage;
