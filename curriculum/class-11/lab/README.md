# LAB: OAuth

In this lab, you will be integrating OAuth functionality for GitHub.

## How to Run the Starter Code

Be sure to `npm install` as usual, and also create a `.env` file in your starter code directory with the following defined:

```
MONGODB_URI = mongodb://127.0.0.1:27017/app
PORT = 3000
JWT_SECRET = 3a91d829ee92d91c03f94453af275b2a

HOME_URL=http://localhost:3000

GOOGLE_CLIENT_ID=128009605781-1sk46clqi9hurd955pcvc1pae1gtbmt3.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=u5deLpIv_6pR5jucDjpHoHkq
GOOGLE_AUTH_SERVICE=https://accounts.google.com/o/oauth2/v2/auth
GOOGLE_TOKEN_SERVICE=https://www.googleapis.com/oauth2/v4/token
GOOGLE_API=https://openidconnect.googleapis.com/v1/userinfo

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GITHUB_AUTH_SERVICE=
GITHUB_TOKEN_SERVICE=
GITHUB_API=
```

Finally, before starting your code with `npm start`, be sure to start a MongoDB instance with the data from your starter code's `/data` folder:

```
mongod --dbpath=./data
```

Then, run the starter code using the script `npm start`, or run it in development mode using `nodemon index.js`. Navigate to `localhost:3000` and verify that you see an HTML page printed in the browser.

## Starter Code Data

Your starter code contains data for MongoDB. This data should be a database named `app` with a collection named `users`. The `users` collection should have three unique users. Here is the data for these users (note that in the database, the passwords are stored as hashes instead of plain-text):

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

Draw a detailed UML diagram of the Google OAuth user flow we demoed in class. Start from the client clicking the "Google Signin" button until the response data is printed.

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
-   For `// TODO: README Question`, copy the question into a section of your `README.md` for this lab, and answer the question within your README

### Add GitHub OAuth

As you can see, there's another button in the OAuth section that says "GitHub Signin". Your task will be to implement this user flow.

The following resources will help you get this working:

-   [Creating an OAuth App in GitHub](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/)
-   [Authorizing OAuth Apps](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/)

#### Set Your Environment Variables

As you can see from the `.env` variables listed above, there are placeholders for your GitHub data:

```
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GITHUB_AUTH_SERVICE=
GITHUB_TOKEN_SERVICE=
GITHUB_API=
```

It is your job to generate your own Client ID and Client Secret, and to read the linked documentation above to learn what the URL paths for the remaining variables are. Remember:

-   Auth Service is usually a GET request URL that will authenticate a user
-   Token Service is usually a POST request URL that will return to us an access token
-   The API is usually a GET request URL that will return user data when there is an access token in our request header

#### Implement `/github`

The `/github` route will be your first step in the OAuth process. This should be a simple `GET` endpoint that will return a URL that should lead us to the GitHub login screen. This endpoint is requested by our client when we hit the "GitHub Signin" button (see `/starter-code/public/index.html` and `/starter-code/public/oauth-form.js` to see how the `/github` server endpoint is called).

To complete this implementation:

-   Write your code in the provided empty GET `/github` endpoint in `/starter-code/src/routes/oauth/github.js`
-   Within the body of this endpoint, generate a URL with query parameters specific to GitHub
    -   Hint: Structurally, this should be very similar to our in-class example with Google. The major changes will be variable names, environment variables used, and the contents of the `options` object
-   Have this route return a JSON object of the format `{url: <someurl>}`

#### Implement `/github-oauth`

The `/github-oauth` route is the last step in the OAuth process. This should be a simple `GET` endpoint that will return some data collected from a logged-in GitHub user. This endpoint is directed to after the OAuth login is complete.

To complete this implementation:

-   Write your code in the provided empty GET `/github-oauth` endpoint in `/starter-code/src/routes/oauth/github.js`
-   Within the body of this endpoint, call the `github-mw` exported function, which should do the work of getting data from an authenticated GitHub user
    -   Hint: Structurally, this should be very similar to our in-class example with Google
-   Have this route return a JSON object with either all the returned data or some subset of that data

#### Implement `github-mw.js`

This GitHub middleware will be the middle of your OAuth process. This middleware will respond to a user's authentication with GitHub by requesting an access token from GitHub. Once it has its access token, the middleware will attempt to get user data, with the token set as a header in a request.

To complete this implementation:

-   Write your code in the provided `getUserData` function in `/starter-code/src/middleware/oauth/github-mw.js`
-   Within this function, use the authorization code from the request query to generate a new token
-   After generating a token, send a `GET` request to a GitHub API that will return user data, making sure to add the previously received token within the header of the request
    -   Hint: We want to save this token in `header.Authorization`
    -   Hint: In our base64 encoding examples, we appended the word "Basic" to our token. GitHub will return a token with "Bearer" encoding, so perhaps you need to append the word "Bearer"...
    -   Hint: Structurally, this should be very similar to our in-class example with Google
-   This function should return all the data return from the API call for user information

### Testing

You do not have to write tests for this lab. The only testing requirements are:

-   Have a link to Travis in your README
-   Have Travis pass all tests that exist in your `/starter-code`
    -   This is primarily so we can have your linter test run

### Deployment

You must deploy correctly to have your lab graded, otherwise you may risk a 2-point resubmission penalty. In order to deploy correctly you must:

-   Deploy your entire app to Heroku
-   Create an mLab MongoDB on Heroku
-   Push your local data to your remote Heroku mLab MongoDB
-   Update and add all the necessary environment variables
-   Update or create new GitHub app permissions so that it can accept non-localhost URLs
    -   This may result in a new client ID and secret, so keep that in mind
-   You are also required to get the Google app running properly
    -   Create a new development application by going [here](https://developers.google.com/identity/sign-in/web/sign-in) and hitting the "Configure a Project" button
    -   Ensure that the URLs you are using are based on your deployed Heroku app
    -   Again, update your environment variables; your Client ID and Secret will be newly generated

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
    -   The answers to the questions posed within the starter code
    -   A link to your TravisCI
    -   A link to your deployed Heroku app
    -   A link to pull request from your lab branch to your master branch in your forked repository
        -   Keep this pull request open (**don't merge to master**) in case you need to resubmit your lab
    -   Instructions for how to run your application
        -   Please be clear and descriptive
        -   Include any instructions for Heroku
        -   If parts of your application are broken, use this section of your README to describe how to run the working code so you can get partial points
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
-   Implementation of GitHub OAuth
-   Deployment

| Criteria                                                          | Points |
| ----------------------------------------------------------------- | ------ |
| Features: Score based on % of features demonstrably completed     | 3      |
| Code Implementation: Efficiency of code + Comments + Code Quality | 3      |
| Deployment                                                        | 2      |
| Documentation: README + UML + Links                               | 2      |
| Total:                                                            | 10     |
