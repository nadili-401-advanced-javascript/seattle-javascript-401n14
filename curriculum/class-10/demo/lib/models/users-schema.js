'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = mongoose.Schema({
  username: { required: true, type: String, unique: true },
  password: { required: true, type: String }
});

// A bunch of stuff??
// When we save a user, we want to save a hashed version of our
// password
// bcrypt.hash(password)

// Right before I save a record, run this code
users.pre('save', async function() {
  // Right now, I'm about to save a single record
  // And I can access that record using the keyword `this`
  // the password for the user i'm trying to save
  this.password = await bcrypt.hash(this.password, 10);
});

// Everytime a user tries to login
// compare their credentials with the stored hashed password
// bcrypt.compare(password, hashedpassword)

// this function can run on an entire model (full collection of records)
users.statics.findUser = async function(creds) {
  // here, `this` refers to a collection of users
  // creds is the object containing all the credentials for this user
  let query = { username: creds.username };

  let user = await this.findOne(query);
  let isValid = await user.comparePasswords(creds.password);

  if (isValid) {
    // if valid, return a generated token
    let token = await user.generateToken();
    return { user: user, token: token };
  } else return null;
};

users.statics.verify = function(token) {
  // here, `this` refers to a collection of users
  // creds is the object containing all the credentials for this user
  console.log(token);
  return jwt.verify(token, process.env.JWT_SECRET);
};

// this function can run on a single record
users.methods.comparePasswords = async function(unhashedPassword) {
  // here, `this` refers to an individual record
  let hashedPassword = this.password;
  let valid = await bcrypt.compare(unhashedPassword, hashedPassword);
  return valid;
};

users.methods.generateToken = function() {
  // here, `this` refers to an individual record
  let tokenData = {
    id: this._id
  };

  return jwt.sign(tokenData, process.env.JWT_SECRET);
};

// every time a user logs in succesfully generate a JWT (token)
module.exports = mongoose.model('users', users);
