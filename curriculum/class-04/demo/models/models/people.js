'use strict';

const DataModel = require('./model.js');

class People extends DataModel {
  constructor(file) {
    super(
      {
        id: { required: true, type: 'uuid' },
        firstName: { required: true, type: 'string' },
        lastName: { required: true, type: 'string' },
        team: { type: 'uuid' }
      },
      file
    );
  }
}

module.exports = People;
