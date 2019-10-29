'use strict';

const express = require('express');

const router = express.Router();
const printThis = require('./middleware.js');

router.param('name', (req, res, next) => {
  req.params.name = "My cat's name is: " + req.params.name;
  next();
});

router.get('/:name', (req, res, next) => {
  printThis(req.params.name);
});

router.get('/', (req, res, next) => {
  res.send("We're at the cats homepage");
});

module.exports = router;
