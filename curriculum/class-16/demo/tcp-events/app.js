'use strict';

const net = require('net');
const socket = new net.Socket();

let config = {
  port: 3000,
  host: 'localhost',
};

socket.on('connect', () => {
  console.log('App.js >> connected!');
});

socket.connect(config, () => {});

setTimeout(function() {
  socket.write('App.js >> I am pinging the server');
}, 2000);

setTimeout(function() {
  socket.destroy();
}, 4000);

socket.on('data', data => {
  console.log('App.js >> I just wrote a thing!');
});
