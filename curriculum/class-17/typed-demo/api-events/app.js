'use strict';

const express = require('express');
const net = require('net');
const uuid = require('uuid/v4');

const app = express();
app.use(express.json());
const eventServer = net.createServer();

const messages = {};
// Our saved socket pool
const connectionPool = [];


app.get('/message', (req, res, next) => {
  res.send(messages);
  // iteate through our saved sockets and write to the clients that are connected
  connectionPool.forEach(socket => {
    // {} => "{}"
    socket.write(JSON.stringify({ event: "MESSAGES_FETCH", payload: messages }));
  });
});

app.post('/message', (req, res, next) => {
  const messageText = req.body.text;
  const messageId = uuid();
  messages[messageId] = {
    id: messageId,
    content: messageText,
    created_at: new Date(),
  };
  res.send(messages[messageId]);
  connectionPool.forEach(socket => {
    // {} => "{...key value message pairs}"
    socket.write(JSON.stringify({ event: "MESSAGES_WRITE", payload: messages[messageId] }));
  });
})

// This creates our Socket!! we should save these somewhere and use them in our HTTP handlers
eventServer.on('connection', socket => {
  console.log('Socket connected!!');
  connectionPool.push(socket);
});


app.listen(3000, () => {
  eventServer.listen(3001, () => {
    console.log('API server up on 3000 : Event server up on 3001');
  });
});
