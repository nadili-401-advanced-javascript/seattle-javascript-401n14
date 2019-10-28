'use strict';

const supertester = require('./supertester.js');
const auth = require('../lib/auth/auth-middleware.js');
const Users = require('../lib/models/users-model.js');

let userData = {
  admin: { username: 'admin', password: 'password', role: 'admin' },
  editor: { username: 'editor', password: 'password', role: 'editor' },
  user: { username: 'user', password: 'password', role: 'user' }
};

let users = new Users();

beforeAll(async done => {
  await supertester.startDB();
  const adminUser = await users.create(userData.admin);
  const editorUser = await users.create(userData.editor);
  const userUser = await users.create(userData.user);
  done();
});

afterAll(supertester.stopDB);

/* describe('test', () => {
  it('does something', () => {
    
  }); 
}); */
