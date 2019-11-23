'use strict';

const net = require('net');
const socket = new net.Socket();

// the connection to our TCP server starts
socket.connect(3001, 'localhost', () => {
  console.log('Connection to TCP server made');
});

socket.on('data', (data) => {
  // converting buffer to a string, and then turning that string back into an object
  console.log(JSON.parse(data.toString()));
})