'use strict';

const express = require('express');

//Our Middleware
const notFound = require('./404.js');
const errorHandler = require('./error.js');
const logger = require('./logger.js');
const dogs = require('./dogs.js');

let app = express();

// ==== APPLICATION MIDDLEWARE ====================================

// Here is some global express middleware for parsing data
// Because we define it with no "route" at the app level, it runs on every route
// express.json() parses incoming request bodies as javaScript objects

app.use(express.json()); // does this apply to me? If so, run!

// Here, we define some middlware called "logger" that we imported in.
// It will run on all routes (and you'll see it's logs in the console)
app.use(logger);

app.get('/', (req, res, next) => {
  res.send('Homepage');
});

app.get(
  '/cats',
  (req, res, next) => {
    req.str = 'Kitto';
    next();
  },
  (req, res, next) => {
    res.status(200);
    req.str2 = 'Bernie';
    next(); // kind of like a pointer
    //req.str3 = 'test'; // never going to hit this
    res.send(`xxMy cats are named ${req.str} and ${req.str2} ${req.str3}`);
  },
  (req, res, next) => {
    console.log('IN HERE!');
    req.str3 = 'test'; // never going to hit this
    //res.send(`My cats are named ${req.str} and ${req.str2}, ${req.str3}`);
  }
);

// ==== ROUTE MIDDLEWARE ============================================

app.use('/dogs', dogs);
app.use('/animals', dogs);

// ==== ERORR MIDDLEWARE ============================================

// This route will invoke the error middleware by throwing an error
// this simulates a catastrophe in your server
// Doen't like any res.send after the throw
app.get('/err-throw', (req, res, next) => {
  console.log('In the "/err-throw" route');
  throw 'failed';
});

// this route will invoke the error middleware progamatically
// this gives you the power to "throw" server errors in code
// Note that next, when given an argument will ALWAYS throw an express error
// Handles res.send after the next okay
app.get('/err-manual', (req, res, next) => {
  console.log('In the "/err-manual" route');
  next('failed');
});

// Error Handling
app.use(errorHandler);

app.get('/new-route', (req, res, next) => {
  res.send("I'm in a new route");
});

// 404 Route
// This will get called on any route we don't have defined
// Be sure to call this at the end, after your routes have
// been defined above!
app.use('*', notFound);

// ==== RUN SERVER ===================================================

app.listen(3000);
