# LAB: API Server

In this lab, you will be fully documenting an API server, with standard, JSDoc and Swagger in-line comments. You will also be created a detailed UML diagram, and a full suite of tests.

## How to Run the Starter Code

Be sure to `npm install` as usual, and also create an `.env` file in your starter code directory with the following defined:

```
MONGODB_URI = mongodb://127.0.0.1:27017/app
PORT = 3000
```

Finally, before starting your code with `npm start`, be sure to start a MongoDB instance with the data from your starter code's `/data` folder:

```
mongod --dbpath=./data
```

Then, run the starter code using the script `npm start`. Navigate to `localhost:3000` and verify that you see "Homepage" printed in the browser.

## Requirements

### UML Diagram

Create a UML diagram that describes the code (and potential data) flow for each route:

-   `GET /:model`
-   `GET /:model/:id`
-   `POST /:model`
-   `DELETE /:model/:id`
-   `PUT /:model/:id`

Your diagram should include proper module and functional definitions, connections and parameter/data transfers:

-   Does each function get called when the route is fired and sends results to the browser?
-   What params are being sent between the functions?
-   What data is coming back?
-   Is the request object being modified?

### Commenting

Within the code, you will find many in-line comments of the format:

```javascript
// TODO: Comment
```

```javascript
// TODO: JSDoc Comment
```

```javascript
// TODO: Swagger Comment
```

You are required to replace each instance of these comments with your own comments that fit the following criteria:

-   For standard `//TODO: Comment`, replace this line with your own comments describing what the line below does. Minimum one full sentence, and you will be graded based on accuracy and detail.
-   For `//TODO: JSDoc Comment`, replace this line with JSDoc comments for that function or class.
-   For `//TODO: Swagger Comment`, replace this line with Swagger API endpoint comments for that endpoint.

### Testing

-   Write a complete set of data model and server tests
-   Use `supertester.js` to mock your server, but remember that this does not actually connect to your database, but instead creates a mock empty database that you can modify in a single run of your tests. After you run your tests, the mock database is deleted.
-   Refer to your previous assignments for examples and inspiration

### Deployment

Get this server deployed to production (Heroku). Although you aren't writing code against it, your documentation must be accessible through the links in your README. Make sure you push your local database (defined in the `/data/` folder of your starter code) to your remote database instance.

## Assignment Submission Instructions

### Configure your repository

For each part of this lab, configure your folder with the following files and directories.

-   `README.md` - contains your lab documentation ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/reference/submission-instructions/labs/README-template.md))
-   `.gitignore` - contains a robust .gitignore file ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.gitignore))
-   `.eslintrc.json` - contains the course linter configuration ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.eslintrc.json))
-   `.eslintignore` - contains the course linter ignore configuration ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.eslintignore))
-   `.travis.yml` - contains the course linter ignore configuration ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.travis.yml))
-   `package.json` - contains npm package config and scripts ([script template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/package.json.notes))
    -   Add your name in the `author` field (you can do this easily using `npm init`)
    -   Create a `lint` script for running eslint (`eslint **/*.js`)
    -   Create a `test` script for running tests
    -   Create `start` script to run `index.js`
-   `/__tests__/` - contains unit tests

### Submit to Canvas

-   Ensure that your `README.md` exists and has:
    -   A link to your TravisCI
    -   A link to your deployed Heroku app
    -   A link to pull request from your lab branch to your master branch in your forked repository
        -   Keep this pull request open (**don't merge to master**) in case you need to resubmit your lab
    -   Instructions for how to run your application
    -   Instructions for how to test your application
    -   Embedded UML diagram image

Be sure to delete any placeholder content if you use `README-template.md`. Once you've ensured your `README.md` is correct, within Canvas submit a link to your `README.md`

### Resubmitting

-   Your open pull request will be your gateway to resubmitting
-   Commit and push your changes in your lab branch, and they should be updated on the pull request
-   Only one resubmit allowed

## Grading Rubric

### Requirements:

-   UML diagram
-   Commenting correctly
-   Comment description and accuracy
-   Deployment

### Tests:

-   Test all routes
-   Test middleware

| Criteria                                                                                            | Points |
| --------------------------------------------------------------------------------------------------- | ------ |
| Code Comments: Standard + JSDoc Comments + Swagger Comments                                         | 4      |
| Tests: MUST HAVE A TRAVIS URL TO BE CONSIDERED! One unit test minimum, 80% coverage for full points | 3      |
| Documentation: README + UML                                                                         | 3      |
| Total:                                                                                              | 10     |
