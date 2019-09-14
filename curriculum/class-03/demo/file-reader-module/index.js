'use strict';

const fs = require('fs');
const fileReader = require('./lib/reader.js');

let file = `${__dirname}/data/file.txt`;

// A simple error first callback that regurgitates our file contents
let showFileContents = (err,data) => {
  if(err) { throw err; }
  console.log(data);
};

// Use our custom file reader instead of normal fs, so that we can change our interface to it ...
// Invoke our file reader.  Note that the "reader" module is expected to simply export a function, not an object
// We should be able to call it directly with a file and any callback we like.

fileReader(file, showFileContents);

// Using our custom reader as a promise ...
// fileReader( file )
//   .then( contents => showFileContents(null, contents ) )
//   .catch( showFileContents );
