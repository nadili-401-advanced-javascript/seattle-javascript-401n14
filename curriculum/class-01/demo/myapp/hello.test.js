'use strict'

const hello = require("./hello.js");

// describe is jest function
// <- parametrs (name of my test group, function with all the tests) 
describe('my-test', () => {

    //it is a JEST fucntion!
    //it (name of a test, function that does the test)
    it ('test sayHello', () => {
        // define expectation
        //so that the test can pass or fail
        let result = hello.sayHello();

        //when there's no parameter
        //return "NeedParameter"

        //expect result

        expect(result).toBe("NeedParameter");

    }); 
});