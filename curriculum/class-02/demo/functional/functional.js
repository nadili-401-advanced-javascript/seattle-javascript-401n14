"use strict";

// Functional Programming Demo

let numbers = [1, 2, 3, 4, 5, 6];

// We want to do a bunch of different operations on
// this array

// -------------------------------------------
// First operation:
// Square (a * a) each item in the array

let numbersSquared = numbers;

for (let i = 0; i < numbersSquared.length; i++) {
  let val = numbersSquared[i];
  numbersSquared[i] = val * val;
}

console.log("Squared Array: ", numbersSquared);
console.log("Original Array (again): ", numbers);

// -------------------------------------------

// Second operation:
// Remove odd numbers in the array

// -------------------------------------------

// Third operation:
// Sum all the items in an array

// -------------------------------------------

// Forth operation:
// Sum all the items in an array

// -------------------------------------------

