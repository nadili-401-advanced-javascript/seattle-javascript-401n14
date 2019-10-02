"use strict";

// Create an object named person
let person = { name: "John" };

// What does `this` mean?
// How can we change what `this` is?
function printInfo(city, state) {
	console.log("This is: ", this);
	// console.log(`${this.name} lives in ${city}, ${state}.`);
}

printInfo();

// The apply function will let you apply a context!
// A context defintes what `this` is.

// function.apply(thisObject, [params])
printInfo.apply(person, ["Seattle", "WA"]);

// The difference between call and apply:
// call will require you to have the number of parameters static
// apply lets you have an array of any size in the case of
// optional or unknown amounts of parameters
