"use strict";

// Create an object named person
let person = { name: "John" };

// What does `this` mean?
// How can we change what `this` is?
function sayHello(city, state) {
	console.log("this is: ", this);
	// console.log(`${this.name} is from ${city}, ${state}`);
}

// The apply function will let you
// apply a context (basically, an object
// that `this` is) when calling a function
// sayHello.apply(person, ["Seattle", "WA"]);
