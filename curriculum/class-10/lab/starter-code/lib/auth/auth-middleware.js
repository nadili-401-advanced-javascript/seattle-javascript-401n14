'use strict';

const Users = require('../models/users-model.js');

let users = new Users();

// TODO JSDocs Comments
async function _authBasic(authString, req, res, next) {
  let base64Buffer = Buffer.from(authString, 'base64');
  let bufferString = base64Buffer.toString();
  let [username, password] = bufferString.split(':');
  let auth = { username, password };

  let user = await users.authBasic(auth);
  return _authenticate(user, req, res, next);
}

// TODO JSDocs Comments
function _authenticate(user, req, res, next) {
  if (user) {
    req.user = user;
    req.token = user.generateToken();
    next();
  } else {
    _authError(req, res, next);
  }
}

// TODO JSDocs Comments
function _authError(req, res, next) {
  next({
    status: 401,
    statusMessage: 'Unauthorized',
    message: 'Invalid User ID/Password'
  });
}

// TODO JSDocs Comments
module.exports = (req, res, next) => {
  try {
    let [authType, authString] = req.headers.authorization.split(/\s+/);

    switch (authType.toLowerCase()) {
      case 'basic':
        return _authBasic(authString, req, res, next);
      default:
        return _authError(req, res, next);
    }
  } catch (e) {
    return _authError(req, res, next);
  }
};
