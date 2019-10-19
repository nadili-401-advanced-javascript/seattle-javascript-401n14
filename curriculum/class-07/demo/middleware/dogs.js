'use strict';
const express = require('express');

let router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200);
  res.send("It looks like I'm at /, but really I'm at /dogs");
});

router.get('/bark', (req, res, next) => {
  res.status(200);
  res.send("It looks like I'm at /bark, but really I'm at /dogs/bark");
});

module.exports = router;
