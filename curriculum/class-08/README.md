# Class 08 - Express Routing & Connected API

## Outline

## Key Terms

| Term                    | Definition | Supporting Links |
| ----------------------- | ---------- | ---------------- |
| Express Routing         | ===        | ===              |
| Endpoints               | ===        | ===              |
| API                     | ===        | ===              |
| Client-side             | ===        | ===              |
| Server-side             | ===        | ===              |
| Data Model              | ===        | ===              |
| Development Environment | ===        | ===              |
| Production Environment  | ===        | ===              |

## Key Packages

| Package  | Description | Link |
| -------- | ----------- | ---- |
| `dotenv` | ===         | ===  |

## Where We're Coming From

In our last class, we ventured into the world of servers and learned how to create our own server for our applications. This immediately "leveled-up" our apps: now, instead of running our code in the terminal, we can have our applications run on a hosted website!

With the node package `express`, creating a server is a lot quicker and only takes a few commands. Typically, we create a server in a `server.js` file, and that file exports the `server` object created by express, as well as a `start` function which our client calls to start the server:

```javascript
const express = require('express');
const app = express();

const start = port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT);
};

module.exports = {
    server: app,
    start: start
};
```

After we created a simple server, we learned a few ways to make our server more complex. We learned how to create routes or endpoints for our hosted website using `app.METHOD()`, and we learned how to create middleware (functions that run between the sent request and returned response) and call that middleware with `app.use()`.

We also learned how we could modularize our routes using `express.Router()`, allowing us to store our route server code in separate files.

## Where We're Going

We're now going to take things a step further by connecting our server to an actual database. And, as in previous labs, the database we'll be using is MongoDB.

Now that we have some experience with all the pieces of an application, we need to figure out what typically makes sense as far as the structure and organization of those pieces. So far, we know of a few major components of an application:

| Name        | Description                                                                                                                                                                                                                                                                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Client-side | This is where we add content that we want to show to an end user. In a fully developed application, this usually means HTML and CSS blocks, with JavaScript code to load in data users might need to see, or dynamically generate the structure of a page.                                                                                           |
| Server-side | This is where we connect to our main data sources (database, files, etc) and serve up that data to our client. Overall, the server manages "back-end" functionality of an application; anything that the end user doesn't see or interact with, but which the client hooks into via exposed server APIs.                                             |
| Data Model  | This is a collection of schema and class blueprints. We create one blueprint per type of data, for example in our past labs we've been creating models for "People" and "Teams". In the data model, we define where and how we can create, read, update or delete records in our database, and we ensure any modified data complies with our schema. |
| Database    | Usually external to our application, a database is where we store/persist data and change data. This way, if our application is hosted and available to many users, all users should be able to view the same data.                                                                                                                                  |

Because we haven't had all the pieces fully until now, we've been hacking together applications in perhaps not the best way. Originally, we had our client-side (`index.js`) connecting directly to our model (`people.js` and `teams.js`) and calling our model's CRUD operations in order to access and change the data.

That methodolgy makes our client-side too bulky; going forward, we want to restrict our client to only making HTTP requests to API endpoints (now defined in our `server.js`). Operationally, nothing really changes, but structurally we now have something akin to:

```
Client ->> Server ->> Model ->> Database
```

This means that our client no longer has to import our model, instead our server will do that. Our client will only call `GET`, `POST`, `PUT` and `DELETE` requests upon our server API endpoints.

### Relational Data

But what about data models that are dependent upon one another? For example, People and Teams can be related because People belong to a specific team. We store the team in each person's `_team` field, and creating, updating or deleting a person can result in a team being created, updated or deleted.

To clarify the example further, if we attempt to create a person `Sarah Smalls` who belongs to team `Yellow Rhino`, we first must check if `Yellow Rhino` exists. If it does not we now have to create a team `Yellow Rhino`, save that new team id, and store that team id in `Sarah Smalls`'s `_team` field. Later on, if we delete `Sarah Smalls`, we might leave the team `Yellow Rhino` empty with no members. In that case, we should also delete `Yellow Rhino`.

In our lab 04, that relational logic was in our `index.js`. This time, we want our client to not have to worry about the relational rules, so we'll be putting it in our `server.js` endpoints.

> Note: There's no right or wrong way to do this: sometimes you'll find relational rules on the client side as well. Generally however, if code that is directly calling upon our model should be in our server.

## How to Get There

Now that our endpoints are going to have more logic in them, it's a good time for us to review what we have available to us within a request object, and how we can build more complex endpoint paths .

### Query Parameters and Router Parameters

When we think of searching for a person by id, it might seem simple: do a `GET` request to `localhost:3000/people/:id`. But what if we had a more complex query? What if we wanted to do a `GET` request and the only data we had was a person's first name and last name?

In Lab 06, when we were working with `json-server`, we could be creative and use URL query parameters:

```
GET localhost:3000/people?firstName=Sarah&lastName=Smalls
```

How would this change our request object? When we provide a request with a query within it, the request will automatically be parsed so that the query is saved as an object with keys and values. We can access these through `request.query`:

