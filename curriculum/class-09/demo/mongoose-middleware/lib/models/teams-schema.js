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
  }
});

module.exports = mongoose.model('teams', teamsSchema);
