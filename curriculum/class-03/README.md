# Class 03 - Async

|[Lecture Video](https://frontrowviews.com/Home/Event/Details/5d8e8678bdb995374c44c806) | [Lab Video](https://frontrowviews.com/Home/Event/Details/5d8e8551bdb995374c4335fe) |
|----|----|

## Learning Objectives
* Understand how synchronous and asynchronous code runs in the JavaScript runtime
* Manage asynchronous data flow using error-first callbacks
* Manage asynchronous data flow using Promises
* Manage asynchronous data flow using `async`/`await`
* Utilize the asynchronous methods from built-in NodeJS modules
* Work with raw data using Buffers
* Test asynchronous code using a BDD testing framework

## Outline

### JavaScript Runtime
There are many JavaScript runtimes. V8 is the name of the runtime used in the Chrome web browser and in NodeJS. V8 will be used in the following descriptions of how a JavaScript runtime works, but other browsers and JavaScript environments have the same behaviors.

### Hoisting
In JavaScript, variable and function declarations get "hoisted" to top of your code before it runs. When the JavaScript runtime executes your code, it first reorganizes what you have written so that all variable and function definitions are at the top of their current function scope. Developers that are new to JavaScript often find hoisting strange, but it is a feature of the language that cannot be disabled. Learn to use hoisting as a tool!

``` javascript
// code before hoisting (how a programmer wrote the code)
var chars = ['a', 'b', 'c'];
var result = upperCharList(chars);
console.log(result);

function upperCharList(list){
  var result = [];
  for(var i=0; i<list.length; i++){
    var upper = list[i].toUpperCase());
    result.push(upper);
  }
  return result;
}
```

``` javascript
// after hoisting (how the code actually runs)
var chars, result;

function upperCharList(list){
  var result, i, upper;
  result = [];
  for(i=0; i<list.length; i++){
    upper = list[i].toUpperCase();
    result.push(upper);
  }
  return result;
}

chars = ['a', 'b', 'c'];
result = upperCharList(chars);
console.log(result)
```

### The Call Stack
In JavaScript, every synchronous function that is called is pushed onto a stack in V8. The function on top of the stack is always the function that is currently executing. When the function that is running returns, it is"popped" off a stack. This stack is referred to as a **Call Stack**. V8 has a single Call Stack, therefore only one function can be running at a time. The Call Stack is always printed to the screen when an error is thrown, which helps developers to trace where errors have occurred in their code.

### The Callback Queue
When an asynchronous function called `foo` is invoked, it is pushed onto the V8 **call stack**. Then `foo` makes a call to a browser/NodeJS API and passes on a callback. Then the `foo` function returns and is popped off of the call stack, and V8 keeps on executing synchronous code. Meanwhile, the external browser/NodeJS API is still running. Once the external API has completed it's task, it will pass any results into the callback and enqueue the callback on V8's **callback queue**. Functions stored on the callback queue are not executing, they are only waiting to be put onto the call stack.

### The Event Loop
The event loop is in charge of dequeueing callbacks from the V8 callback queue and pushing them onto the call stack. It has one rule for doing this; it will only push a callback on to the call stack if the call stack is empty.

##### When the call stack pops its last function
  * The event loop will check if any callbacks are in the callback queue
  * If it finds a callback it will dequeue it from the callback queue and push it onto the call stack

##### When both the call stack and callback queue are empty
  * The event loop will watch the callback queue for new callbacks
  * When a callback is included it will immediately be dequeued and pushed onto the call stack

### JavaScript Callback Pattern
NodeJS made the decision to have all asynchronous events be handled using error-first callbacks. The main advantage of this is that all asynchronous methods have a consistent interface. This means that when you are working with asynchronous NodeJS code, you can always assume how the callback is going to be formatted, making your life as a developer much easier!

Having a consistent callback interface has also made it possible for libraries to be written that assist JavaScript developers in handling complex async code!

**A callback says, "Hey, JavaScript, you go ahead do some work. I don't care how long it takes, and I'm going to go ahead and keep on working ... but when you're all done, here's a function I want you to run."**

That function is the callback, and it operates on a nicely standardized signature.

### Defining an Error First Callback
* A callback is simply a function that is passed as an argument to another function
* "Error-first" callbacks have the function signature `(err, result) => {}`
  * The first parameter is reserved for an error
    * The value will be `null` or `undefined` if there is no error
  * The second parameter is reserved for any successful response data
    * The value will be `null` or `undefined` if there is no data
    * Not every NodeJS method passes data into the callback
    * In methods that do not resolve data, success is defined as a lack of an error

### JavaScript Promise Pattern (promises)
 Promises are one way to manage asynchronous actions. Like a callback, a promise allows you to execute some code and "move on", allowing for that code to take as long as it needs to run.  Unlike a callback, the syntax of a promise feels and reads a bit more "inline" ...

 **A promise says, "Hey, JavaScript, you go ahead and do some work.  I don't care how long it takes and I'm going to go ahead and keep working ... but let me know when you're done `.then()` give me the data and let me deal with it myself"**

``` javascript
console.log('Start');
goAndGetSomeData(params)
  .then( someData => {
    // that goAndGetSomeData function is done, and it seems to have returned `someData` ...
    // do some amazing work with someData and then return `something`
    return something;
  })
  .catch( error => {
    // if there was a problem, catch it and something with the error
  });
console.log('After');

```

### File System I/O
The NodeJS `fs` module gives NodeJS programmer's the ability to perform file system operations. The `fs` module has the ability to Create, Read, Update, and Delete files using many different methods. Most methods on the `fs` module have synchronous and asynchronous implementations. Synchronous methods end in _Sync_, like `fs.readFileSync`, and asynchronous method's lack the word _Sync_ in their names, like `fs.readFile`. This naming pattern is true across all of the built-in NodeJS modules. Synchronous methods block JavaScript from executing further code until they finish. This can be a huge drawback, therefore synchronous methods are rarely used in web server development.

``` javascript
// example of how to copy a file using NodeJS
const fs = require('fs')
const inputFile = './path/to/input.txt'
const outputFile = './path/to/output.txt'

fs.readFile(inputFile, (err, buffer) => {
  if(err) throw err
  fs.writeFile(outputFile, buffer, (err) => {
    if(err) throw err
    console.log('done')
  })
})
```

### Buffer
Buffers are NodeJS built-in constructors for working with binary data, also called raw data. Buffer is a global constructor in NodeJs. When reading from the filesystem, network, or elsewhere, data is usually presented to the developer in the form of a buffer. Buffers are an array of bytes, with many useful methods for reading and writing data. The data in buffers can be decoded as integers, floating point numbers, and strings.

 ``` javascript
   var data = Buffer.from('welcome to bufferville') // create a buffer using a string
   console.log(data) // looks like a hex when console logged, but it's a buffer, not a string!!!!

   console.log(data.toString()) // prints the original string
   console.log(data.toString('hex')) // prints the strings data as hex digits
   console.log(data.toString('utf8', 0, 1)) // prints the character stored in the first byte
   console.log(data.readUInt8()) // prints the integer stored in the first byte
   console.log(data.readFloatLE()) // prints the floating point number stored in the first 4 bytes
 ```

### Asynchronous Testing
Testing frameworks like **Jest** support testing asynchronous code by giving us a callback to invoke when our assertions are done. Tests have two seconds to call a  `done` callback before a timeout error occurs. The testing frameworks will treat any value passed into the `done` callback as an error.

``` javascript
// example using done in "it" tests
it('true should be true', (done) => {
  setTimeout(() => {
    expect(true).toBe(true)
    done()
    // done('any value`) // passing a value into done makes the test fail
  }, 0)
  // invoking done here will be a false positive
})
```

In Jest, when testing a promise, the `done()` callback is unnecessary. Rather, you can simply return the promise with your `expect()` clause in the `.then()` or `.catch()` blocks and jest will handle it for you.

``` javascript
// example using done in "it" tests
it('true should be true', () => {
  return somePromiseFunction()
    .then( result => {
      expect(result).toBeTruthy();
    })
})
```

### Mock Testing
When testing outside functionality (such as a server, database, or a filesystem), it's customary to "mock" that functionality rather than use the real thing.

* Your tests should never pass or fail as a result of a failure or unavailability of an external system.
* If you are testing a function that processes the JSON that it gets from a remote API, your test should be focused on it properly processing data, not the availability of that data.
* So ... you typically "mock" the remote resource and get yourself some fake data to test with.

[Mock Functions](https://jestjs.io/docs/en/mock-functions)

[Manual Mocking](https://jestjs.io/docs/en/manual-mocks)

