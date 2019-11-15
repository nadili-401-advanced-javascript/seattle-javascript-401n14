# LAB: API Server Revisited

In this lab, we will be implementing a fully functional, authenticated and authorized API server using all the knowledge we learned in our past classes.

## How to Run the Starter Code

Be sure to `npm install` as usual, and also create a `.env` file in your starter code directory with the following defined:

```
MONGODB_URI = mongodb://127.0.0.1:27017/app
PORT = 3000
JWT_SECRET = 3a91d829ee92d91c03f94453af275b2a
```

Finally, before starting your code with `npm start`, be sure to start a MongoDB instance with the data from your starter code's `/data` folder:

```
mongod --dbpath=./data
```

Then, run the starter code using the script `npm start`, or run it in development mode using `nodemon index.js`. Navigate to `localhost:3000` and verify that you see an HTML page printed in the browser.

## Starter Code Data

Your starter code contains data for MongoDB. This data should be a database named `app` with a collections named `users`, `books` and `roles`. Each should have three unique records to start. Here is the data for these collections (note that in the database, the passwords are stored as hashes instead of plain-text):

### Users

```javascript
{
    role: "admin",
    username: "sarah",
    password: "sarahpassword",
    email : "sarah@email.com"
}
{
    role: "editor",
    username: "bill",
    password: "billpassword",
    email: "bill@email.com"
}
{
    role: "user",
    username: "rene",
    password: "renepassword",
    email : "rene@email.com"
}
```

### Roles

```javascript
{
    role: "admin",
    capabilities: [ "create", "read", "update", "delete", "superuser" ]
}
{
    role: "editor",
    capabilities: [ "read", "update" ]
}
{
    role: "user",
    capabilities: [ "read" ]
}
```

### Books

```javascript
{
    title: "Alice in Wonderland",
    auth: [ "admin", "editor", "user" ]
}
{
    title: "Hamlet",
    auth: [ "admin", "editor" ]
}
{
    title: "Brave New World",
    auth: [ "admin" ]
}
```

## Requirements

Your application should have the following routes:

| Route                 | Description                                                                                                                                                                                                                     | Authentication Needed                          | Authorization Needed               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ---------------------------------- |
| GET /                 | Should print out the contents of `index.html`                                                                                                                                                                                   | No                                             | No                                 |
| GET /model/:model     | For each model in the application (users, roles, books), print out the name of the model and the number of records for that model. If there is a signed in user that is of role admin, also print out each record in that model | No (admin user authentication shows more data) | No (admin role shows more data)    |
| GET /model/:model/:id | Returns a record belonging to the specified model and with the specified record id                                                                                                                                              | Bearer Auth                                    | `admin` role                       |
| POST /signup          | Should create a new user from a username and password                                                                                                                                                                           | Basic Auth                                     | No                                 |
| POST /signin          | Should allow an existing user to sign in with their username and password                                                                                                                                                       | Basic Auth                                    | No                                 |
| GET /books            | Should show a list of books accessible by the current user                                                                                                                                                                      | Bearer Auth                                    | Visible books depends on user role |
| POST /books           | Should allow a user to create a new book                                                                                                                                                                                        | Bearer Auth                                    | `user.can('create')`               |
| PUT /books/:id        | Should allow a user to update a book                                                                                                                                                                                            | Bearer Auth                                    | `user.can('update')`               |
| PATCH /books/:id        | Should allow a user to update a book                                                                                                                                                                                            | Bearer Auth                                    | `user.can('update')`               |
| GET ??                | 404 Error Handling route                                                                                                                                                                                                        | No                                             | No                                 |

In order to get these routes working, please have the following server middleware:

| Middleware     | Description                                                                                                                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Error Handling | This middleware should take in an error object that contains a status and a message. It then sends those to the client and ends the request                                                                                |
| Auth           | This middleware can be run before any route as needed - It will check `req.headers.authorization` and look for Basic Auth or Bearer Auth. Then it will interpret the auth and find a user that matches, or return an error |

And the following Mongoose middleware / functions:

