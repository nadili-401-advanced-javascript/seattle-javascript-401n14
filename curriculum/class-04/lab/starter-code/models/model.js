'use strict';

const fs = require('fs');
const util = require('util');
const uuid = require('uuid/v4');
// const validator = require('../lib/validator.js');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Model {
  constructor(schema, file) {
    this.schema = schema;
    this.file = file;
    this.database = [];
  }

  // Initialize the database
  async load() {
    // read the file asynchronously and save the results in
    // contents
    let contents = await readFile(this.file);

    // .then() (b/c of await)
    this.database = JSON.parse(contents.toString().trim());
    return this.database;
  }

  // CRUD: create
  async create(item) {
    // item = the new object we're gonna write to our database

    // first, check that item is the right format
    // check it matches the schema
    // all the required fields are there
    // all the fields are of the right type
    // ... is the spread operator
    // it expands the contents of the variable so that
    // you can copy it into another object/array

    let record = { id: uuid(), ...item };
    let isValid = this.sanitize(item);

    if (isValid) {
      // let's create the thing!
      // first, add it to our local database object
      this.database.push(record);

      // write my changed database back to the file
      await writeFile(this.file, JSON.stringify(this.database));

      return record;
    }

    return 'Invalid schema';
  }

  // CRUD: read
  async read(key, val) {
    // go through this.database array
    // if the object at this.database[indx] has a key
    // val pair that matches the parameter val
    // return that object

    let found = {};

    // this is optional, but recommended
    // in case you forgot to load, made some
    // change and didn't update this.database, etc
    await this.load();

    this.database.forEach(item => {
      if (item[key] === val) found = item;
    });

    return found;
  }

  // CRUD: update
  async update(id, item) {}

  // CRUD: delete
  async delete(id) {}

  // Validation
  sanitize(item) {
    // do something to check that item is valid
    // against this.schema

    return true;
  }
}

module.exports = Model;
