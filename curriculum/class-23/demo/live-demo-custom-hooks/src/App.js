import React, { useState } from 'react';
import useDocumentTitle from './useDocumentTitle';
import useLocalStorage from './useLocalStorage';
import useUnsplashPhotos from './useUnsplashPhotos';
import useSocket from './useSocket';
import './styles.scss';

function App() {
    const [name, setName] = useState('John Doe');
    const [size, setSize] = useLocalStorage('lsSize', 3);
    const [query, setQuery] = useState('');
    const images = useUnsplashPhotos(query);
    const { connected, socketData } = useSocket(
        'https://transcribe-jamm.herokuapp.com/',
        'new user',
    );
    useDocumentTitle(name);

    return (
        <div className='App'>
            <p>Are you connected? {connected.toString()}</p>
            <p>The newest user is: {socketData}</p>
            <input
                type='text'
                value={name}
                onChange={e => {
                    setName(e.target.value);
                }}
            />
            <input
                type='number'
                value={size}
                onChange={e => {
                    setSize(e.target.value);
                }}
            />
            <input
                type='text'
                value={query}
                onChange={e => {
                    setQuery(e.target.value);
                }}
            />

            <div className='row'>
                {images
                    ? images.map((val, ind) => {
                          return (
                              <div className='col' key={ind}>
                                  <img
                                      alt={val.description}
                                      src={val.urls.small}
                                  />
                              </div>
                          );
                      })
                    : ''}
            </div>
        </div>
    );
}

export default App;
