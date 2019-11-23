'use strict';

const net = require('net');

const server = net.createServer();

let port = 3000;
let host = 'localhost';

// start the server
server.listen(port, host, () => {
  console.log('Listening on port:', port);
});

// create an empty collection of sockets
let socketPool = [];

// whenever a socket tries to connect
server.on('connection', socket => {
  // add it to my pool
  socketPool.push(socket);

  // try to keep track of socket in array
  let index = socketPool.length - 1;

  // log the number of connections (sockets)
  console.log('Server >> I am connected to', socketPool.length, 'sockets');

  // when the current socket I'm adding gets a 'data' event
  socket.on('data', data => {
    console.log('Server >> I got a data event in a socket!');
    // go through every socket in this server, and send another 'data' event
    socketPool.forEach(socket => {
      socket.write(data.toString());
    });
  });

  socket.id = index;

  // when the current socket gets a 'close' event
  socket.on('close', error => {
    console.log('Server >> socket closed!');
    socketPool = socketPool.splice(socket.id, 1);
    console.log('Server >> I am connected to', socketPool.length, 'sockets');
  });
});
