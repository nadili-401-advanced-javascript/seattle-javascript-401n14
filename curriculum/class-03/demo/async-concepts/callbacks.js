"use strict";

// Callbacks OFFLOAD functionality.
// Start an async process, and send it a callback function
// When the async process finishes, run the callback function

// We'll simulate an async function that calls an api
// Behind the scenes it's just setTimeout

// We use a random number for setTimeout to simulate that
// the response time for an api can be variable

// Multiple async events in a row
// Because they are async, they may not necessarily
// run in order.

// When we pass a callback to our apiCall, we
// can enforce things to be run in a certain order,
// even though they're async!

// The above code works, but it's not really pretty!
// Promises help a little
