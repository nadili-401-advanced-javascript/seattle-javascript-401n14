# LAB: Express

In this lab, you'll be adding routes, documentation and tests to a functional express server. You can find your starting code in the `/starter-code/` folder.

## Requirements

### People Model

Finish the routes for the people model. Schema validation is not required.

- Add the contents of the `PUT` operation for the people route
- Add the contents of the `DELETE` operation for the people route

### Teams Model

Add `GET`, `POST`, `PUT` and `DELETE` routes for teams and fill in the contents of these functions.

- Hint: This should be very similar to the people model routes!

### Middleware

Add the following middleware to your `server.js`:

- Application Level:
  - For all routes, add middleware that puts a current [timestamp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) on the `request` object in a property called `requestTime`
  - Create logging middleware that accepts a parameter called `message`. The middleware should `console.log()` the `path`, `method`, and `requestTime` properties for every request, as well as whatever `message` is passed to the middleware
    - Alter the `get` and `posts` routes to call your logging middleware with a custom message
- Route Level:
  - Create middleware for the people `post` route that puts a [randomly generated `true` or `false` value](https://stackoverflow.com/questions/36756331/js-generate-random-boolean) on a property on the request object called `valid`
    - In that post route, only create a new record if `request.valid` is `true`. Otherwise, force a 500 error
    - Because you can no longer ensure that given a hard coded input this route will succeed, you can also no longer test this route
    - Even though you can't test this route, you now have a better understanding of how to simulate database failure and ensure that your application doesn't crash when there is a bad request.
- Error Handling
  - Add 404 and 500 error handling middleware to the server

### Modularize

Once you have your middleware, modularize your server's routes

- In the `/lib/` folder, create a sub-folder called `/routes/`
- Add a module file named `people-routes.js` which contains all the people routes
- Add a module file named `teams-routes.js` which contains all the teams routes

### Swagger

Provide full swagger documentation for your server.

- Wire up to a custom port using the `express-swagger-generator` module
- Note that your routes might be different, and the response objects might be different. Update your swagger configuration accordingly

### Testing

- Server tests have been partially provided, but you'll need to add new tests for new routes
  - Complete the tests to cover all of your routes
  - Use `supertester.js` to wire up a mock server as in the provided tests
- Write unit tests for your middleware

## Assignment Submission Instructions

For this lab, you will be required to deploy your app to Heroku.

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
- `/docs/` - Where your documentation will reside (Swagger generation, no JSDocs generation needed)
  - `/docs/config/swagger.js`
  - `/docs/config/jsdoc.config.json`
  - Edit these for each lab if your folder structure is different

### Submit to Canvas

- Ensure that your `README.md` exists and has:
  - A link to your TravisCI
  - A link to your deployed Heroku app
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

- Teams
  - Model
  - Routes [`GET`, `POST`, `PUT` and `DELETE`]
- Middleware
  - Timestamp
  - Logging
  - Valid
    - Implement Valid on POST
  - Error Handling
- Modularity
  - `people-routes.js`
  - `teams-routes.js`
- Swagger Docs Generation
- Tests

### Code Quality:

- Properly modularized
- Functional programming where it makes sense

### Tests:

- Test all routes
- Test middleware

| Criteria                                                                                                       | Points |
| -------------------------------------------------------------------------------------------------------------- | ------ |
| Features: Score based on % of features demonstrably completed                                                  | 3      |
| Code Implementation: Efficiency of code + JSDoc Comments + Code Quality + Modularity + Monolithic + Functional | 3      |
| Tests: MUST HAVE A TRAVIS URL TO BE CONSIDERED! One unit test minimum, 80% coverage for full points            | 2      |
| Documentation: README + UML + Swagger                                                                          | 2      |
| Total:                                                                                                         | 10     |
