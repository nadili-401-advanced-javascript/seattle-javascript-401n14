'use strict';

const Model = require('./model.js');
const schema = require('./users-schema.js');

class Users extends Model {
  constructor() {
    super(schema);
  }

  // TODO JSDocs Comments
  authBasic(auth) {
    return this.schema.authenticateBasic(auth);
  }
}

module.exports = Users;
