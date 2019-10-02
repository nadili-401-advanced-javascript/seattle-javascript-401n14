"use strict";

let john = { name: "John", age: 49 };
let cathy = { name: "Cathy", age: 21 };

function printAge(day, time) {
	return `${this.name} is ${this.age} years old on ${day} at ${time}`;
}

// call is a function that lets us run
// a function and provide it a context
// that the keyword `this` will use

// function.call(thisObject, param1, param2, param3 ...);
console.log(printAge.call(john, "Tuesday", "2:00pm"));
console.log(printAge.call(cathy, "Tuesday", "11:15am"));
