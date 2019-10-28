'use strict';

const express = require('express');
const router = express.Router();

// TODO Swagger Comments
router.get('/books', handleGetAll);

// TODO Swagger Comments
router.get('/books/:id', handleGetOne);

let books = [
  { title: 'Brave New World' },
  { title: 'Hamlet' },
  { title: 'Alice in Wonderland' }
];

// TODO JSDocs Comments
function handleGetAll(req, res, next) {
  let library = {
    count: books.length,
    results: books
  };
  res.status(200).json(library);
}

// TODO JSDocs Comments
function handleGetOne(req, res, next) {
  let book = books[req.params.id % books.length];
  res.status(200).json(book);
}

module.exports = router;
