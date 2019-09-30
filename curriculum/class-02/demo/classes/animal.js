"use strict";

// Animal Class
class Animal {
  // When we create a new animal, this
  // is all the data we need
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  info() {
    console.log(`${this.name} is a ${this.species}.`);
  }

  eat() {
    console.log(`${this.name} eats food.`);
  }

  walk() {
    console.log(`${this.name} walks around.`);
  }

  pet() {
    console.log(`You pet ${this.name}.`);
  }
}

module.exports = Animal;