| Model | Function                    | Description                                                                                                                                                                           |
| ----- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Users | `can(capability)`           | On a user record, `can` that takes a string parameter `capability`. This function returns true if a user has that capability (as defined by their role), and false otherwise          |
| Users | `comparePassword(password)` | On a user record, `comparePassword` takes a plain-text string password, hashes it and compares it with the hashed password stored for the current user                                |
| Users | `generateToken(timeout)`    | On a user record, generates a token for user, with the default timeout being one hour, but with the parameter timeout specifying a different timeout in seconds                       |
| Users | `pre` `findOne` middleware  | When we try to find one user, populate a virtual field named `virtual_role` with the corresponding role record in the roles model                                                     |
| Users | `pre` `save` middleware     | Before saving a user record into our database, hash the provided plain-text parameter form the `save` function parameter and replace the plain-text password with the hashed password |

> Implementation Tip: Use the code you've already written! Past labs have tackled all of these requirements, it's now time to get them all together. You may have to change things around, but that might be better than starting from a blank slate.

### Commenting

Ensure that all of your functions and routes are commented thoroughly using [JSDoc comments](https://devhints.io/jsdoc) or [Swagger comments](https://github.com/pgroot/express-swagger-generator#how-to-document-the-api). There will be a slightly larger grade weight for commenting in this lab, so do your best to make these comments detailed and accurate.

### Testing

Test that all the above routes and middleware work as expected. Your goal will be to get 80% coverage.

## Assignment Submission Instructions

### Configure your repository

For each part of this lab, configure your folder with the following files and directories.

-   `README.md` - contains your lab documentation ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/reference/submission-instructions/labs/README-template.md))
-   `.gitignore` - contains a robust .gitignore file ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.gitignore))
-   `.eslintrc.json` - contains the course linter configuration ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.eslintrc.json))
-   `.eslintignore` - contains the course linter ignore configuration ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.eslintignore))
-   `.travis.yml` - contains the course linter ignore configuration ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.travis.yml))
-   `package.json` - contains `npm` package config and scripts ([script template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/package.json.notes))
    -   Add your name in the `author` field (you can do this easily using `npm init`)
    -   Create a `lint` script for running eslint (`eslint **/*.js`)
    -   Create a `test` script for running tests
        -   Ensure that your test script will show coverage by adding the jest `--coverage` flag
    -   Create `start` script to run `index.js`

> Note: When you deploy to Heroku, you should push your data to the Heroku database using `mongodump` + `mongorestore` or the tool `mongo-sync`. Because your data will be pushed to a remote database, you don't need to commit your `data` folder from your starter-code repo! Instead, you can add that folder to your `.gitignore`, so that you can keep it locally for local testing.

### Submit to Canvas

-   Ensure that your `README.md` exists and has:
    -   A link to your TravisCI
    -   A link to your deployed Heroku app
    -   A link to pull request from your lab branch to your master branch in your forked repository
        -   Keep this pull request open (**don't merge to master**) in case you need to resubmit your lab
    -   Instructions for how to run your application
        -   Please be clear and descriptive
        -   Include any instructions for Heroku
        -   If parts of your application are broken, use this section of your README to describe how to run the working code so you can get partial points
    -   Embedded UML diagram image

**Be sure to delete any placeholder content if you use `README-template.md`.**

Once you've ensured your `README.md` is correct, within Canvas submit a link to your `README.md`

### Resubmitting

-   Your open pull request will be your gateway to resubmitting
-   Commit and push your changes in your lab branch, and they should be updated on the pull request
-   Only one resubmit allowed

## Grading Rubric

### Requirements:

-   UML diagram
-   Commenting correctly
-   Implementation of specified routes
-   Implementation of specified middleware
-   Implementation of specified mongoose middleware
-   Deployment

| Criteria                                                          | Points |
| ----------------------------------------------------------------- | ------ |
| Features: Score based on % of features demonstrably completed     | 3      |
| Code Implementation: Efficiency of code + Comments + Code Quality | 3      |
| Testing (Travis required, 80% coverage for full points)           | 2      |
| Deployment                                                        | 1      |
| Documentation: README + UML + Links                               | 1      |
| Total:                                                            | 10     |
