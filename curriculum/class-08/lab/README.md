# LAB - Express Routing & Connected API

In this lab, we'll be taking our server another step further by connecting it to a MongoDB database, as well as adding some new route middleware and server testing.

## Requirements

### Use MongoDB Data Models

Remember how we changed our `model.js` in lab 05 to work with MongoDB? We used the middleware `mongoose` to handle our schema validation, and our `model.js` used commands like `find()` and `countDocuments`. Well, we're going to be using that same model in this lab!

Feel free to copy the `model.js`, `people.js`, `teams.js`, `people-schema.js` and `teams-schema.js` files from your lab 05 and place them in a new `model` folder in your repo for this lab.

- Think about:
  - What packages will you now need to install to get thing working as they did in lab 05?
  - What new considerations do you have to make now that `id` is a `uuid` and not an integer?

### Connect to MongoDB

In this lab, we'll be deploying our application to Heroku and getting a URL to a database Heroku is hosting. So, we essentially have two databases we'll be working with: a local one we run through terminal for use when we're developing and testing, and then a hosted one through Heroku.

In order to ensure that our application is unchanged even when we deploy to Heroku, we'll need to do two things:

- Prioritize using a `.env` environment variable for the database URL instead of a hard-coded string
  - Hint: Heroku calls its environment variable for MongoDB `MONGODB_URI`
- When we finish working on our app and deploy it to Heroku, we'll need to copy our local data over to our hosted database
  - You can find a guide on how to do that [here](https://github.com/codefellows/seattle-javascript-401n14/blob/master/curriculum/class-08/README.md#deployment)

Finally, ensure that your connection to MongoDB happens in `server.js`: your client-side of your application should not need to know anything about MongoDB.

### Use MongoDB Models in Your Server

Import your MongoDB data models (people and teams) into your `server.js` and wire them to each route so that our `get` requests are reading from our MongoDB database, and our `post`, `put`, and `delete` requests are editing our database.

In your starter code, you should see the `/models/` folder, which has some of the files you'll need, though they might not all be complete. You will need to either replace the contents of this folder with your completed model files from lab 05, or you'll need to work on finishing the existing starter code files and adding to them. In order for this lab to be complete, you'll need the following files in your `/models/` folder:

- `model.js`: This should be a class that defines the major functionality of your data models. It should have the following functions defined:
  - `get(_id)`
  - `getFromField(query)`
  - `create(record)`
  - `update(_id, record)`
  - `delete(_id)`
  - `count(query)`
- `people.js`: Defines your People model
- `people-schema.js`: Defines your People schema
- `teams.js`: Defines your Teams model
- `teams-schema.js`: Defines your Teams schema

### Create Routes in Your Server

Within your server, create routes that will display or modify data. The following routes should be operational:

- `/`: prints out a simple "Homepage" message
- `GET /people`: prints out all the data from the People model
- `POST /people`: allows you to create a new person
- `PUT /people`: allows you to edit a person
- `DELETE /people`: allows you to delete a person
- `GET /people/:id`: prints out the found person from the given id
- `GET /people/:firstName-:lastName`: prints out the found person from the given first name and last name
- `GET /people/count`: prints out the number of people (records) in the Peoples model
- `GET /teams`: prints out all the data from the Teams model
- `POST /teams`: allows you to create a new team
- `PUT /teams`: allows you to edit a team
- `DELETE /teams`: allows you to delete a team
- `GET /teams/:id`: prints out the found team from the given id
- `GET /teams/:name`: prints out the found team from the given name
- `GET /teams/count`: prints out the number of teams (records) in the Teams model

Just like in lab 07, modularize your people and teams routes so that they are in separate server files called `people-routes.js` and `teams-routes.js`.

### Middleware

Add the following middleware to your server and routes:

- For all requests, add middleware that logs the following to the terminal console:
  - A timestamp for the request
  - The request path
  - The request method
  - The request parameters
- Add error handling middleware
  - Create middleware for handling a 404 error
  - Create middleware for handling any 5xx error (500, 501, etc.)
- Add middleware for every request on the `/people` route which logs "Accessing the /people route" to the terminal
- Add middleware for every request on the `/teams` route which logs "Using the /teams route" to the terminal

### Client

Your `index.js` should simply start your server. No other functionality needed.

### Testing

Using `supertester.js`, test a mocked version of your server

- Test all routes
- Think about:
  - What tests from previous labs can you copy over? Why should they still work?

### Documentation

- JS Docs comments on functions
- Swagger comments on endpoints

As in the previous lab, provide full swagger documentation for your server.

- Wire up to a custom port using the `express-swagger-generator` module
- Note that your routes might be different, and the response objects might be different. Update your swagger configuration accordingly

## Assignment Submission Instructions

For this lab, you will be required to deploy your app to Heroku. You will NOT need to generate any Swagger documentation, though Swagger and JSDoc comments within your code are still required.

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

### Submit to Canvas

- Ensure that your `README.md` exists and has:
  - A link to your TravisCI
  - A link to your deployed Heroku app
  - A link to pull request from your lab branch to your master branch in your forked repository
    - Keep this pull request open (**don't merge to master**) in case you need to resubmit your lab
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

- Connection to MongoDB
- Mongoose schema validation
- Teams and People
  - Model
  - Routes [`GET`, `POST`, `PUT` and `DELETE`]
- Middleware
  - Logging
  - Error Handling
- Modularity
  - `people-routes.js`
  - `teams-routes.js`
- Swagger Docs and JSDocs comments
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
