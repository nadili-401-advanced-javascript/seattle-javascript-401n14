"use strict";

// We want to export multiple things this time.
// Lets say that this module returns an OBJECT
// instead of a function this time
module.exports = exports = {};

// We want to add some data to this exported object.
// Lets start simple with a name for the module!
exports.myModuleName = "401js Hello World Module";

// We'll also export a function that takes a
// name as a parameter and calls another function
// within this same file.
// "getMessage" is defined on line 27
exports.sayHello = name => {
	return getMessage(name);
};

// We're exporting another function, which simply
// returns a string
exports.sayGoodbye = () => {
	return "Goodbye";
};

// Remember how "sayHello" called "getMessage"?
// Here's the definition for that. Notice that
// this function IS NOT added to the exports
// object. Does this mean it's not accessible
// to other files?
const getMessage = name => {
	return `Hello, ${name}`;
};