```javascript
console.log(req.query.firstName); // Sarah
console.log(req.query.lastName); // Smalls
```

So query parameters are quite powerful! But, it's still a bit of work on the client-side to generate that query string. Now that we have control over our server and our server endpoints, can we do anything that makes it even simpler? Luckily we can! Using router parameters, we can create complex routes that allow us to search by things other than id:

```javascript
app.get('/people/:firstName-:lastName', (req, res, next) => {
    console.log(req.params.firstName);
    console.log(req.params.lastName);
});
```

Just like we used `:id`, we can use any key name to search by that key! We can even have a path which uses two keys; as long as they are deliniated by a `-` or a `.` they should be parsed into unique keys in our `req.params` object.

### Router Param Middleware

Now that we know a how flexible we can make our routes using router paremeters, let's see how we can create middleware related to those router parameters. For example, suppose we had a block of code that we only wanted to run when a request passes in a first name:

```javascript
app.param('firstName', (req, res, next) => {
    // Fires whenever we req.params.firstName exists in a request
    // Because this is middleware, it will fire before we reach
    // the path endpoint
});
```

In the above example, we can see how to create middleware that responds to what keys are defined in `request.params`. We used `app.param`, but just keep in mind that we can still modularize this for specific routes by using `express.Router()`.

```javascript
router.param('firstName', (req, res, next) => {
    // Fires whenever we req.params.firstName exists for a request
    // on a specific route that we define.
    // Because this is middleware, it will fire before we reach
    // the path endpoint
});

app.use('/people', router);
```

### Useful Server Middleware Functions

So far we have a learned a lot of ways to add middleware to either our application or to our individual routes. Here's a summary of these methods of adding middleware:

| Function                            | Description                                                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `app.use()` or `router.use()`       | Applies middleware to every request made to this application or route                                         |
| `app.all()` or `router.all()`       | Applies middleware to each HTTP method endpoint on this appication or route                                   |
| `app.get()` or `router.get()`       | Applies middleware to each `GET` endpoint on this application or route                                        |
| `app.post()` or `router.post()`     | Applies middleware to each `POST` endpoint on this application or route                                       |
| `app.put()` or `router.put()`       | Applies middleware to each `PUT` endpoint on this application or route                                        |
| `app.delete()` or `router.delete()` | Applies middleware to each `DELETE` endpoint on this application or route                                     |
| `app.param()` or `router.param()`   | Applies middleware to each request on this application or route that has a specific `req.param` key-value set |

### Connecting to MongoDB

As mentioned before, we now want our server to manage the connection to our database. We learned from a previous lab that we could connect to MongoDB in our code using:

```javascript
const db = 'mongodb://127.0.0.1:27017/app';
const config = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

mongoose.connect(db, config);
```

This time, we're going to make a few tweaks to this process. Firstly, we usually don't want a hard-coded URL for our `db` path variable. This is because we're going to have a separate database for development and production. Development refers to when we're on our machine editing, updating and improving code. Production refers to when our application is deployed somewhere users can access it. By keeping a development database and a production database, we can ensure that errors on the development side don't effect the production side.

So, instead of having a hard-coded URL in `index.js`, typically we want to store this URL in an `.env` file, so that when we deploy our application we only have to change the `.env` file instead of changing our `index.js`. We also want to move this code to our server, perhaps in our server's start function so that the start of the server and the connection to our database happen together.

> We choose the name `MONGODB_URI` for our `.env` file variable because it is the same one that Heroku uses, allowing for seamless deployment

```javascript
const start = port => {
    app.listen(port);

    const db = process.env.MONGODB_URI + '/app';
    const config = {
        useUnifiedTopology: true,
        useNewUrlParser: true
    };

    mongoose.connect(db, config);
};
```

And that's it! We don't need to manage the closing of our connection because conceptually there's not really a point in time in our code where we want to "close" our server or our database. Remember, we're now running a website, and websites are not supposed to terminate themselves at a certain point in time. So from now one, our server and our database connections will remain open until we manually kill our web application from our terminal.

## Deployment

Now that we know more about creating an application with a server and a live database connection, we need to see how we can turn our application from a development version into a production version.

Hopefully, you should have some experience with deploying a simple application to Heroku. It usually is as simple as going to https://dashboard.heroku.com/apps and clicking "New" in the top right. Once you connect to GitHub and choose a repository to deploy (and set up auto-deploy and CI integration) you should see your deployed application on your account.

Navigate to the "Resources" tab on your application, and scroll down to the "Add-ons" section. In the provided form field, enter in "mlab MongoDB" and you should see a single result. Click on that result, and in the pop-up, click "Provision". That should create a MongoDB for your application, and it will automatically add the `.env` variable `MONGODB_URI` with the connection URL to your application. You can see this variable if you go to the "Settings" tab on your application in Heroku. There, you should see a button in the "Config Vars" section that says "Reveal Config Vars". Click on it, and see your `.env` variables and their values (you can also add your own new ones).

However, even though your application is now hooked up to a new production database, it doesn't have any of your existing deployment database data!

## Summary
