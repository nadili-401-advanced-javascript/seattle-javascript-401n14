'use strict';

const mongoose = require('mongoose');
const teams = require('./teams-schema.js');

const peopleSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  lastUpdated: { type: Number, required: false },
  _team: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'teams'
  },
  birthday: { type: Date, required: true },
  likes: {
    type: String,
    required: true,
    lowercase: true,
    enum: ['cats', 'dogs', 'none', 'both']
  }
});

// Virtual = not really there
// Input/Output is defined -- but the way to get to the output
// is kinda faked

// on mongoose.Schema object:
// we can use
// .virtual(virtualKey).get(function)
// .virtual(virtualKey).set

// peopleSchema.fullName
// when we 'get', we just return the peopleSchema.firstName
// plus the peopleSchema.lastName

peopleSchema.virtual('fullName').get(function() {
  console.log('GETTING A FAKE THING');
  return this.firstName + ' ' + this.lastName;
});

peopleSchema.virtual('fullName').set(function(name) {
  let str = name.split(' ');

  this.firstName = str[0];
  this.lastName = str[1];
});

// Document Middleware means: I'm trying to get/save/etc. a SINGLE
// RECORD (in this case a single person). I want my function to
// use `this` as a way to reference that SINGLE RECORD/single person
// EX: Sarah Smalls

// Query Middleware means: I'm trying to search with a query to return
// ONE OR MANY RECORDS. I want my function to use `this` as a way to
// reference the QUERY I'm searching by.
// EX: {likes: 'cats'}

const setLastUpdated = function(next) {
  // Here, THIS should be a single RECORD / DOCUMENT
  // Aka a single person
  this.lastUpdated = Date.now();
  console.log('PRE Updated:', this.lastUpdated);
  console.log('TIME FOR SYNC COMMAND', Date.now());
  next();
};

const setPostLastUpdated = function(data, next) {
  // Here, THIS should be a single RECORD / DOCUMENT
  // Aka a single person
  //console.log('POST DATA:', data);
  this.lastUpdated = Date.now();
  console.log('POST Updated:', this.lastUpdated);

  next();
};

peopleSchema.pre('save', setLastUpdated);
peopleSchema.pre('updateOne', { document: true }, setLastUpdated);

peopleSchema.post('save', setPostLastUpdated);
peopleSchema.post('updateOne', { document: true }, setPostLastUpdated);

const populateTeam = function(next) {
  this.populate('_team').then(() => {
    next();
  });
};

peopleSchema.post('find', populateTeam);
peopleSchema.post('findOne', populateTeam);

module.exports = mongoose.model('people', peopleSchema);
