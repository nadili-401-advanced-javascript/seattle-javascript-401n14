'use strict';

const { startDB, stopDB } = require('./supertester.js');
const auth = require('../src/auth/middleware.js');
const Users = require('../src/auth/users-model.js');
const Roles = require('../src/auth/roles-model.js');

let users = {
  admin: {
    username: 'sarah',
    password: 'sarahpassword',
    email: 'sarah@email.com',
    role: 'admin',
  },
  editor: {
    username: 'bill',
    password: 'billpassword',
    email: 'bill@email.com',
    role: 'editor',
  },
  user: {
    username: 'rene',
    password: 'renepassword',
    email: 'rene@email.com',
    role: 'user',
  },
};

let roles = {
  admin: {
    role: 'admin',
    capabilities: ['create', 'read', 'update', 'delete', 'superuser'],
  },
  editor: { role: 'editor', capabilities: ['create', 'read', 'update'] },
  user: { role: 'user', capabilities: ['read'] },
};

beforeAll(async done => {
  let users = new Users();
  let roles = new Roles();
  await startDB();
  const admin = await users.create(users.admin);
  const editor = await users.create(users.editor);
  const user = await users.create(users.user);
  const adminRole = await roles.create(roles.adminRole);
  const editorRole = await roles.create(roles.editorRole);
  const userRole = await roles.create(roles.userRole);
  done();
});

afterAll(stopDB);

/* describe('xxx', () => {
  it('xxx', () => { }); 
}); */
