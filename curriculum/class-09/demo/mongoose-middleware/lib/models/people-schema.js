'use strict';

const mongoose = require('mongoose');

const peopleSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  // fullName = firstName + ' ' + lastName
  _team: { type: mongoose.Schema.Types.ObjectId, required: false },
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

module.exports = mongoose.model('people', peopleSchema);
