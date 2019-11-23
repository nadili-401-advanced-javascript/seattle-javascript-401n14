# Class 17 Socket.io

## TCP Review

### Creating an event driven TCP Server

- Creating an API server that listend to endpoints on the HTTP Req/Res cycle
- Creating a TCP server that writes data to connected sockets.
  - Create a dual server listening handler:

```js
app.listen(3000, () => {
  eventServer.listen(3001, () => {
    console.log('API server up on 3000 : Event server up on 3001');
  });
});
```

- Handler socket.write events within the route handler
  
```js
connectionPool.forEach(socket => {
    // {} => "{...key value message pairs}"
    socket.write(JSON.stringify({ event: "MESSAGES_WRITE", payload: messages[messageId] }));
  });
```

### Web Sockets!!
- TCP sockets we were stuck with a simple byte stream.
  - information was encoded in a buffer of byte <01 10 ... >
- Upgrade to Web Sockets!!
  - These are a little more performant and we can actauilly send messages, objects, string, more complex stuff.
- Using a different protocol which is made from and upgraded HTTP protocol.
  - `http://localhost:3001` or `https://...`
  - `ws://localhost:3001/socket` or `wss://...`
- Utilizing a new library that uses the WebSocket protocol called socket.io.
- npm ws
- Socket.io will let us configure our own events as well as many more exciting features.