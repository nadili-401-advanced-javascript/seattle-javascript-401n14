"use strict";

module.exports = exports = {};

exports.readFile = (file, cb) => {
	// what fs.readFile stuff are we testing?

	// when there's a file path that doesn't exist -
	// send callback an error and no data
	if (file.match(/bad/i)) {
		cb("Invalid");
	} else {
		cb(undefined, Buffer.from("File Contents"));
	}
};
