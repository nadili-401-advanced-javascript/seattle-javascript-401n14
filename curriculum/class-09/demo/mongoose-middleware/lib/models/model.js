'use strict';

const mongoose = require('mongoose');

class Model {
  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {
    if (mongoose.Types.ObjectId.isValid(_id))
      return this.schema.findOne({ _id });
    else return null;
  }

  getFromField(query) {
    if (query) return this.schema.find(query);
    else return this.schema.find({});
  }

  create(record) {
    console.log('MODEL');
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  update(_id, record) {
    return this.schema.updateOne({ _id }, record);
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

  count(query) {
    if (query) return this.schema.countDocuments(query);
    else return this.schema.countDocuments({});
  }
}

module.exports = Model;
