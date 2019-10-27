'use strict';

const express = require('express');
const router = express.Router(); // app

const People = require('../models/people.js');
let people = new People();

// GET with Promises
router.get('/', (req, res, next) => {
  req.model // stand-in for either People or Teams models
    .getFromField({})
    .then(data => {
      res.send(data);
    });
});

// GET :id with Async/Await
// people/Sarah
router.get('/:id', async (req, res, next) => {
  let data = await people.get(req.params.id);
  if (data && data._id) {
    res.send({ fullName: data.fullName, data: data });
  } else next('route');
});

// GET :firstName with Async/Await
router.get('/:firstName-:lastName', async (req, res, next) => {
  let data = await people.getFromField(req.params);
  res.send(data);
});

// POST
router.post('/', async (req, res, next) => {
  console.log('ROUTE');
  let data = await people.create(req.body);
  console.log('ROUTE DATA:', data);
  res.send(data);
});

module.exports = router;
