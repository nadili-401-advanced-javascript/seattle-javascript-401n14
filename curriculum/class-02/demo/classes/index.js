"use strict";

const Animal = require("./animal.js");
const Dog = require("./dog.js");
const Cat = require("./cat.js");

const cow = new Animal("Bessie", "cow");

cow.info(); // print bessie
cow.name = "Sunflower"; // ?? can we change the name?
cow.info(); // let's check
cow.pet();

const molly = new Dog("Molly");

molly.info();
molly.pet(); // is this unique from Animal.pet?
molly.bark();

const kitto = new Cat("Kitto");

kitto.info();
kitto.pet(); // is this unique from Animal.pet?
kitto.purr();
