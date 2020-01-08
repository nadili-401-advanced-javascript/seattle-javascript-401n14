import { useState, useEffect } from 'react';
import fetch from 'node-fetch';

const useUnsplashPhotos = query => {
    const unsplashAPI =
        'https://api.unsplash.com/search/photos?client_id=' +
        'b32d6e507d11436cada9517868c9ce4b1207991aa852d0c2b8a0144c80ff5e4f' +
        '&query=' +
        query;

    const [images, setImages] = useState([]);

    useEffect(() => {
        async function getPhotos() {
            let res = await fetch(unsplashAPI);
            let json = await res.json();
            setImages(json.results);
        }

        getPhotos();
    }, [query, unsplashAPI]);

    return images;
};

export default useUnsplashPhotos;
