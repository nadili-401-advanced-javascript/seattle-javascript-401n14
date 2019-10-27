'use strict';

const mongoose = require('mongoose');
const people = require('./people-schema.js');

const teamsSchema = mongoose.Schema({
  name: { type: String, required: true },
  color: {
    type: String,
    required: true,
    lowercase: true,
    enum: ['red', 'blue', 'yellow']
  },
  members: [
    { type: mongoose.Schema.Types.ObjectId, required: false, ref: 'people' }
  ]
});

const populateMembers = function(data, next) {
  this.populate('members').then(() => {
    next();
  });
};

//teamsSchema.post('find', populateMembers);
//teamsSchema.post('findOne', populateMembers);

module.exports = mongoose.model('teams', teamsSchema);
