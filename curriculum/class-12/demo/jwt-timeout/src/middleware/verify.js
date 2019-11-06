'use strict';

const jwt = require('jsonwebtoken');
const Users = require('../models/users-model.js');
const users = new Users();

/**
 * This function takes a request with a bearer token in the header, verifies the token, and then authenticates those user credentials to (hopefully) return a user record from the database
 * @param  {object}   req   Our request object. We need to access the req.headers.authorization key-value.
 * @param  {object}   res   The response object. Because this is just middleware, we won't be editing the response value in this function
 * @param  {Function} next  This is what we use to either go to the next middleware or endpoint for our route, or to go to some error handling middleware
 */
module.exports = async (req, res, next) => {
  // First, we want to get the authorization string from the header
  let auth = req.headers.authorization;

  // auth should be a string that looks something like:
  // Bearer <token>
  // We want to pull out the token portion so we
  // can interpret it

  // Split the auth string based on space, and then
  // grab the <token> piece from the resulting
  // pieces array
  let token = auth.split(/\s+/)[1];

  // Verify the token using JWT
  try {
    let tokenContent = jwt.verify(
      token,
      process.env.SECRET || 'this-is-my-secret'
    );
    // now that we have the credentials, let's authenticate
    console.log('data', tokenContent);
    let user = await users.get(tokenContent.data.id);
    console.log('user', user);
    if (user) {
      req.user = user;
      next();
    } else next('User not found');
  } catch (e) {
    if (e.name === 'TokenExpiredError') next(e.name);
  }
};
