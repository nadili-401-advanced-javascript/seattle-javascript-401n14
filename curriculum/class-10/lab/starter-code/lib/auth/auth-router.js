'use strict';

const express = require('express');
const router = express.Router();

const Users = require('../models/users-model.js');
const auth = require('./auth-middleware.js');

// TODO Swagger Comments
router.post('/signup', async (req, res, next) => {
  let users = new Users();

  try {
    let user = await users.create(req.body);

    req.token = user.generateToken();
    req.user = user;

    res.set('token', req.token);
    res.cookie('auth', req.token);
    res.send(req.token);
  } catch (err) {
    next(err);
  }
});

// TODO Swagger Comments
router.post('/signin', auth, (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

module.exports = router;
