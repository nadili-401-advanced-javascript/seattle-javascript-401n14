'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

const Users = require('./models/users-model.js');
let users = new Users();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get('/', (req, res, next) => {
  res.send('Homepage');
});

// When the client sends a password to the server,
// the client should technically encrypt the password
// using "Basic Auth" which is a standard process to
// encrypt things between client and server
app.get('/:username-:password', async (req, res, next) => {
  // when I try to get the data for this user,
  // i need to verify the username and password match a
  // entry in my db
  let foundUser = await users.findUser({
    username: req.params.username,
    password: req.params.password
  });

  res.send(foundUser || 'not found');
});

app.get('/restricted', (req, res, next) => {
  // this route only works for logged-in users
  // we check that they are logged in if they have
  // a valid JWT
  if (req.headers.token) {
    let valid = users.verify(req.headers.token);
    if (valid.id) res.send('Welcome to this restricted page!');
    else res.send('RESTRICTED!!');
  } else res.send('RESTRICTED!!');
});

app.post('/', async (req, res, next) => {
  // my req should have a body
  // and that body should be the user to add
  let data = await users.create(req.body);
  res.send(data);
});

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log('listening on: ' + PORT);
    });

    const config = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    };

    mongoose.connect(process.env.MONGODB_URI, config);
  }
};
