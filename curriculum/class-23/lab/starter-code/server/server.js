const app = require('express')();
const server = require('http').createServer(app);
const socket = require('socket.io');
const io = socket(server);

const port = 3005 || process.env.PORT;

let socketPool = {};

io.on('message', data => {
    console.log('read message');
    console.log(data);
});

io.on('connection', socket => {
    socketPool[socket.id] = socket;
    socket.on('message', function(data) {
        let sockets = Object.keys(socketPool);
        sockets.forEach(val => {
            if (val != socket.id) socketPool[val].emit('read message', data);
        });
    });
});

io.on('disconnect', socket => {
    delete socketPool[socket.id];
});

const listenCb = () =>
    console.table([
        ['status', 'port'],
        ['started', port],
    ]);
server.listen(port, listenCb);
