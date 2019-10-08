# LAB: Data Modeling

Re-Use your `Validator` class from Lab 02 to provide sanity checking to a real data model while implementing full CRUD functionality.

## Requirements

### Part 1: Finish the tests

- Using Test Driven Development (TDD):
  - Add tests to support the other CRUD Methods
    - `update()`
    - `delete()`
      - Think about:
        - What would `update()` and `delete()` do for `Validator`?
        - What data is there to `update()`?
        - What data is there to `delete()`?
  - In `memory.js`, replace the `sanitize()` function with your `Validator` class to support type checking (string, number, boolean)
    - Think about:
      - How will this change your schemas?
      - How will you use this class in your CRUD methods?
  - Generalize to run the same test on any model

### Part 2: Create Another Model

- Using Test Driven Development (TDD):
  - Create a data model called `products`
  - Add the following fields - use your own judgement on field type and validation rules
    - `category_id` - string, required
    - `price` - number, required
    - `weight` - number
    - `quantity_in_stock` - number, required
- Your generic model test from Part 1 should just work when you add the `Products` model to the list of things to test

### Stretch Goal: Persist the data!

Thus far, you've created a simple, testable, extensible data modeling system. But the data goes away after each run of the program. For this stretch goal, think about how to persist the data.

- Create a new model type in the `models` folder called `file.js`
  - _Hint: It's not a bad idea to copy the memory model to get started_
- Create a new data model called `person` that uses the file model type (just like categories and products used the memory type)
- Rather than use an in-memory database, which is the array of records, store that data in the file system.
  - Create a `data` folder
  - When working with a model, store it's data in a file with the model name (i.e. `categories.db`)
  - All operations should read from and write to that data file using the node `fs` module
- Write a full test suite
  - You can use your memory model tests for inspiration

#### Questions

- How does this change your tests?
  - Do records just keep getting created over and over as you go?
  - How can you mitigate that?
  - Can mocking help?
- Do you want a new test runner for this type of model?

## Assignment Submission Instructions

### Configure your repository

For each part of this lab, configure your folder with the following files and directories.

- `README.md` - contains your lab documentation ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/reference/submission-instructions/labs/README-template.md))
- `.gitignore` - contains a robust .gitignore file ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.gitignore))
- `.eslintrc.json` - contains the course linter configuration ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.eslintrc.json))
- `.eslintignore` - contains the course linter ignore configuration ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.eslintignore))
- `.travis.yml` - contains the course linter ignore configuration ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.travis.yml))
- `package.json` - contains npm package config and scripts ([script template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/package.json.notes))
  - Add your name in the `author` field (you can do this easily using `npm init`)
  - Create a `lint` script for running eslint (`eslint **/*.js`)
  - Create a `test` script for running tests
  - If you have an `index.js`, create a `start` script to run that file
- `/__tests__/` - contains unit tests
- `/__mocks__/` - contains mock files
- `/__data__/` - contains sample data file
- `/docs/` - Where your documentation will reside
  - `/docs/config`
  - `/docs/config/jsdoc.config.json`
    - JSDOC Config File
    - Edit this for each lab if your folder structure is different

### Submit to Canvas

- Ensure that your `README.md` exists and has:
  - A link to your TravisCI
  - A link to pull request from your lab branch to your master branch in your forked repository
    - Keep this pull request open (**don't merge to master**) in case you need to resubmit your lab
  - Your module names for the application
  - Instructions for how to run your application
  - Instructions for how to test your application
  - Embedded UML diagram image

Be sure to delete any placeholder content if you use `README-template.md`. Once you've ensured your `README.md` is correct, within Canvas submit a link to your `README.md`

### Resubmitting

- Your open pull request will be your gateway to resubmitting
- Commit and push your changes in your lab branch, and they should be updated on the pull request
- Only one resubmit allowed

## Grading Rubric

### Requirements:

- All CRUD operations
- Both models (categories and products) completed

### Code Quality:

- Properly modularized
- Clean use of conditionals for the sanitizer

### Tests:

- Test all CRUD operations
- Test your `sanitize()` function
- Loop over each model type when testing

| Criteria                                                                                                       | Points |
| -------------------------------------------------------------------------------------------------------------- | ------ |
| Features: Score based on % of features demonstrably completed                                                  | 3      |
| Code Implementation: Efficiency of code + JSDoc Comments + Code Quality + Modularity + Monolithic + Functional | 3      |
| Tests: MUST HAVE A TRAVIS URL TO BE CONSIDERED! One unit test minimum, 80% coverage for full points            | 2      |
| Documentation: README + UML                                                                                    | 2      |
| Total:                                                                                                         | 10     |
