'use strict';

const mongoose = require('mongoose');

class Model {
  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {
    console.log('ID?', mongoose.Types.ObjectId.isValid(_id));

    if (_id) return this.schema.findOne({ _id });
    else return this.schema.find({});
  }

  getFromField(query) {
    if (query) return this.schema.find(query);
    else return this.schema.find({});
  }

  create(record) {}

  update(_id, record) {}

  delete(_id) {}

  count(query) {}
}

module.exports = Model;
