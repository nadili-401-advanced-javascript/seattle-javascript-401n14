'use strict';

const fs = require('fs');
const util = require('util');
const uuid = require('uuid/v4');
const validator = require('../lib/validator.js');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Model {
  constructor(schema, file) {
    this.schema = schema;
    this.file = file;
    this.database = [];
  }

  // Initialize the database
  async load() {}

  // CRUD: create
  async create(item) {}

  // CRUD: read
  async read(key, val) {}

  // CRUD: update
  async update(id, item) {}

  // CRUD: delete
  async delete(id) {}

  // Validation
  sanitize(item) {}
}

module.exports = Model;
