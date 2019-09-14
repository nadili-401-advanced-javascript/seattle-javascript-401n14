import React from 'react';

import io from 'socket.io-client';
import Troll from './troll.js';

// const url = 'http://localhost:3000';
const url = 'https://js-401-socket-io-server.herokuapp.com';
const socket = io.connect(url);

const App = props => {
  return (
    <>
      <h1>"Chat" App</h1>
      <Troll socket={socket} />
    </>
  );
};

export default App;
