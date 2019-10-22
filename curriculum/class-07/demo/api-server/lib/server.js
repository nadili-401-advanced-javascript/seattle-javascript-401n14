'use strict';

const express = require('express');
const app = express();

const start = port => {
  let PORT = port || process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
};

app.get('/', (req, res) => {
  res.send(
    "Congrats! You're running a web application with a client and a server!"
  );
});

app.get('/cats', (req, res) => {
  res.send('Did you know that I love cats?');
});

app.get('/dogs', (req, res) => {
  res.send('I happen to also love dogs!');
});

module.exports = {
  server: app,
  start: start
};
