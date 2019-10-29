'use strict';

const Model = require('./model.js');
const schema = require('./users-schema.js');

class Users extends Model {
  constructor() {
    super(schema);
  }

  // will return a promise
  findUser(creds) {
    // this is just a class model function wrapper for a mongoose function
    // in the mongoose model
    return this.schema.findUser(creds);
  }

  verify(token) {
    return this.schema.verify(token);
  }
}

module.exports = Users;
