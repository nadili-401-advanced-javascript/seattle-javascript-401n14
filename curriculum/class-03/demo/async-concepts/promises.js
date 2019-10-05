"use strict";

// Promises DECLARE functionality
// A Promise is a class! It holds the eventual
// result of an async operation. When the async
// operation completes, it can either result in
// a value or an error. A promise holds three
// states: pending, fulfilled/resolved or rejected

function apiCall(str) {
	let random = Math.floor((Math.random() + 1) * 1000);

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(str);
			resolve({ data: str });
			// after resolve do .then()
			// error checking
			/* if (payload is an error)
				reject(); 
			if (payload is success)
				resolve(payload.data); 
			*/
		}, random);
	});
}

apiCall("X");
apiCall("Y");
apiCall("Z");

let promise = apiCall("A - promises!");

promise
	.then(data => {
		console.log(data);
		return apiCall(notAVariable);
	})
	.then(data => {
		console.log(data);
		return apiCall("C - promises!");
	})
	.catch(err => {
		console.error("Error!");
	});

// We use a random number for setTimeout to simulate that
// the response time for an api can be variable

// We return a Promise object, which has a
// function given to it as a parameter. This
// function contains the async code to run,
// as well as determining when to resolve or
// reject the promise.

// Now let's try to do these in order, even
// though they are async:

// By chaining .then and .catch, we can create a
// synchronous way to do async!
