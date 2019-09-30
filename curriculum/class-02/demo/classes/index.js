"use strict";

//const Animal = require("./animal.js");
//const dog = require('./dog.js');
//const cat = require('./cat.js');

//const cow = new Animal("Bessie", "cow");

const cow = {
	name: "Bessie",
	species: "cow",
	info() {
		console.log(`${this.name} is a ${this.species}.`);
	},
	eat() {
		console.log(`${this.name} eats food.`);
	},
	walk() {
		console.log(`${this.name} walks around.`);
	},
	pet() {
		console.log(`You pet ${this.name}.`);
	}
};

cow.info();
cow.eat();
cow.walk();
cow.pet();
