"use strict";

// Functional Programming Demo

let numbers = [1, 2, 3, 4, 5, 6];
console.log("Orginal array: ", numbers);
// We want to do a bunch of different operations on
// this array

// -------------------------------------------
// First operation:
// Square (a * a) each item in the array

// Pure function
// don't change the parameters
// immutable
// return a new item


console.log("Squared Array: ", squared);
console.log("Original Array (again): ", numbers);

// -------------------------------------------

// Second operation:
// Remove odd numbers in the array

let filtered = numbers.filter(val => val % 2 === 0);

console.log("Filtered Array: ", filtered);
console.log("Original Array (again): ", numbers);

// -------------------------------------------

// Third operation:
// Sum all the items in an array
function reduceMe(red, val) {
	return red + val;
}

let reduced = numbers.reduce((red, val) => red + val);
console.log("Reduced Array: ", reduced);
console.log("Original Array (again): ", numbers);





