'use strict';

const mongoose = require('mongoose');

const teams = mongoose.Schema({
  name: { type: String, required: true },
  color: {
    type: String,
    required: true,
    lowercase: true,
    enum: ['red', 'blue', 'yellow']
  }
});

module.exports = mongoose.model('teams', teams);
