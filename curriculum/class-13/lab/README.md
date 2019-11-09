# LAB: Access Control

In this lab, we will be expanding on our original glimpse into role based access control. We'll be using a dynamic access control list (ACL) using a new MongoDB model.

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

Your starter code contains data for MongoDB. This data should be a database named `app` with a collection named `users` and another collection named `roles`. The `users` collection should have three unique users, and the `roles` collection should likewise have three unique roles. Here is the data for these users and roles (note that in the database, the passwords are stored as hashes instead of plain-text):

```javascript
{
    _id: "5db89b394eecc5418a3bf3c1",
    role: "admin",
    username: "sarah",
    password: "sarahpassword",
    email : "sarah@email.com"
}
{
    _id: "5db89b4e4eecc5418a3bf3c2",
    role: "editor",
    username: "bill",
    password: "billpassword",
    email: "bill@email.com"
}
{
    _id: "5db89b624eecc5418a3bf3c3",
    role: "user",
    username: "rene",
    password: "renepassword",
    email : "rene@email.com"
}
```

```javascript
{
    _id: "5dc688d436273050875c920e",
    role: "admin",
    capabilities: [ "create", "read", "update", "delete", "superuser" ]
}
{
    _id: "5dc688d436273050875c920f",
    role: "editor",
    capabilities: [ "read", "update" ]
}
{
    _id: "5dc688d436273050875c9210",
    role: "user",
    capabilities: [ "read" ]
}
```

## Requirements

### Commenting

Within `/starter-code/src/routes/role-router.js`, you will find many in-line comments of the format:

```
// TODO: Swagger Comment
```

You are required to replace each instance of these comments with your own swagger comments that fit the [swagger format](https://github.com/pgroot/express-swagger-generator#how-to-document-the-api).

### JWT Timeout

As you can see from the front-end HTML page, when a user signs in, they have the option to check a box that will add a 5 second timeout to their JSON Web Token. Your requirement will be to implement this feature.

-   In `/starter-code/public/auth.js`, in the `basicAuth()` function on line `44`, you can see that the `true`/`false` value of the checkbox is passed in a request as a header with the key `timeout`
    -   Note that even though this is a boolean, it is converted to a string when sent over a request
-   You can use this header value to determine if you should pose a 5 second timeout on your JWT
    -   Remember, adding an expiry changes the structure of your JWT when it is verified. Instead of just returning the data object, JWT returns a wrapper object with data inside.
    -   You can choose to always have an expiry on your token; make your default expiry one hour, and change that default to 5 seconds if the `timeout` flag is set

Once implemented, checking the checkbox on sign in should result in the token expiring in 5 seconds.

### Virtual Table Join

In `/starter-code/src/models`, there is new model and schema present for `roles`. Your task will be to use the Mongoose virtual property and `populate()` function to have the `users` model copy over content from the corresponding `roles` record.

For example, if user `sarah` has the role of `admin`, you should copy the `admin` record contents into a virtual property on `sarah`'s user record. This will let us access the capabilities through `sarah`'s user record.

-   Hint: Use `pre` hooks to call `populate` right when you `find` a user
-   Hint: Take a look at lab 09's `categories` schema file for inspiration / guidance

### User.can()

Create a `.methods` function on a user called `can()`. This function should take a string representing a capability, and return `true` or `false` if the user has that capability. For example, if I had a user record representing `sarah` (who is an `admin` user), `sarah.can('create')` would return `true`.

### Role Based Access Control (RBAC)

-   Within `/starter-code/src/routes/role-router.js`, you'll find a lot of undefined routes
-   Fill in all the routes such that only users with those capabilities in their role can access them
-   When a user who doesn't have the proper capabilities attempts to use a route, send a 403 error

## Testing

Write tests for your defined functionality. Here are some ideas of what tests you could write:

-   Unauthenticated users can _only_ access:
    -   `/public`
-   User user can access:
    -   `/public`
    -   `/hidden`
    -   `/read-only`
-   Editor user can access:
    -   `/public`
    -   `/hidden`
    -   `/read-only`
    -   `/update/:id`
-   Admin user can access:
    -   `/public`
    -   `/hidden`
    -   `/read-only`
    -   `/create`
    -   `/update/:id`
    -   `/delete/:id`
    -   `/super`
-   Token times out after 5 seconds when checkbox is checked
-   When checkbox is not checked, token does not time out after 5 seconds

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
-   Implementation of virtual join
-   `can()` method on user record
-   JWT timeout when checkbox is checked
-   RBAC routes
-   Deployment

| Criteria                                                          | Points |
| ----------------------------------------------------------------- | ------ |
| Features: Score based on % of features demonstrably completed     | 3      |
| Code Implementation: Efficiency of code + Comments + Code Quality | 3      |
| Deployment                                                        | 2      |
| Documentation: README + UML + Links                               | 2      |
| Total:                                                            | 10     |
