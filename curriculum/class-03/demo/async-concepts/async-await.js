"use strict";

// async/await is just a nice layer on
// top of Promises. It still uses promises in
// the background

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

async function callApis() {
	let data = await apiCall("A - async/await!");
	console.log(data);
	data = await apiCall(notAVariable);
	console.log(data);
	data = await apiCall("C - async/await!");

	// returns a promise
}

let promise = callApis().catch(err => {
	console.error("Error!");
});

console.log("I'm not gonna wait");






