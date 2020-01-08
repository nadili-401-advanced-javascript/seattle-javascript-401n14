import { useState, useEffect } from 'react';
import fetch from 'node-fetch';

const useUnsplashPhotos = query => {
    // prob want to validate query string
    const url =
        'https://api.unsplash.com/search/photos?client_id=b32d6e507d11436cada9517868c9ce4b1207991aa852d0c2b8a0144c80ff5e4f&query=' +
        query;

    const [response, setResponse] = useState([]);

    useEffect(() => {
        async function fetchIt() {
            let res = await fetch(url);
            let json = await res.json();
            setResponse(json.results);
        }

        fetchIt();
    }, [query, url]);

    return response;

    // Ping an API with a GET request
    // Rerun the API whenever the query changes
};

export default useUnsplashPhotos;
