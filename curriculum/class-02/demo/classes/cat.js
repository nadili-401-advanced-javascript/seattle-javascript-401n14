"use strict";

const Animal = require("./animal.js");

// Cats are animals (extends) >> this is inheritance!
class Cat extends Animal {
	constructor(name) {
		super();
		this.name = name;
		this.species = "cat";
	}

	// Cat has a unique function, purr()
	purr() {
		console.log(`${this.name} starts to purr softly!`);
	}

	// Cat overwrites a function in Animal, pet()
	pet() {
		console.log(
			`You try to pet ${this.name}, but they don\'t seem to like it.`
		);
	}
}

module.exports = Cat;
