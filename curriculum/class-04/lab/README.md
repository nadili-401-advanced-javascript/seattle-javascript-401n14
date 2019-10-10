# LAB: Data Modeling

In this lab, we're going to build off of the `/demos/models` code to add more functionality and testing.

## Requirements

When you run your program on the command line, you should require two arguments; the first is the file with the people data (in JSON format), and the second is the file with the teams data (in JSON format).

### Model

Flesh out the CRUD operations in `model.js`:

- Ensure that `create`, `update`, and `delete` write data to the proper database file
- Ensure that `read` does not effect the database
- Ensure that `load` initializes the database with the file contents
- Make all your CRUD operations asynchronous using `Promise` or `async`/`await`
- Extend `sanitize` so that it also includes type checking
  - Hint: You've done this already with Validator! Can you reuse that code?
  - You can check that something is of type `uuid` by using the package [uuid-validate](https://www.npmjs.com/package/uuid-validate)

### Data Operations

Use `index.js` (or break up the code into new modules) to perform complex operations on our data models, hooking into the CRUD functions to finalize those operations.

Have your code do the following:

- Write a function `createPerson` which will create a new person in the people database, AND create a new team if necessary:
  - When you create a person, check if they exist or not already by searching for their full name in the person database. If they exist, don't create a new person
    - Think about:
      - In a real-life application, would you want to search by name or by id?
      - What are the benefits of searching by id?
  - When you create a person, check if their `team` field is set
  - If the team field is set, check if a team exists of that name
    - If it does, get the team id and save that in the `team` field for the new person
    - If it does not, create a new team, and save the new team id in the `team` field for the new person
- Write a function `readPerson` which will `console.log` out:
  - The person's first and last name
  - The name of the team they are on if they have a team
- Write a function `updatePerson` which will update the data of a person:
  - If that person changes their team, check if the new team exists
    - If it does not, create that team
  - Think about:
    - What if someone changes their team, and their last team is empty?
- Write a function `deletePerson` which will delete a person:
  - First, check if that person exists so that you may delete them
  - If deleting this person will result in an empty team, also delete the team
- Write a function `printTeams` which will `console.log` out each team name, and the people who are in that team

Once you have written your functions, it's time to call them! In `index.js` call these operations in order:

- Load all the data from the data files
- After the data is loaded, call `createPerson` using the following sample data:

  ```javascript
  {
    firstName: "Sarah",
    lastName: "Smalls",
    team: "Yellow Rhino"
  }
  ```

- After you've created a person, use `readPerson` to verify that "Sarah Smalls" exists in the database and belongs to team "Yellow Rhino"
- After that, use the function `updatePerson` to set the person "Rene Lefridge" to the team "Yellow Rhino"
- After that, use the function `deletePerson` to delete "Suzanne Render"
  - Hint: Suzanne is the only member of team "Orange Rabbit". Should "Orange Rabbit" exist once Suzanne is deleted?
- Finally, use `printTeams` to print your list of teams and the members in each team. Sample output could look like:

  ```
  ==============================
  Team Name: Yellow Rhino
  Members:
  Sarah Smalls
  Rene Lefridge
  ==============================
  ==============================
  Team Name: Red Heron

  // and so forth
  ```

- Run this program again:
  - Did the data persist?

### Testing

- Mock up `fs.readFile` and `fs.writeFile`
- Test all of your CRUD operations
- Test your sanitize operation
- Test your load operation
- To get 80% code coverage...
  - Should you break up your code into smaller testable modules?
  - Should you write a test for `index.js`?
  - Think about the functions you need to test and where it makes sense to do that

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
  - Create `start` script to run `index.js`
- `/__tests__/` - contains unit tests
- `/__mocks__/` - contains mock files
- `/__data__/` - contains sample data files
- `/docs/` - Where your documentation will reside (no generation needed)
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

- Program takes two command line arguments: people database file and team database file
- `model.js`
  - Implement all CRUD operations
  - `create`, `update` and `delete` shoud write to file
  - `load` and `read` should not edit the file
  - All CRUD operations + `load` should be asynchronous
  - `sanitize` should check required schema items as well as the types for all schema fields -`index.js`
  - Implement `createPerson`, `readPerson`, `updatePerson`, `deletePerson` and `printTeams`
  - Load the data asynchronously, and afterwards (using `.then()` or `await`) call the created functions in the specified order
  - Changes to the database should be persisted by the files being written correctly

### Code Quality:

- Properly modularized
- Clean use of conditionals for the sanitizer
- Functional programming where it makes sense

### Tests:

- Test all CRUD operations
- Test your `sanitize()` function
- Test your data operation functions

| Criteria                                                                                                       | Points |
| -------------------------------------------------------------------------------------------------------------- | ------ |
| Features: Score based on % of features demonstrably completed                                                  | 3      |
| Code Implementation: Efficiency of code + JSDoc Comments + Code Quality + Modularity + Monolithic + Functional | 3      |
| Tests: MUST HAVE A TRAVIS URL TO BE CONSIDERED! One unit test minimum, 80% coverage for full points            | 2      |
| Documentation: README + UML                                                                                    | 2      |
| Total:                                                                                                         | 10     |

```

```
