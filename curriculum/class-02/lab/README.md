# LAB: Classes, Inheritance, Functional Programming

In this lab, you will be doing your first "refactoring", which is the process of rewriting working code to use new frameworks or structures. You'll refactor a constructor function into a class, keeping the functionality (and the interface) exactly the same.

## Requirements

### Part 1: Vehicles
**Starter Code:** `starter-code/vehicles`

* In `vehicle-constructor.js`, you'll find constructor definitions for `Vehicle`, `Car` and `Motorcycle`. Convert `Car` and `Motorcycle` into JavaScript Classes and place that code in the `vehicle-class.js` file
    - Think about: 
        + Inheritance - can you use it here? 
        + What does `prototype` do?
        + How is `call` used?
* In `__tests__/vehicle.test.js` you'll find pre-configured tests which are set to run for the constructor definitions in `vehicle-constructor.js` AND your new class definitions in `vehicle-class.js`. **DO NOT CHANGE THIS FILE.**
        
 >**Software Engineering Note!** *This is the heart of a refactor -- re-implement the same functionality, the same signature, and the same I/O while completely rewriting the underlying implementation*

### Part 2: List Module UML + Docs
**Starter Code:** `starter-code/list`

* Go through the starter code and try to interpret it 
* Draw a [UML diagram](https://github.com/codefellows/seattle-javascript-401n14/tree/master/reference/submission-instructions/labs#compose-a-uml-or-processdata-flow-diagram-for-every-application) for this code
* For each class and function definition, write [JSDocs](https://github.com/codefellows/seattle-javascript-401n14/tree/master/reference/submission-instructions/labs#jsdoc)
* Think about: 
    - How is functional programming used? 
    - How are callbacks used? 
 
### Part 3: Validator
**Starter Code:** `starter-code/validator`

This is a repeat of Lab 01, but using a class instead of functions. This is essentially going to be a refactor. You will have a codebase from which to start, with the goal being to keep the functionality the same, while improving the implementation.

* Write a `Validator` class that will check if input is valid 
    - Things we want to validate:
        + Is the input of the right type? (array, object, function, etc.)
        + If there is a schema present: 
            * Do all required properties exist in the input? 
            * Do all the type requirements for the input match correctly?
* Update the body of the tests in `validator.test.js` to use your newly created class code, but try to keep changes to the tests at a minimum (the tests should still try to test the same thing). 
* Respond to the following question within your `README` for this lab: 
    - Should `validator.js` export the class, or export an *instance* of the class? What are the pros and cons of each choice? 
* Think about: 
    - What should the constructor of `Validator` do? 
    - Use `data.json` as an example of how the input might look like
    - Do you need to write any additional tests to better cover the `Validator` class?
    - How do you create a `package.json`?
    - How can you use `npm test` in your terminal to run the tests for this project? 
    - Do you need `index.js`?

## Before you begin

### Visualize the Application
Evaluate the lab requirements and begin with drawing a [UML diagram](https://github.com/codefellows/seattle-javascript-401n14/tree/master/reference/submission-instructions/labs#compose-a-uml-or-processdata-flow-diagram-for-every-application). Having a solid visual understanding of the code you have/need and how it connects is critical to properly approaching the assignment.

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
* `.eslintignore` - contains the course linter ignore configuration ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.eslintignore))
* `.travis.yml` - contains the course linter ignore configuration ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.travis.yml))
* `package.json` - contains npm package config and scripts ([script template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/package.json.notes))
    - Add your name in the `author` field (you can do this easily using `npm init`)
    - Create a `lint` script for running eslint (`eslint **/*.js`)
    - Create a `test` script for running tests
    - If you have an `index.js`, create a `start` script to run that file
* `/__tests__/` - contains unit tests
* `/docs` - Where your documentation will reside
    - `/docs/config`
    - `/docs/config/jsdoc.config.json`
        + JSDOC Config File
        + Edit this for each lab if your folder structure is different
    - `/docs/config/styleguidist.json`
        + Contains settings for styleguide docs (For React Only)

### Submit to Canvas
* Ensure that your `README.md` exists and has links to: 
    - A link to your TravisCI 
    - A link to pull request from your lab branch to your master branch in your forked repository
        + Keep this pull request open (**don't merge to master**) in case you need to resubmit your lab
* Your `README` should include: 
    - Your module names for each lab project 
    - Instructions for how to run each lab project
    - Instructions for how to test each lab project
    - Embedded UML diagram images (double check this works!)

Be sure to delete any placeholder content if you use `README-template.md`. Once you've ensured your `README.md` is correct, within Canvas submit a link to your `README.md`

### Resubmits
* Your open pull request will be your gateway to resubmitting
* Commit and push your changes in your lab branch, and they should be updated on the pull request

## Grading Rubric

### Coding Standards: 
* Ensure that all new class refactoring doesn't change: 
    - The arguments for functions
    - The format of returned data / objects
* Ensure that the correct items are being exported by modules using `module.exports`

| Criteria | Points |
|---|---|
| Features: Score based on % of features demonstrably completed | 3 |
| Code Implementation: Efficiency of code + JSDoc Comments + Code Quality + Modularity + Monolithic + Functional  | 3 |
| Tests: MUST HAVE A TRAVIS URL TO BE CONSIDERED! One unit test minimum, 80% coverage for full points | 2 |
| Documentation: README + UML | 2 |
| Total: | 10 |
