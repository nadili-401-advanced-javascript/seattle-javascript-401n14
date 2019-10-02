"use strict";

const Animal = require("./animal.js");
const Dog = require("./dog.js");
//const cat = require('./cat.js');

const cow = new Animal("Bessie", "cow");

cow.info(); // print bessie
cow.name = "Sunflower"; // ?? can we change the name?
cow.info(); // let's check

cow.setName("Lily"); // prob should set the name
cow.info();

cow.eat();
cow.walk();
cow.pet();

const molly = new Dog("Molly");

molly.info();




