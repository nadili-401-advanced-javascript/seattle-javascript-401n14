"use strict";

const Animal = require("./animal.js");

// Dogs are animals (extends) >> this is inheritance
class Dog extends Animal {
	constructor(name) {
		super();
		this.name = name;
		this.species = "dog";
	}

	// Dog has a unique function, bark()
	bark() {
		console.log(`${this.name} says WOOF WOOF!`);
	}

	// Dog overwrites a function in Animal, pet()
	pet() {
		console.log(`You scratch ${this.name} behind the ears.`);
	}
}

module.exports = Dog;
