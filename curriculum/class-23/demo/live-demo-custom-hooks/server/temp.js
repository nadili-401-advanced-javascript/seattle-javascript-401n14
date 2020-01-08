const app = require('express')();
const server = require('http').createServer(app);
const socket = require('socket.io');
const io = socket(server);

const port = 8080 || process.env.PORT;

io.on('connection', () => {
    console.info('SOME ONE IS HERE');
});

setInterval(() => {
    const temp = Math.floor(Math.random() * 100);
    console.log(`TEMP : ${temp}`);
    io.emit('temperature', temp);
}, 3000);

const listenCb = () => {
    console.log('Listening!');
};
server.listen(port, listenCb);
