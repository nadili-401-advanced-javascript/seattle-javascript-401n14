'use strict';

// TODO: JSDoc Comment
module.exports = (req, res, next) => {
  let error = { error: 'Resource Not Found' };
  res
    .status(404)
    .json(error)
    .end();
};
