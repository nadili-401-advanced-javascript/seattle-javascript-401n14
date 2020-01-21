'use strict';

// argument 1 = a number
// argument 2 = upper bound - the max number possible (length of array, max num of buckets)

// return : adjusted number such that it's not out-of-bounds

// argument 1 = 5,002
// argument 2 = 5,000

// return =  2

// a % b << 'mod' >> divide a by b but only return the REMAINDER

const isEven = num => {
    return num % 2 === 0; // remainder of 0 = even
    // remainder of 1 = odd
};

let args = process.argv.slice(2);
let a = parseInt(args[0]);
let b = parseInt(args[1]);

console.log(a % b);
