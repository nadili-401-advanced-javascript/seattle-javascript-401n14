'use strict';

// == EXTERNAL RESOURCES ===============================================

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// == DEFINE THE USER SCHEMA =============================================
// TODO JSDocs Comments
const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String },
  role: {
    type: String,
    required: true,
    default: 'user',
    enum: ['admin', 'editor', 'user']
  }
});

// TODO JSDocs Comments
users.pre('save', async function() {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

// TODO JSDocs Comments
users.statics.authenticateBasic = function(auth) {
  let query = { username: auth.username };
  return this.findOne(query)
    .then(user => user && user.comparePassword(auth.password))
    .catch(console.error);
};

// TODO JSDocs Comments
users.methods.comparePassword = function(password) {
  return bcrypt
    .compare(password, this.password)
    .then(valid => (valid ? this : null));
};

// TODO JSDocs Comments
users.methods.generateToken = function() {
  let tokenData = {
    id: this._id
  };
  return jwt.sign(tokenData, process.env.SECRET || 'changeit');
};

module.exports = mongoose.model('users', users);
