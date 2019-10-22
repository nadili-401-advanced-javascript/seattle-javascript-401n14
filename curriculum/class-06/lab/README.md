# LAB: HTTP and REST

In Lab 05, we used MongoDB as our database. This time, we'll be creating an HTTP server and use RESTful API calls to get our data. We'll be using the starter code in the `/starter-code/` folder.

## Requirements

You will be required to populate an HTTP database with two new `people` entries and one new `team` entry, similar to Lab 05.

You can choose to do this portion of the lab in one of three ways (or some combination):

- Do the actions through the [terminal command `httpie`](https://httpie.org/)
- Do the actions through the [application Postman](https://www.getpostman.com/product/api-client)
- Do the actions through running a program like `index.js`

Whichever route you choose, remember that we'll be looking for your database in the `/data/` folder of your repo, and we'll be looking for a database file named `db.json`.

Remember, if you have `index.js` create entries in your database, then every time you re-run `index.js` you'll get duplicate entries in your database. So be careful with this!

For your final submission, we require that you have an `index.js` which console logs information read from the JSON database.

### Setup

We can create a fake HTTP server on our local machine (just like we did with MongoDB) using a package called [`json-server`](https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d).

- Install `json-server` globally
- In your lab repo, create a file in your `/data/` directory called `db.json`
- Start your `json-server` and watch your created file: `json-server --watch=./data/db.json`
- Populate your `db.json` with the **same data** from your Lab 05.
  - Three teams: `Yellow Rhino`, `Red Heron`, `Blue Otter`
  - Seven people: your classmates plus yourself
  - Hint: You can [export from MongoDB into JSON](https://www.quackit.com/mongodb/tutorial/mongodb_export_data.cfm)!
- Your database should now show on your `json-server`

### Model

- Fill out the function contents in `model.js` so that they use RESTful API requests
  - Hint: We did some of this in the demo [`/demo/json-server`]
- Your `model.js` should have the following completed functions, which use the HTTP requests (`GET`, `PUT`, `POST`, `DELETE`) via the package [`node-fetch`](https://www.npmjs.com/package/node-fetch)
  - `get(_id)`
  - `getFromField(query)`
  - `create(record)`
  - `update(_id, record)`
  - `delete(_id)`
  - `count(query)`
  - `sanitize(record)` - see the "People and Teams" section below for a description of why we're adding this back in

### People and Teams

Because we are no longer using MongoDB, we should no longer use Mongoose either. As you can see in the starter code, there is no longer a `people-schema.js` or a `teams-schema.js`. RESTful APIs tend to have something called `middleware` which does schema validation for us. In this case, we're going to manually do it (just like in Lab 04) using our `sanitize` function in `model.js`.

For the `sanitize` function, you can either use your validator from Lab 01 or Lab 02, or you can use an existing validation package such as [`jsonschema`](https://www.npmjs.com/package/jsonschema) or [`ajv`](https://www.npmjs.com/package/ajv).

- Think about:
  - Do you need to adjust your schema contents to fit any of these modules?
  - What Mongoose-specific things do you now need to remove?

Editing the database for people and teams will now require a **route** to those sections of the database. For example, `http://localhost:3000/people` will probably be your route to the people database, while `http://localhost:3000/teams` will probably be your route to your teams database. Should you save these paths anywhere?

- Think about:
  - Should you add another variable in the People or Teams constructor?
  - Should that variable be in Model constructor instead?

### Data Operations

- Your database should be populated with 7 people and 3 teams
- Add a new team:
  - Think about: Do you need to update your teams schema to support the color `purple`?

```javascript
{
  name: 'Purple Cat',
  color: 'purple'
}
```

- Add two new people to the team `Purple Cat`. These two people are:

```javascript
{
  firstName: 'Sonia',
  lastName: 'Kandah'
  birthday: new Date('02/22/2020'),
  likes: 'both'
},
{
  firstName: 'Erin',
  lastName: 'Trainor'
  birthday: new Date('05/12/2020'),
  likes: 'both'
}
```

- In your `index.js` write a code that will do the following based on command line arguments:
  - No command line arguments: print the count of Teams and People
  - Name of a person command line argument: print the information for that person if a person was found. Print "No record found", if that name doesn't exist in the database
  - Name of a team command line argument: print the information for that team and the members of that team if the team name was found. Otherwise print "No record found".
- See sample output below:

```
>> node index.js

Teams: 3
People: 7

>> node index.js Sonia Kandah

Name: Sonia Kandah
Team: Yellow Rhino
Birthday: 2/22/2020
Likes: Cats and Dogs

>> node index.js Yellow Rhino

Team Name: Yellow Rhino
Color: Yellow
Members:
- Sonia Kandah
- Erin Trainor

>> node index.js Pink Flamingo

No record found
```

### Tests

- Test out the CRUD functions in `Model.js`

  - Think about:
    - When you test you shouldn't actually alter your database
    - Similar to when you tested `fs.writeFile`; you didn't actually want to write to a file during a test. You avoided doing so by using **mocks**
    - What external module is used in all of the CRUD operations? This is the one you should mock up

- Test out any additional functions used in `index.js` to get the code coverage you want

## Assignment Submission Instructions

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
- `/__mocks__/` - contains mock files
- `/__data__/` - contains your MongoDB database information
- `/docs/` - Where your documentation will reside (Swagger generation, no JSDocs generation needed)
  - `swagger.json`
  - `/docs/config`
  - `/docs/config/jsdoc.config.json`
    - JSDOC Config File
    - Edit this for each lab if your folder structure is different

### Submit to Canvas

- Ensure that your `README.md` exists and has:
  - A link to your TravisCI
  - A link to your SwaggerHub API Documentation
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

- Program runs with no command line arguments, printing out number of teams and people
- Program takes a name as a command line argument and returns the stored information about that item in the database, or "No record found" if it doesn't exist
- `model.js`
  - Implement all CRUD operations for HTTP
  - Implement `getFromField`
  - Implement `count`
  - Implement `sanitize`
- `people.js` and `teams.js`
  - Should extend Model
  - Implement all the features of the schema
- `index.js`
  - Handle command line arguments for:
    - People
    - Teams
    - No input
- `/data/db.json`
  - Have entries in your database that match:
    - 9 people
    - 4 teams
- `/docs/`
  - Have your Swagger generated API docs

### Code Quality:

- Properly modularized
- Functional programming where it makes sense

### Tests:

- Test all CRUD operations
- Test your `index.js` output

| Criteria                                                                                                       | Points |
| -------------------------------------------------------------------------------------------------------------- | ------ |
| Features: Score based on % of features demonstrably completed                                                  | 3      |
| Code Implementation: Efficiency of code + JSDoc Comments + Code Quality + Modularity + Monolithic + Functional | 3      |
| Tests: MUST HAVE A TRAVIS URL TO BE CONSIDERED! One unit test minimum, 80% coverage for full points            | 2      |
| Documentation: README + UML                                                                                    | 2      |
| Total:                                                                                                         | 10     |
