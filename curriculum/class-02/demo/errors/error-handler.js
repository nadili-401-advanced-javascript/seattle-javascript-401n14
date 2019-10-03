"use strict";

class Bug extends Error {
	constructor({
		problem,
		cause,
		level = 0,
		timestamp = new Date().toISOString()
	}) {
		super(
			`__ERROR__ ${problem}: ${cause} (LEVEL ${level}) (TIMESTAMP ${timestamp})`
		);
		this.problem = problem;
		this.cause = cause;
		this.level = level;
		this.timestamp = timestamp;
		// console.log(this);
	}

	dealWithBug() {
		console.log("I'm dealing with it!");
	}
}

module.exports = Bug;
