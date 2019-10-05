"use strict";

// We want to use the file system, so
// we require fs
const fs = require("fs");
const util = require("util");

function read(file, onDone) {
	// We want to read the file, and then
	// do some error-first handling of the response

	fs.readFile(file, (err, data) => {
		if (err) onDone(err, data);
		else onDone(err, data);
	});
}

// What if we wanted to export this as a promise instead?
// fs was designed for a callback structure,
// but we can force it to return a promise using
// the util function promisify
const promise = util.promisify(fs.readFile);

function readPromise(file) {
	return promise(file)
		.then(data => data.toString().trim())
		.catch(error => error);
}

module.exports = read;
