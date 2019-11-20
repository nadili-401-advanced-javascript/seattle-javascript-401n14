# LAB: TCP Server / Message Application

In this lab, we will be creating three individual applications that will all communicate with one another using TCP.

## How to Run the Starter Code

In the `/starter-code` directory, you should find all your starter code for this lab. There should be three outer folders called `/file-changer`, `/logger` and `/server`. These represent three distinct applications that will be communicating with one another.

### File Changer

You can run the code in `/file-changer` by using:

```
node app.js <path-to-my-file>
```

As in Lab 15, `app.js` takes a command line parameter which is a text file, and modifies that text file.

> Note: There is a sample text file provided in the starter code located at /file-changer/data/data.txt. Feel free to use this file during development, but ensure your final submitted application allows for any file to be passed in the command line parameters, so long as a valid path to that file is given.

### Server

You can run the server by using:

```
node server.js
```

or

```
nodemon server.js
```

### Logger

This file is completely empty, and one of your requirements will be to make this a functioning socket connection that logs events.

## Requirements

> No deployment is required for this lab

### TCP Server

In `/server/server.js`, you should see an initial TCP server set up for you. Your job will be to extend this server to handle more actions.

First, modularize the server file so that it has functions `addSocket`, `deleteSocket` and `dispatchEvent`. Second, every time any Socket in the server's socket pool receives data, write (or "broadcast") that data to every other socket in the pool.

### File Changer

Your task will be to re-factor `file-changer` to use `async`/`await` and to generate random strings for the new file contents instead of changing the file to uppercase. Essentially this is going to be the same content as your work for Lab 15.

You will then need to convert this from being a standalone application to being a socket connected to your TCP server. Also hange your `file-error` and `file-saved` events to be `socket.write` commands instead, of the format `<event-name> <event string message>`. Remove any event listeners for `file-error` or `file-saved`. Your `socket.write` commands should then be caught by the TCP server, and broadcast to other sockets in the pool.

### Logger

This application should also be a socket connected to the TCP server. It should log out every event it receives. It should also log a message when the connection to the server is started and closed.

### Commenting

You are required to comment each function using proper [JSDoc comments](https://devhints.io/jsdoc).

### Note

You will need to start your servers up in the right order so that you can visually test things out.

1. `server.js` - needs to be up so that it can accept and re-emit events
1. `logger.js` - needs to have a running server to connect to, so that it can hear events
1. `app.js` can then run and have the server hear your events

### Testing

#### Mocks

For `/file-changer`, create a `/__mocks__` directory with an `fs.js` file, containing a mock of `fs.readFile` and `fs.writeFile` for use in testing.

> Note: Don't forget to call `jest.mock('fs')` at the top of your test files that use fs

#### Unit Tests

You should write unit tests for the following cases:

- `/file-changer`
  - Causes an `data` event with an error string when missing a file
  - Causes an `data` event with an error string when bad file path
  - Can alter a file and emit a `data` event with a success string
- `/logger`
  - Will console log anything it receives during a `data` event

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
