"use strict";

// Bring in some module (perhaps one that you've written) that is
// designed to deal with specifially formatted errors
const Bug = require("./error-handler.js");

let person = {
  firstName: "Sonia",
  lastName: "Kandah",
  pets: {
    kitto: { name: "Kitto", age: 5 },
    bernie: { name: "Bernie", age: 8 }
  }
};

console.log(person.pets.kitto.name);
// But what if you try to access something that
// doesn't exist?
// console.log(person.pets.molly.name);

// console.log(pet);

let petName = "";

try {
  petName = person.pets.molly.name;
} catch (e) {
  console.log("That pet doesn't exist!");
}

// Know that you can always throw your own errors ...
throw new Bug("You really messed up!");
throw new Error("You really messed up again!");

// but better would be to implement an error handling module
// and use that within all of your code.  This would allow you
// control how it logs, looks, and functions.  For example...

try {
  pet = person.pets.molly;
} catch (e) {
  let bugInfo = {
    severity: 3,
    reason: "Didn't exist",
    timestamp: new Date(),
    message: e.message,
    file: e.file,
    position: e.column,
    stack: e.stack
  };

  let bug = new Bug(bugInfo);
  bug.dealWithBug();
}
