# LAB: Async

The javascript V8 engine is great at doing things "asynchronously". As a coder, you'll need to work in this lab to step out of the iterative coding mindset and use promises and `async`/`await` to read a file. You'll also need to convert buffers into text into objects and back again.

## Requirements
**Starter Code: `starter-code/`**

In this lab, you will be writing an application which will modify a file on your computer. In `data/person.json`, you can find a sample file which should serve as a template for the kind of files your application will be using. Use the Node `fs` package/module to get file read/write functionality within your application. 

### Application Execution
* When starting your application from command line, your application should take in a file name as a command line parameter
    - `node index.js <my-file>` or `npm start <my-file>`
* Based on the provided file, your application should read in the file contents
* Once the file contents have been read, your application should convert the file contents into a JavaScript object
* Using your converted JavaScript object, change some of the fields in the object to new values
    - Optional: Use the `faker` package to generate new values for these fields
* Save your new object back into the original source file
* Re-open and read the source file contents. Verify that the file was changed by comparing it to your changed object 

>***Software Engineering Note!***
*Working with command line arguments is an essential part of writing server side code. Learn to read and use them!*

### Execution Notes

* Perform the above operations with standard Node `fs` module callbacks
* Implement one version of the Application Execution using callbacks, one using promises, and another version using `async`/`await`. Split up these implementations into separate module files which your `index.js` will `require`

### Testing
* Test your modules, not your `index.js`
* Handle errors (such as file not found, bad file, etc.) in a consistent way
    - Think about: 
        + Where to use `try` `catch` blocks
        + How the JavaScript `Error` class can help you
        + What does `fs` have built-in for error catching
* Use the mocked `fs` module located in `__mocks__/fs.js` in your testing
* Handle async issues in your testing
    - Callbacks, async and promises all behave differently
        
### Stretch Goals
* Instead of using `JSON.parse()` and `JSON.stringify()` to convert your files into JavaScript objects, think about how these functions are actually coded behind the scenes
    - Write your own `parse()` function that will turn a string of JSON into a real ovject
    - Write your own `stringify()` function that will turn any object into a vaild JSON string

## Before you begin

### Visualize the Application
Evaluate the lab requirements and draw [UML diagrams](https://github.com/codefellows/seattle-javascript-401n14/tree/master/reference/submission-instructions/labs#compose-a-uml-or-processdata-flow-diagram-for-every-application) where necessary. Having a solid visual understanding of the code you have/need and how it connects is helpful to properly approaching assignments.

### Break Down the Assignment 
Once you have a good visual and mental model of how the application works, break down the requirements. For each requirement, ask yourself the following questions:

* Where should this new code live in the codebase?
* What existing code needs to be modified?
* What dependencies will I need to install?

Map your priorities and dependencies before jumping into the code.

## Assignment Submission Instructions
### Configure your repository
For each part of this lab, configure your folder with the following files and directories.

* `README.md` - contains your lab documentation ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/reference/submission-instructions/labs/README-template.md))
* `.gitignore` - contains a robust .gitignore file ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.gitignore))
* `.eslintrc.json` - contains the course linter configuration ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.eslintrc.json))
    - Note: Your eslint file may not be configured for `async`/`await`. Because of this you may see a linter error. Only errors related to `async`/`await` are acceptable to ignore!
* `.eslintignore` - contains the course linter ignore configuration ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.eslintignore))
* `.travis.yml` - contains the course linter ignore configuration ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.travis.yml))
* `package.json` - contains npm package config and scripts ([script template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/package.json.notes))
    - Add your name in the `author` field (you can do this easily using `npm init`)
    - Create a `lint` script for running eslint (`eslint **/*.js`)
    - Create a `test` script for running tests
    - If you have an `index.js`, create a `start` script to run that file
* `/__tests__/` - contains unit tests
* `/__mocks__/` - contains mock files
* `/__data__/` - contains sample data file
* `/docs/` - Where your documentation will reside
    - `/docs/config`
    - `/docs/config/jsdoc.config.json`
        + JSDOC Config File
        + Edit this for each lab if your folder structure is different

### Submit to Canvas
* Ensure that your `README.md` exists and has: 
    - A link to your TravisCI 
    - A link to pull request from your lab branch to your master branch in your forked repository
        + Keep this pull request open (**don't merge to master**) in case you need to resubmit your lab
    - Your module names for the application
    - Instructions for how to run your application
    - Instructions for how to test your application
    - Embedded UML diagram image

Be sure to delete any placeholder content if you use `README-template.md`. Once you've ensured your `README.md` is correct, within Canvas submit a link to your `README.md`

### Resubmitting
* Your open pull request will be your gateway to resubmitting
* Commit and push your changes in your lab branch, and they should be updated on the pull request
* Only one resubmit allowed

## Grading Rubric
### Requirements: 
* Must read a file path from the command line arguments
* Must write a different field value (or values) back to the original file
* Must process a file into a JavaScript object, and then later back into a JSON file
    - The processing should be done through modules, not all within `index.js`

### Tests: 
* Must use the mocked `fs` to test
* Modules should be tested fully
* `index.js` need not be tested 


| Criteria | Points |
|---|---|
| Features: Score based on % of features demonstrably completed | 3 |
| Code Implementation: Efficiency of code + JSDoc Comments + Code Quality + Modularity + Monolithic + Functional  | 3 |
| Tests: MUST HAVE A TRAVIS URL TO BE CONSIDERED! One unit test minimum, 80% coverage for full points | 2 |
| Documentation: README + UML | 2 |
| Total: | 10 |
