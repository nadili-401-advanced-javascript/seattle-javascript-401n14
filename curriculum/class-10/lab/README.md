# LAB: Authentication

In this lab, you'll have a mostly complete authenticated site. Your job will be to add comments to clarify the existing functionality, and change some routes to be restricted based on a logged in user.

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

Then, run the starter code using the script `npm start`. Navigate to `localhost:3000` and verify that you see "Homepage" printed in the browser.

## Starter Code Data

Your starter code contains data for MongoDB. This data should be a database named `app` with a collection named `users`. The users collection should have three unique users. Here is the data for these users (note that in the database, the passwords are stored as hashes instead of plain-text):

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

## Requirements

### UML Diagram

Create a UML diagram for the authentication system, describing the data flow of the following routes:

-   `POST /signup`
-   `POST /signin`
-   `GET /books`
-   `GET /books/:indx`

### Commenting

Within the code, you will find many in-line comments of the format:

```
// TODO: Comment
```

```
// TODO: JSDoc Comment
```

```
// TODO: Swagger Comment
```

```
// TODO: README Question
```

You are required to replace each instance of these comments with your own comments that fit the following criteria:

-   For standard `// TODO: Comment`, replace this line with your own comments describing what the line below does. Minimum one full sentence, and you will be graded based on accuracy and detail.
-   For `// TODO: JSDoc Comment`, replace this line with JSDoc comments for that function or class.
-   For `// TODO: Swagger Comment`, replace this line with Swagger API endpoint comments for that endpoint.
-   For `// TODO: README Question`, copy the question into a section of your `README.md` for this lab, and answer the question within your `README`

### Books Route

Within `/lib/routes/book-router.js`, you'll find the routes `/books` and `/books/:indx`. Your job is to restrict these routes so that they only show for authenticated users. Currently, there are three books defined for you:

```
  { title: 'Brave New World', auth: ['admin'] },
  { title: 'Hamlet', auth: ['admin', 'editor'] },
  { title: 'Alice in Wonderland', auth: ['admin', 'editor', 'user'] }
```

As you can see, each book has an `auth` key, which defines the types of users that have access to this book.

Using the data defined in the books object, restrict your `/books` route such that:

-   An `admin` user like `Sarah` can see all three books
-   An `editor` user like `Bill` can see only `Hamlet` and `Alice in Wonderland`
-   A standard `user` like `Rene` can see only `Alice in Wonderland`
-   A user of the wrong role, or a user not logged in, will see some error message

Similarly, restrict the `/books/:indx` route so that each book will only load if a user is logged in an has the right user type to access that specific book:

-   An `admin` user like `Sarah` can access `/books/0`, `/books/1` and `/books/2`
-   An `editor` user like `Bill` can only access `/books/1` and `/books/2`
-   A standard `user` like `Rene` can only access `/books/2`
-   A user of the wrong role, or a user not logged in, will see some error message

### Testing Functionality

Because we are focusing on the server-side of our application, we haven't created a client-side that easily lets us `POST` or modify our request headers. Therefore, in order to test, you can use a tool such as [Postman](https://www.getpostman.com/) so that you can manually set headers and `POST` bodies.

If you're using TDD, you can also use your test files as fake "clients", since they can make REST requests using [SuperAgent](https://www.npmjs.com/package/superagent). If you set up your test prior to coding your requirements, you can use your tests to verify that your newly added code is correct.

```javascript
mockRequest
    .get('/books')
    .set('token', savedJWToken)
    .then(callbackFunc);
```

## Tests

Write a complete set of tests for your routes and code. As in previous labs, we will be using `supertester.js` to mock up our server. As an extra bonus, in your `/starter-code/__tests__` files, you should see a segment of code added to the beginning of your test file. This code populates the mock testing database with some entries, so that you can now test actual data responses!

Here's a guideline of features you may want to test:

-   Can a new user sign up
-   Can an existing user sign in
-   Can a signed in user access their books
-   Do you prevent users from accessing books outside of their role
-   Do you prevent anonymous users from accessing books

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

> Note: When you deploy to Heroku, you should push your data to the Heroku database using `mongodump` + `mongorestore` or the tool `mongo-sync`. Because your data will be pushed to a remote database, you don't need to commit your `data` folder from your starter-code repo! Instead, you can add that folder to your `.gitignore`, so that you can keep it locally for local testing.

### Submit to Canvas

-   Ensure that your `README.md` exists and has:
    -   The answers to the questions posed within the starter code
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
-   Answering comment questions in README
-   Authentication on book routes
-   Deployment
-   Testing, 1 test minimum, 80% coverage

| Criteria                                                                                            | Points |
| --------------------------------------------------------------------------------------------------- | ------ |
| Features: Score based on % of features demonstrably completed                                       | 3      |
| Code Implementation: Efficiency of code + Comments + Code Quality                                   | 3      |
| Tests: MUST HAVE A TRAVIS URL TO BE CONSIDERED! One unit test minimum, 80% coverage for full points | 2      |
| Documentation: README + UML                                                                         | 2      |
| Total:                                                                                              | 10     |
