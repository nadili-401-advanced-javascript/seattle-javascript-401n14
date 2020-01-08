import React, { useState } from 'react';
import faker from 'faker';
import useDocumentTitle from './useDocumentTitle';
import useLocalStorage from './useLocalStorage';
import useUnsplashPhotos from './useUnsplashPhotos';
import useSockets from './useSockets';

function App() {
    const [query, setQuery] = useState('');
    const [title, setTitle] = useState(faker.random.words());
    const [name, setName] = useLocalStorage('name', 'John');

    const { socketVal, isConnected } = useSockets(
        'https://localhost:8080',
        'temperature',
    );

    const images = useUnsplashPhotos(query);

    const imageGrid = [];

    images.forEach((val, ind) => {
        imageGrid.push(
            <div className='flex-col' key={ind}>
                <img className='unsplash' alt={ind} src={val.urls.small} />
            </div>,
        );
    });

    useDocumentTitle(title);

    return (
        <div className='App container mt-3 mb-3'>
            <h2>UseDocumentTitle</h2>
            <p className='lead'>
                Use the button below to randomly generate a new document title
            </p>
            <p>Current Title: {title}</p>
            <button
                className='mb-5 btn btn-primary'
                onClick={() => {
                    setTitle(faker.random.words());
                }}
            >
                Generate
            </button>

            <h2>UseLocalStorage</h2>
            <p className='lead'>
                Use the button below to randomly generate a new name to save in
                localStorage.
            </p>
            <p>Current Name: {name}</p>
            <button
                className='mb-5 btn btn-primary'
                onClick={() => setName(faker.name.firstName())}
            >
                Generate
            </button>

            <h2>UseUnsplashPhotos</h2>
            <p className='lead'>
                Use the input field below to search for the top 10 images on
                UnSplash with your given query
            </p>
            <label>
                <span className='pr-4'>Query:</span>
                <input
                    type='text'
                    onChange={e => {
                        setQuery(e.target.value);
                    }}
                />
            </label>
            <div className='flex-row mb-5'>{imageGrid}</div>

            <h2>UseSockets</h2>
            <p className='lead'>
                Here is the live connection information about the paired socket:
            </p>
            <p>Connected: {isConnected.toString()}</p>
            <p>Socket Data: {socketVal ? socketVal.toString() : 'null'}</p>
        </div>
    );
}

export default App;
