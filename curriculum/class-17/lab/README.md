# LAB: Socket.io

In this lab, you will be creating an event-driven application that sends the responsibility for logging to a separate server using Socket.io.

## How to Run the Starter Code

In the `/starter-code` directory, you should find all your starter code for this lab. There should be one file called `file-changer.js`, and a sample text file in `files/test.txt`. Currently, `file-changer.js` will require a command line parameter representing a text file, and it will replace the contents of the given file with a randomly generated sentence, using the module `faker`.

You can run `file-changer.js` using the following:

```
node file-changer.js <path-to-my-file>
```

> Note: There is a sample text file provided in the starter code located at /files/test.txt. Feel free to use this file during development, but ensure your final submitted application allows for any file to be passed in the command line parameters, so long as a valid path to that file is given.

## Requirements

Your goal will be to create three unique applications in their own specified folders. The first will be the contents of your starter code, moved to a folder called `/file-changer`. The second will be a new app `/logger` and the third will be the `/server`.

### `/file-changer`

Your `file-changer` application should have a `file-changer.js` file which requires a filename as a command line parameter and replaces the contents of that file with a randomly generated sentence.

Your task will be to connect this application to a `Socket.io` server, and emit events when the file is successfully changed, and when there is an error. On a success, emit a `'save'` event with the data being the file path that was changed. On an error, emit an `'err'` event with the data being the error message.

### `/logger`

Your logger application should connect to the same `Socket.io` server as `/file-changer`. On any events that `/file-changer` makes, `/logger` should console log a string based on the type of event and incoming data. An example of output from logger could be either:

```
File files/test.txt changed successfully
```

or

```
File change error ReferenceError
```

### `/server`

Your `/server` application should create a `Socket.io` server with listeners for `'save'` and `'err'` events. When these events occur, the server should emit the proper events (with the proper payloads) to `/logger` so that `/logger` can console log the correct data.

Your server should also console log the id of any socket it is connected to on a `'connection'` event

### Commenting

You are required to comment each function using proper [JSDoc comments](https://devhints.io/jsdoc).

### Note

You will need to start your servers up in the right order so that you can visually test things out.

1. `server.js` - needs to be up so that it can accept and emit events
1. `logger.js` - needs to have a running server to connect to, so that it can hear events
1. `app.js` can then run and have the server hear your events

### Testing

#### Mocks

For `/file-changer`, create a `/__mocks__` directory with an `fs.js` file, containing a mock of `fs.readFile` and `fs.writeFile` for use in testing.

> Note: Don't forget to call `jest.mock('fs')` at the top of your test files that use fs

For `/file-changer`, `/logger` and `/server`, create a `/__mocks__` directory with a `socket.io.js` and a `socket.io-client.js` file. These should contain mocks for the following functions:

```javascript
// socket.io.js

const io = {};

io.listen = port => {};
io.on = (command, callback) => {};
io.socket = {
  on: (command, callback) => {},
  emit: (command, payload, callback) => {},
};

module.exports = io;
```

```javascript
// socket.io-client.js

const io = {};

io.listen = port => {};
io.connect = () => {};
io.socket = {
  on: (command, callback) => {},
  emit: (command, payload, callback) => {},
};

module.exports = io;
```

#### Unit Tests

You should write unit tests for the following cases:

- `/file-changer`
  - Causes an `err` event with an error string when missing a file
  - Causes an `err` event with an error string when bad file path
  - Can alter a file and emit a `save` event with a success string
- `/logger`
  - Will console log a message from what it receives during a `save` event
  - Will console error a message from what it receives during an `err` event

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
    - Ensure that your test script will show coverage by adding the jest `--coverage` flag
  - Create `start` script to run any `index.js` or other starting files
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
- `/file-changer`, `/logger` and `/server` completed
- Testing all listed requirements

| Criteria                                                          | Points |
| ----------------------------------------------------------------- | ------ |
| Features: Score based on % of features demonstrably completed     | 3      |
| Code Implementation: Efficiency of code + Comments + Code Quality | 3      |
| Testing (Travis required, 80% coverage for full points)           | 2      |
| Documentation: README + UML + Links                               | 2      |
| Total:                                                            | 10     |
