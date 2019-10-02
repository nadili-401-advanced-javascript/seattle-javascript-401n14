"use strict";

const Animal = require("./animal.js");

// Dogs are animals (extends)
// inheritance!!
class Dog extends Animal {
	constructor(name) {
		super();
		this.name = name;
		this.species = "dog";
		// call the constructor of animal
		// give it name
		// give it a set species of "dog"
	}
}

module.exports = Dog;
