// The bind() function comes in handy when you
// have nested functions that need to use `this`.

// In this example, `runBadly()` doesn't understand
// what `this` is. We have to manually bind it to
// the correct `this` for it to understand.

// In `runGoodly()`, we use bind to let the function
// understand what `this` is

let myObject = {
  hello: function() {
    console.log("Hello!");
  },

  goodbye: function() {
    console.log("Goodbye!");
  },

  // this function is a weird one!
  // it takes in another function as a
  // parameter, and calls it
  callback: function(fn) {
    fn.call();
  },

  // here, we're gonna have a hard time knowing
  // what this is!
  runBadly: function() {
    // we hit issues with this when we do callbacks
    this.callback(function() {
      console.log("I'm running badly!");
      this.hello();
      this.goodbye();
    });
  },

  // here, at the end of the callback function
  // definition, we bind it to the current context.
  // Now, when we enter the callback function, we
  // are also given a `this` we can use
  runGoodly: function() {
    this.callback(
      function() {
        console.log("I'm running good!");
        this.hello();
        this.goodbye();
      }.bind(this)
    );
  }
};

// the output of both is the same
myObject.runBadly();
myObject.runGoodly();
