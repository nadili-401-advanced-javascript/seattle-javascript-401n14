'use strict';

const Teams = require('./models/teams.js');
const People = require('./models/people.js');
const uuidValidate = require('uuid-validate');

let people = new People(process.argv.slice(2)[0]);
let teams = new Teams(process.argv.slice(3)[0]);

async function loadData() {}

async function createPerson() {}

async function readPerson() {}

async function updatePerson() {}

async function deletePerson() {}

async function printTeams() {}

async function runOperations() {}

runOperations();
