'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
const schoolSocket = io.connect('http://localhost:3000/school');

schoolSocket.emit('join', 'codefellows');

socket.on('speak', (payload) => {
  console.log('Heard', payload);
});

schoolSocket.on('speak', (payload) => {
  console.log('School heard', payload);
});
schoolSocket.on('challenge', console.log);
schoolSocket.emit('challenge', 'Lets solve some challenges');


