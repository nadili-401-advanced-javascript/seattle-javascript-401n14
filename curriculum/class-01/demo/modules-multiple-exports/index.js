"use strict";

// Here we import a module located in the
// file ./lib/hello.js, and we name it "hello"
const hello = require("./lib/hello.js");

// Let's try to print out what the variable
// "hello" actually stored. We should see
// from our console that it's a module object
// with multiple functions
console.log(hello);

// We see from ./lib/hello.js that one of the
// things it exports is "myModuleName". Lets
// see if we can access that export
console.log(hello.myModuleName);

// After looking at ./lib/hello.js, we know
// there's an exported function called "sayHello".
// We'll try to use that here:
let greeting = hello.sayHello("Sonia");
console.log(greeting);

// We also know ./lib/hello.js exports a function
// called "sayGoodbye". Lets try that as well:
console.log(hello.sayGoodbye());

// What about the "getMessage" function? We see
// it in ./lib/hello.js, so can we use it?
// console.log(hello.getMessage("Sonia"));
