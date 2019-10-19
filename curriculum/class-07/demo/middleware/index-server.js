'use strict';

const express = require('express');
const notFound = require('./404.js');
const errorHandler = require('./error.js');
const logger = require('./logger.js');
const router = express.Router();

let app = express();

app.get('/', (req, res, next) => {
  res.send('Homepage');
});

// ==== APPLICATION MIDDLEWARE ====================================

// Here is some global express middleware for parsing data
// Because we define it with no "route" at the app level, it runs on every route
// express.json() parses incoming request bodies as javaScript objects
app.use(express.json());

// Here, we define some middlware called "logger" that we imported in.
// It will run on all routes (and you'll see it's logs in the console)
app.use(logger);

let routeMW = str => {
  return (req, res, next) => {
    req.str = str;
    next();
  };
};

app.get('/cats', routeMW('Kitto'), (req, res, next) => {
  res.status(200);
  res.send(`My cat is named ${req.str}`);
});

// ==== ROUTE MIDDLEWARE ============================================

router.get('/', (req, res, next) => {
  res.status(200);
  res.send("It looks like I'm at /, but really I'm at /dogs");
});

router.get('/bark', (req, res, next) => {
  res.status(200);
  res.send("It looks like I'm at /bark, but really I'm at /dogs/bark");
});

app.use('/dogs', router);

// ==== ERORR MIDDLEWARE ============================================

// This route will invoke the error middleware by throwing an error
// this simulates a catastrophe in your server
app.get('/err-throw', (req, res, next) => {
  console.log('In the "/err-throw" route');
  throw 'failed';
});

// this route will invoke the error middleware progamatically
// this gives you the power to "throw" server errors in code
// Note that next, when given an argument will ALWAYS throw an express error
app.get('/err-manual', (req, res, next) => {
  console.log('In the "/err-manual" route');
  next('failed');
});

// Error Handling
app.use(errorHandler);

// 404 Route
// This will get called on any route we don't have defined
// Be sure to call this at the end, after your routes have
// been defined above!
app.use('*', notFound);

// ==== RUN SERVER ===================================================

app.listen(3000);
