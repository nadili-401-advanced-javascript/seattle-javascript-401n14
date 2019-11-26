'use strict';

// this is the same as both requireing net and net.createServer
const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('A socket connected', socket.id);
  socket.on('speak', (payload) => {
    console.log("Speak was emitted", payload);
  });
  io.emit('speak', { event: 'test', payload: [] });
});

const school = io.of('/school');
school.on('connection', (socket) => {
  console.log('connected to school namespace', socket.id);
  school.emit('speak', 'Hey school');

  socket.on('join', room => {
    console.log(`${socket.id} joined ${room}`);
    socket.join(room);
  });

  socket.on('challenge', (payload) => {
    school.to('codefellows').emit('challenge', payload);
  });
});