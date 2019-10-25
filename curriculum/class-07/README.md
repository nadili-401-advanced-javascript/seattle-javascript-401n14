# Class 07 - Express

| [Lecture Video](https://frontrowviews.com/Home/Event/Play/5d8e8678bdb995374c44c82b) | [Lab Video](https://frontrowviews.com/Home/Event/Play/5d8e8551bdb995374c433613) |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |


## Key Terms

| Term                                  | Definition                                                                                                                                                                                                                                                                                                                                                                                 | Supporting Links                                                                                                                                                                                           |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web Application Framework (WAF)       | A web application framework (WAF) is something that supports the development of web applications by providing easy ways to setup web services, resources and APIs. WAFs give you a standard way to build and deploy web applications online. Many WAFs provide easy ways to access an external database (such as MongoDB) and to set up REST API endpoints on your own application.        | [1](https://www.scnsoft.com/blog/web-application-framework)                                                                                                                                                |
| Server-Side Web Application Framework | This is a category of WAF which is makes HTTP requests, database control, database management, and application URL mapping easier to code.                                                                                                                                                                                                                                                 | [1](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Web_frameworks) / [2](https://medium.com/@shahroznawaz/best-backend-frameworks-to-build-your-next-web-application-2f89f08f34e3) |
| Middleware                            | Middleware is software that acts as a bridge between an application and a database or server, especially on a network. Middleware functions can execute code, deal with asynchronous function responses, handle errors, and more!                                                                                                                                                          | [1](https://expressjs.com/en/guide/using-middleware.html)                                                                                                                                                  |
| Express                               | Express is a fast, simplistic web application framework for Node.js, focused on "back-end" or "server-side" code.                                                                                                                                                                                                                                                                          | [1](https://www.youtube.com/watch?v=L72fhGm1tfE)                                                                                                                                                           |
| Routing                               | Routing refers to how a server responds to a client request where there is a defined path and a specific request method (GET, POST, and so on). The server “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the defined callback function(s).                                                                                 | [1](https://expressjs.com/en/guide/routing.html) / [2](https://expressjs.com/en/starter/basic-routing.html)                                                                                                |
| PATCH                                 | PATCH is another HTTP verb, similar to PUT, POST, etc. PATCH specifies that we want to update a piece of a record on a database, instead of updating everything in the record like PUT does                                                                                                                                                                                                | [1](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH)                                                                                                                                       |
| Port                                  | A port is a communication endpoint, and it is always associated with a host. Port numbers range from 0 to 65535, with 0 - 1024 being reserved for privileged services. HTTP requests use the default port number "80" unless specified to do otherwise (as we do when we say `localhost:3000`)                                                                                             | [1](https://searchnetworking.techtarget.com/definition/port) / [2](<https://en.wikipedia.org/wiki/Port_(computer_networking)>)                                                                             |
| Domain Name System (DNS)              | The Domain Name System is like a phonebook for the internet. DNS translates URLs such as "facebook.com" or "google.com" into IP addresses which the browser then loads resources from.                                                                                                                                                                                                     | [1](https://www.cloudflare.com/learning/dns/what-is-dns/) / [2](https://searchnetworking.techtarget.com/definition/domain-name-system)                                                                     |
| Web Request Response Cycle (WRRC)     | The web request response cycle (WRRC) is simply a way of understanding how the internet works. Everything you do on the internet is a series of requests and responses; the browser sends GET requests to URLs in order to load HTML content, and web applications use additional HTTP requests to get and manage data. It is a formal way to describe what we have been already learning. | [1](https://medium.com/@jen_strong/the-request-response-cycle-of-the-web-1b7e206e9047) / [2](https://www.youtube.com/watch?v=eesqK59rhGA)                                                                  |

## Key Packages

| Package                   | Description                                                                                                           | Link                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| json-server               | Creates a web API server                                                                                              | [npm](https://www.npmjs.com/package/json-server)               |
| supertest                 | Helps us mock up a fake server for testing, based on the routes and content defined in our actual server              | [npm](https://www.npmjs.com/package/supertest)                 |
| express                   | A package (actually, _middleware_) that makes it much easier and faster for us to create a server                     | [npm](https://www.npmjs.com/package/express)                   |
| express-swagger-generator | Creates a swagger documention hub for our server, using a simple config object and JSDoc-like comments from your code | [npm](https://www.npmjs.com/package/express-swagger-generator) |
| nodemon                   | Lets us rebuild and watch for changes in our server, so that we don't have to continually restart our server manually | [npm](https://www.npmjs.com/package/nodemon)                   |
| node-fetch                | A Promise-based wrapper for HTML requests, so that we can easily write those requests in our JavaScript code          | [npm](https://www.npmjs.com/package/node-fetch)                |
| superagent                | A Promise-based wrapper for HTML requests, so that we can easily write those requests in our JavaScript               | [npm](https://www.npmjs.com/package/superagent)                |

## Where We're Coming From

### Data Modeling and CRUD

In class 04, we talked about _data modeling_, which is the process of mapping out what kind of data we want in our application, and what rules that data should follow. We did not have a database, so we used a file as a stand-in, asynchronously reading and writing to that file to "persist" or save our data changes. We created a model for People and another model for Teams; both of these had unique schema they followed and they both inherited from a generic model which implemented CRUD (Create, Read, Update and Delete) operations. We then defined specific relations between People and Teams when adding to our database in our `index.js`. An example of a relation we coded is:

```
  if creating person
    if person.team AND person.team NOT IN Teams
      create team in Teams
      set person.team = team.id
      create person in People
```

### NoSQL and MongoDB

In class 05, we built on the ides of data modeling with an actual database: MongoDB. With MongoDB being a NoSQL database, we saw that behind the scenes all the data was stored in files. MongoDB exposed a lot a database functions to us, and we used those in our model CRUD operations. We also used Mongoose as a middleman between our code and our database, and it enforced schema validation upon on our data. In our `index.js`, we managed the opening and closing of our database connection and were able to query our database efficiently.

### HTTP and REST

In class 06, we explored a different process to get data; not from a database directly but from a website created with `json-server`. Websites (or actually, web applications) can independently manage and use their own data with a connection to a database, but they can also _serve_ data to other applications. Web applications can create endpoints or routes which other applications can access to read data, create data, update or even delete data (Aha! The CRUD operations we know and love!). When connecting to a web server (a web application that _serves_ data), there are a few things we should know:

- The CRUD operations get transformed into HTTP operations:

  | CRUD Operation | HTTP Operation |
  | -------------- | -------------- |
  | Create         | POST           |
  | Read           | GET            |
  | Update         | PUT or PATCH   |
  | Delete         | DELETE         |

- The server needs to expose some _endpoints_ that other applications can hook into. This is required for the server to be a REST API. Luckily, we saw that `json-server` does that automatically after reading from the "database" located in `/data/db.json`, so we quickly got our `/people` and `/teams` endpoints.

- In order to have a client-server relationship between our application and the application giving us data, we need to follow the REST conventions

  - Our application is _requesting_ data, so it needs to use the REST request format:

    ```
    Method: GET, POST, PUT, DELETE, PATCH, etc.
    Path: The URL + endpoint you're trying to access
    Headers:
      Content-Type: If we have a body that sends data, this the the type of that data
      // ... any other needed Header information ...
    Body: Any data we want to send to the server (This is important in POST, PUT and PATCH methods)
    ```

  - Our `json-server` is _responding_ with data, so it needs to use the REST response format:

    ```
    Status: From 1xx-5xx, where each number describes a unique status (2xx is success!)
    Content-Type: If we have a body that sends data, this the the type of that data
    Data: Any data that was requested is now in the response
    // ... any other needed Server information ...
    ```

### Summary

After having these three classes build upon each other, we've learned how our applications (A.K.A. the client) can talk to a server, how our applications can talk to a database, and how a server can expose endpoints which hook into a database. Our next step is to combine the things we've learned in a new way!

## Where We're Going

When we think of web applications, we usually think of a more dynamic website with some back-end magic happening. Facebook is an example of a complex web application. It generates HTML pages and content on-the-fly based on who's logged in, what posts should be loaded, what we're trying to do, etc. Facebook consistently connects with a database and exposes endpoints so that you can create, read, update, and delete (our friend CRUD again!) your content easily. And above it all, Facebook manages all of these operations smoothly and quickly!

How can we transform our lightweight programs that only run in terminal into a powerful web application that we can host on a URL? In order to do this we'll need a few things:

- A portion of our application (the client-side or front-end) that is focused on creating things to show to a user
- A portion of our application (the HTTP server-side or back-end) that talks to our database and exposes endpoints (A.K.A. paths) that a browser can access in order to display things
  - Remember from class 06:
    - Using `http://` + `some url` really just means `GET content at url`; that's what our browsers are doing behind-the-scenes
    - We need a server to create the `/` endpoint so that our browser can `GET www.mywebapp.com/` and load a homepage of some sort
    - Instead of using hard-coded HTML pages, we're now going to have our server define what the "pages" in our application are, and what content we should respond with when our browser requests that page (aha! Requests and responses again!)
- (Optional but Likely): A database that stores important data for our application. Our server can talk to the database and expose additional database endpoints for our client. This is generally safer / more recommended than having the client talk to the database directly.

We used `json-server` in our last lab to create a server and endpoints for us, but that's very limiting since we can't edit any of the server code, or connect `json-server` to a MongoDB database. So from here on out, we're going to code our own servers. Luckily, we have a module that can help us greatly with that process!

## How to Get There

The Express module can make the work of creating a server a lot simpler. Let's start off with a quick demo.

### Demo: `/api-server`

This demo has a lot of the bare-bones setup already, so you only have to run an `npm install` to get all the packages loaded. When you create your own applications, just note that you'll need to install the following packages to get basic express functionality:

```
npm install express
npm install ejs
npm install method-override
```

In this demo, we can see the following path structure defined for us:

```
/api-server
  /__test__
    server.test.js
  /docs
    /config
      swagger.js
  /lib
    sever.js
  index.js
```

If we open `index.js`, we see such simple code!

```javascript
const server = require('./lib/server.js');

server.start();
```

Our "client-side" code doesn't really do much other than connect to our server. What happens when we run our app in terminal using `npm start` or `node index.js`? We get the following response from our terminal:

```
Listening on 3000
```

One thing to notice is that our terminal doesn't complete the program. Seems like our application is still running, and that's probably because while we started our connection to our server in `index.js` using `server.start()`, we never closed our server. The same thing happened to us in class 05 when we didn't close our MongoDB connection! In this instance, if you think about our application as a _web app_, it makes sense: a website doesn't really have a reason to "turn off" when it's done running code. It's always running until something gets shut off in the back-end. Speaking of website, we saw that our application was "Listening on 3000". 3000 sounds like a port number, one we usually see in the context of `localhost:3000`. Open up a browser and navigate there, and you should see some magic happening!

So now we should be aware of two things:

- By having a server and starting it in our `index.js`, we hosted our application onto a URL. Of course, the URL is just our `localhost`, but that's still very powerful!
- Just by starting our server, we somehow got a homepage that has something printed on it, even though there are no HTML files in our entire application

How did we create a website homepage if we don't actually have any HTML pages in our folder? The truth is, we didn't create an HTML page. We know that whenever a browser attempts to route to a URL, it does a GET request and then displays the response. Most of the time, the GET request returns an HTML file called `index.html`. But if we have our own server, we can mess around with the browser's GET request and send it something else entirely:

```javascript
app.get('/', (req, res) => {
  res.send(
    "Congrats! You're running a web application with a client and a server!"
  );
});
```

When the browser makes a request to load our homepage (denoted by a `/`), we get that request in our server and can specify what to return in the response. In this case, we just send a simple string. The browser then takes that returned response and handles it in some way. One of the nifty things about express is that the [`.send(body)` function](https://blog.fullstacktraining.com/res-json-vs-res-send-vs-res-end-in-express/) on responses also automatically figures out the body's content type (whether it's a string, array, object, etc) and communicates that to the browser! So the browser sees that we sent it a string instead of an HTML file, and it decides to handle that by pasting the string into a blank HTML page's body. And thus, we have a homepage!

#### Creating New Routes

We can easily create new routes by just adding a new `.get` on our `app`. Try adding the following snippet of code right below the first `app.get()` command:

```javascript
app.get('/cats', (req, res) => {
  res.send('Did you know that I love cats?');
});
```

If you save your `server.js` file, and then attempt to navigate to `localhost:3000/cats` you'll probably get an error like: `Cannot GET /cats`. What if you kill your program in terminal (Control C) and try run it again? Will the path `localhost:3000/cats` work in your browser now?

It does! So now we see that editing our `server.js` doesn't _rebuild_ our server. We have to manually kill our server and then restart it. That can be very tedious and difficult during development, so let's use a module that will better handle updates to our `server.js`.

#### Nodemon

```
npm install -g nodemon
```

The package `nodemon` will restart our server automatically anytime we make changes to it! We want to install it **globally** because it's not really essential for our application to run, it's just a tool we're using as developers to make our lives easier. In order to use `nodemon` after installing, we should now launch our application using `nodemon` as a prefix:

```
nodemon index.js
```

or

```
nodemon start
```

> NOTE: Don't put `nodemon` in your `start` script within `package.json`

Once your application is running again, try to add another route via our server:

```javascript
app.get('/dogs', (req, res) => {
  res.send('I happen to also love dogs!');
});
```

Save your `server.js` and without restarting your app, attempt to navigate to `localhost:3000/dogs`. Works like a charm!

Now that we've got our feet wet with express, let's take a look at how we take our server further.

### Demo: `/middleware`

When using the term "middleware" in reference to express servers, we usually are talking about any code that is not creating a response from a request. Our request / response code is the heart of our server, but sometimes we need other code to help us do certain actions. There are a few categories of express middleware:

#### Application Middleware

Application middleware is meant to be used across our entire application and all requests and response pathways. Application middleware can come in two variants, the `app.use()` variant and the `app.METHOD()` (where `METHOD` is one of the HTTP operations such as `.get`, `.put`, `.post` or `.delete`) variant. We've already been using the `app.METHOD()` variant, that was exactly what we did in the last demo! So let's take a look at `app.use()`:

Here's some code that is executed on **all** requests to our server:

```javascript
app.use(express.json());
```

The above code says: any time I get a request, run the function [`json()`](https://expressjs.com/en/api.html#express.json) from the express module. If you look at the linked function definition, all this function does is transform the body of a request into a JavaScript object. We can add as many `app.use()` commands as we need and place our own custom functions in the parens:

```javascript
app.use((req, res, next) => {
  console.log('I run every time there is a request!');
  next();
});
```

As you can see, a couple of things are interesting here! Firstly, we pass the parameters `req`, `res`, and `next` to this function, even though we don't use them directly. This is standard for middleware: each middleware function has access to the request object, the response object, and a function `next()` which will call the next piece of middleware in the call stack. So keep this in mind when writing middleware, always call `next()` at the end of your middleware functions. From now on, we'll be adding the `next` parameter to our standard route functions as well, as a best practice. We don't need to end our main request body with a `next()` because this is the end of our request. Only middleware needs to actually call `next()` because we either need to go to the next middleware, or to the main endpoint of the request.

```javascript
app.get('/dogs', (req, res, next) => {
  res.send('I happen to also love dogs!');
});
```

You can also pass middleware as a new parameter on any `app.use()` or `app.METHOD()` and it will execute in order from left to right!

```javascript
app.get('/dogs', myMiddleWareFunc, (req, res, next) => {
  res.send('I happen to also love dogs!');
});
```

#### Router Middleware

Router middleware will let us make our server a little more modular. If you have a complicated web app, you're probably going to have a lot of different routes and a lot of long routes (`/item1/item1-2/item1-2-3/...`). In order to make this a little less complicated, express has a module called `Router()` which basically will let you map `/` to some long path like `/item1/item1-2/item1-2-3`. Here's how it works:

BEFORE:

```javascript
app.get('/dogs', (req, res, next) => {
  res.send('I happen to also love dogs!');
});

app.get('/dogs/bark', (req, res, next) => {
  res.send('I think dogs that bark are cute!');
});

app.get('/dogs/bark/muzzle', (req, res, next) => {
  res.send("Aww, I hope the dog isn't sad with a muzzle on...");
});
```

AFTER:

```javascript
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('I happen to also love dogs!');
});

router.get('/bark', (req, res, next) => {
  res.send('I think dogs that bark are cute!');
});

router.get('/bark/muzzle', (req, res, next) => {
  res.send("Aww, I hope the dog isn't sad with a muzzle on...");
});

app.use('/dogs', router);
```

Both of these methods result in the same paths, however by using `Router()` we're able to make our dog routes a little bit cleaner, and maybe even move them to another file!

#### Error Handling Middleware

While most middleware has parameters in the format `(req, res, next)`, error middleware has parameter in the format `(err, req, res, next)`. Error middleware is called automatically whenever our server `throw`s an error, or whenever we call `next('failed')`.

```javascript
app.get('/err-throw', (req, res, next) => {
  console.log('In the "/err-throw" route');
  throw 'failed';
});

app.get('/err-manual', (req, res, next) => {
  console.log('In the "/err-manual" route');
  next('failed');
});

app.use((err, req, res, next) => {
  res.status(500);
  res.send(err);
  res.end();
});
```

Note that in error handling middleware, you should not call `next()` because it doesn't make sense to continue going through the middleware or request if there is an error. Instead, you can call `res.end()` to end the request flow.

## Testing Your Express Server

Generally, when we want to test connections to our server and databases, we don't actually want to run the server/database or interfere with any of our data. So, we use a helper module `supertest` to hit our server routes as if our server was running, without actually starting our server!

If you look in the `/__test__` directory of your lab's starter code, you should see that there is a file called `supertester.js`. Hopefully you've seen this before in previous labs; it does a lot of work for use behind-the-scenes so that we can focus on the body of our tests. Be sure to require this exported module (and your actual server.js file) at the start of all of your test files that are testing server code:

```javascript
const server = require('../lib/server.js');
const supertester = require('./supertester.js');
```

Next, we need to actually create our "fake server" that we will attempt to use in our tests:

```javascript
const mockRequest = supertester(server);
```

Now, we're ready to actually test a route in our server! Let's try that with a simple get request:

```javascript
it('should successfully GET', () => {
  mockRequest.get('/my-route').then(res => {
    expect(res.status).toBe(200);
  });
});
```

And thus we have successfully created a simple mock server request! One thing to note is that the `supertester` package uses another package, [`superagent`](https://visionmedia.github.io/superagent/), to actually carry out the requests. In our previous lab, we used `node-fetch` to carry out requests. While the syntax between `node-fetch` and `superagent` is a bit different, the end result is the same; requesting returns a Promise which can be asynchronously handled.

## REST Documentation (Swagger)

The standard for documenting REST APIs is with a "live" documentation system. We saw this in our last lab with the Swagger tool.

Once generated, Swagger Docs present developers a way not only see how to use an API, but to actually use it. This documentation allows for live requests from with it, which is immensely powerful and helpful in learning how an API works.

Here's an example of an existing public API documented through Swagger: [Star Wars API Docs](https://app.swaggerhub.com/apis/ahardia/swapi/1.0.0#/)

- On the left, you'll see the source code for the documentation.
- On the right is the generated "Swagger" or "Open API" documentation for the [Star Wars API](https://swapi.co/api/people)

### Building Swagger Documentation

We can use the node module `express-swagger-generator` to create an endpoint on our server that will render your API's live documentation. All you have to do to make this work is to add properly formatted JSDoc-like comments in your API.

> These comments will _replace_ JSDoc comments in your server.

Create a file called `swagger.js`, and build a new server that will host it (your live documentation should not be on the same port as your main application). For example, if your application is running on port 3000, you can set your live documentation to run on port 3100. This file should contain some configuration rules in a JavaScript object, which will then be used to generate your live documentation.

Here's an example of a full `swagger.js` file:

```javascript
const express = require('express');
const app = express();
const expressSwagger = require('express-swagger-generator')(app);

let options = {
  swaggerDefinition: {
    info: {
      description: 'API Server',
      title: 'Swaggertastic Docs!',
      version: '1.0.1'
    },
    host: 'localhost:3000',
    basePath: '',
    produces: ['application/json'],
    schemes: ['http'],
    securityDefinitions: {
      basicAuth: {
        type: 'basic'
      }
    }
  },
  basedir: __dirname, //app absolute path
  files: ['./*.js'] //Path to the API handle folder
};
expressSwagger(options);
// start up a specific standalone swagger server on a specific port
app.listen(3100);
```

Here's a description of the major items in this configuration that you might want to modify:

| Key                | Description                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| `info.description` | A description for your server API                                                                        |
| `info.title`       | The title for your server API                                                                            |
| `host`             | Where your main server (from `server.js`) is running                                                     |
| `basePath`         | If the main page of your server is something other than `\`, you can specify a unique starting path here |
| `produces`         | What kinds of data this API returns (json, img, html, etc)                                               |
| `schemes`          | The kinds of protocols this API supports (http, https, ftp, etc)                                         |
| `basedir`          | The base directory for your server files                                                                 |
| `files`            | The path to your server files (for example `../../lib/`)                                                 |

Within your actual server (`server.js`), document your routes, with properly formatted comments like this:

```javascript
/**
 * Get a list of records for a given model
 * Model must be a proper model, located within the ../models folder
 * @route GET /api/v1/{model}
 * @param {model} model.path - Model Name
 * @security basicAuth
 * @returns {object} 200 { count: 2, results: [ {}, {} ] }
 * @returns {Error}  500 - Server error
 */
router.get('/api/v1/:model', auth('read'), handleGetAll);

/**
 * @route POST /api/v1/:model
 * Model must be a proper model, located within the ../models folder
 * @param {model} model.path.required
 * @returns {object} 200 - Count of results with an array of results
 * @returns {Error}  500 - Unexpected error
 */
router.post('/api/v1/:model', auth('create'), handlePost);
```

Once done, navigating to your running server at `/api-docs/` on the port specified in your swagger.js configuration file will reveal your live running Open API documentation. You will only generate Swagger API endpoints in your documentation if you add JSDoc-like comments to each route in your `server.js` AND if you update the configuration `files` key-value.

**This is required for every API server that you create**

## Summary

We now should have some idea of how to create a server within our application, so that we can better separate out client-side and server-side functionality, create our own routes when our app is deployed and running, and have a flexible front-end for users to actually see our app in the browser instead of just on terminal. Express is a fundamental piece of the Node development ecosystem, so we'll be continuing to use it throughout this course. As we get more versed in express, we'll connect it to MongoDB and have it actually manage our application's data!
