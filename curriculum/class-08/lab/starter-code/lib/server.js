'use strict';

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const start = port => {
  app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
  });

  const config = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  };

  mongoose.connect(process.env.MONGODB_URI + '/app', config);
};

// Models

// App Level MW
app.use(express.json());

// Routes
app.get('/', (req, res, next) => {
  res.send('Homepage');
});

// Error Handling

module.exports = {
  server: app,
  start: start
};
