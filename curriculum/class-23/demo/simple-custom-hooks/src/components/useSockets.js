import { useState, useEffect } from 'react';
import socket from 'socket.io-client';

const useSockets = (url, event) => {
    const [socketVal, setSocketVal] = useState(0);
    const [isConnected, setConnected] = useState(false);

    useEffect(() => {
        const client = socket.connect(url);

        client.on('connect', () => setConnected(true));
        client.on('disconnect', () => setConnected(false));
        client.on(event, data => {
            setSocketVal(data);
        });
    }, [url, event, isConnected]);

    return { socketVal, isConnected };
};

export default useSockets;
