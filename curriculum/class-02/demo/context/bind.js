/**
 * A common issue you see where bind comes in handy is when you
 * have nested functions that need to use the 'this' in the
 * larger object, outside of their esoteric scope.
 *
 * Here, in 'runBadly()', you see that we have to make a new
 * pointer to 'this' (my) so that we can reference the correct
 * contextual this.
 *
 * In runGoodly(), we bind the right context to the function
 * directly, that you can refer to the outer 'this' as 'this'
 * making your code much more readable.
 */
let myObject = {
  foo: function() {
    console.log("foo");
  },

  bar: function() {
    console.log("bar");
  },

  callback: function(fn) {
    fn.call();
  },

  runBadly: function() {
    this.callback(function() {
      console.log("I'm running badly!");
      this.bar();
      this.foo();
    });
  },

  runGoodly: function() {
    this.callback(
      function() {
        console.log("I'm running good!");
        this.bar();
        this.foo();
      }.bind(this)
    );
  }
};

// the output of both is the same
myObject.runBadly();
myObject.runGoodly();
