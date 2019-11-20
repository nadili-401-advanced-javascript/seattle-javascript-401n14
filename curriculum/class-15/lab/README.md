# LAB: Event Driven Applications

In this lab, you will be creating an event driven application that uses events to log important information to the console.

## How to Run the Starter Code

In the `/starter-code` directory, you should find all your starter code for this lab. This application takes in a command line parameter which is a path to a text file. You can run this application simply by using `node`:

```
node app.js <path-to-my-file>
```

> Note: There is a sample text file provided in the starter code located at /data/data.txt. Feel free to use this file during development, but ensure your final submitted application allows for any file to be passed in the command line parameters, so long as a valid path to that file is given.

## Requirements

> No deployment is required for this lab

In your current starter code directory, you should see a lot of empty files defined in the `/__mocks__/`, `__tests__` and `src` folder. Your task will be to fill out these empty files.

### `app.js`

To start with, you should find that the `app.js` file has some existing content. This code will read the contents of the specified file from the command line arguments, and convert the contents of the file into uppercase letters. Instead of converting the content to uppercase, use the module [`faker`](https://www.npmjs.com/package/faker) to generate a fake "lorem ipsum" sentence and replace the contents of the file with this new sentence.

### Emitter, File Changer and Logger

Once you have `app.js` working as expected, modularize the contents of `app.js` into the three specified files. Each file should do the following:

#### Emitter

This file should define an `EventEmitter` object, and export this object for other files to use.

#### File Changer

This file should contain the main file changing code from `app.js`, changing this code to use `async/await` and to emit events.

> Note: `util.promisify` will come in handy here!

`file-changer.js` should export the following functions:

- `loadFile`: This function will take a file path as a parameter and read that file using the `async/await` implementation of `fs.readFile`. It should then return the contents of the read file.
- `saveFile`: This function will take the contents of a file and will use `faker` to replace the contents with a newly generated "lorem ipsum" sentence.
- `alterFile`: This function should take a file path as a parameter and then call `loadFile` followed by `saveFile`, passing the correct parameters along. On the successful completion of these operations, this function should emit a `file-saved` event. On any error, this function should emit a `file-error` event.
  - When you emit your `file-saved` and `file-error` events, send an object as an argument which has the following key-values:
  ```
  status: 0 if error, 1 if success
  file: path to the file
  text: error object message if error, 'saved' if success
  ```

#### Logger

Your logger file should define two event listeners, one for the event `file-saved`, and another for the event `file-error`. Each listener should call a handler function which console logs (or console errors) a message based on the parameter `payload`. The messages should be of the format:

```
SUCCESS: Changing file <file path> succeeded
```

```
ERROR: Changing file <file path> failed with error <error message>
```

#### `app.js`

Finally, once these files are filled out, your `app.js` file should import `alterFile` from `file-changer.js` and run that function with the file path from the command line arguments passed as a parameter.

### Commenting

You are required to comment each function using proper [JSDoc comments](https://devhints.io/jsdoc).

### Testing

#### Mocks

Within the `/__mocks__` directory, complete the `fs.js` file with a mock of `fs.readFile` and `fs.writeFile` for use in testing.

> Note: Don't forget to call `jest.mock('fs')` at the top of any of your test files

#### Unit Tests

You should write unit tests for the following cases:

- `file-changer.js` `alterFile`
  - Causes an `file-error` event when missing a file
  - Causes an `file-error` event when bad file path
  - Can alter a file successfully and emit a `file-saved` event
- `logger.js`
  - Does nothing when missing object arguments from a `file-error` event
  - Doe nothing when missing object arguments from a `file-saved` event
  - Will console log an error message when `file-error` is emitted
  - Will console log a success message when `file-saved` is emitted

> Hint: You should use [jest.spyOn](https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname) to check console logs

## Assignment Submission Instructions

### Configure your repository

For each part of this lab, configure your folder with the following files and directories.

- `README.md` - contains your lab documentation ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/reference/submission-instructions/labs/README-template.md))
- `.gitignore` - contains a robust .gitignore file ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.gitignore))
- `.eslintrc.json` - contains the course linter configuration ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.eslintrc.json))
- `.eslintignore` - contains the course linter ignore configuration ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.eslintignore))
- `.travis.yml` - contains the course linter ignore configuration ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.travis.yml))
- `package.json` - contains `npm` package config and scripts ([script template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/package.json.notes))
  - Add your name in the `author` field (you can do this easily using `npm init`)
  - Create a `lint` script for running eslint (`eslint **/*.js`)
  - Create a `test` script for running tests
    - Ensure that your test script shows which tests pass and fail by adding the jest `--verbose` flag
    * Ensure that your test script will show coverage by adding the jest `--coverage` flag
  - Create `start` script to run `index.js`
    - DO NOT hard-code any file to test

> Note: No deployment to Heroku required for this lab!

### Submit to Canvas

- Ensure that your `README.md` exists and has:
  - A link to your TravisCI
  - A link to pull request from your lab branch to your master branch in your forked repository
    - Keep this pull request open (**don't merge to master**) in case you need to resubmit your lab
  - Instructions for how to run your application
    - Please be clear and descriptive
    - If parts of your application are broken, use this section of your README to describe how to run the working code so you can get partial points
  - Embedded UML diagram image

**Be sure to delete any placeholder content if you use `README-template.md`.**

Once you've ensured your `README.md` is correct, within Canvas submit a link to your `README.md`

### Resubmitting

- Your open pull request will be your gateway to resubmitting
- Commit and push your changes in your lab branch, and they should be updated on the pull request
- Only one resubmit allowed

## Grading Rubric

### Requirements:

- UML diagram
- Commenting correctly
- `app.js` changed to use modules
- `emitter.js`, `file-changer.js` and `logger.js` completed
- Mock of `fs.js`
- Testing all listed requirements

| Criteria                                                          | Points |
| ----------------------------------------------------------------- | ------ |
| Features: Score based on % of features demonstrably completed     | 3      |
| Code Implementation: Efficiency of code + Comments + Code Quality | 3      |
| Testing (Travis required, 80% coverage for full points)           | 2      |
| Documentation: README + UML + Links                               | 2      |
| Total:                                                            | 10     |
