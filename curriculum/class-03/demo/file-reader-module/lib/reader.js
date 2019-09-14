'use strict';

const fs = require('fs');
const util = require('util');

// Wrap the fs.readFile method with our interface so that we can properly test it modularly.
module.exports = exports = (file, callback) => {
  fs.readFile( file, (err, data) => {
    if(err) { callback(err); }
    else { callback(undefined, data.toString().trim()); }
  });
};

// What if we wanted to export this as a promise instead?
// const readFilePromise = util.promisify(fs.readFile);
// module.exports = exports = (file) => {
//   return readFilePromise(file)
//     .then(contents => contents.toString().trim() )
//     .catch( error => error );
// };
