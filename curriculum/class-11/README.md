# Class 11 - OAuth

## Key Terms

| Term  | Definition | Supporting Links |
| ----- | ---------- | ---------------- |
| OAuth | d          | d                |
| Proxy | d          | d                |
| OAuth | d          | d                |

## Key Packages

| Package | Description | Link |
| ------- | ----------- | ---- |
| d       | d           | d    |

## Where We're Coming From

## Where We're Going

## How To Get There

# Facilitators Guide: OAuth

## Learning Objectives

**Students will be able to ...**

-   Describe and Define
    -   The OAuth Process
    -   The pros and cons of OAuth
    -   Security concerns of OAuth
-   Execute
    -   Implement OAuth
    -   Prepare a "Suitability Recommendation" doc and presentation

## Lab Prep

-   The students lab starter code matches the live demo and is also the full solution code for Google
-   This lab is super fun. Pair up your students and assign each pair a different OAuth provider. You demo'd google. Assign groups to Facebook, Github, Auth0, etc.
-   The next day, have the groups come and present their solutions as a go/no-go report during code review time.
-   This is a great chance to force them to RTFM and figure this out. It's also really cool to see that all of the solutions are pretty much the same (it is OAuth, after all)

## Preparation

-   Understand the full OAuth flow and the history of this API/Process/Workflow.
-   Practice, practice practice. By its nature, OAuth is a 5 step handshake process.

## Past bugs, issues, or surprises

## General Comments and Notes

# Lecture Guide: OAuth

## Lecture Main Topics & Overall Flow

Before getting into OAuth, make sure and do a **SOLID** code review of the authentication solution code. It's imperative that we have a solid foundation of basic authentication (conceptually) and the auth-server as built before moving on and adding a new layer of complexity to it.

In this lecture, we introduce OAuth, which is quite a handshake process, but at the end of the day, we end up in the same place -- a user is "Logged In" to our server and we send back a token.

## What is OAuth, exactly?

-   Simply put, it's a proxy login
-   A service (i.e. Google) allows users to authenticate themselves and authorize an application to "become" them.
-   For example, if your node app uses OAuth through Google ...
    -   The user clicks the "Login with Google" button
    -   If they agree to login, your Node app gets a token.
    -   This token _is the person_ for all intents and purposes. Your app is now authorized to act at Google as though it were that exact user clicking buttons.
    -   Yikes! That's dangerous...
    -   You might want to start reading that pop-up and see what access you're actually granting.
        -   Do you really want that facebook app to be able to access your contacts or post as you?
    -   All of that said, when used properly, it's really convenient for the user.

## The OAuth Process

-   As a developer, you'll need to create a developer account and obtain access/API keys from an OAuth provider, like google.
-   You'll need to specify your website URL, API URL, and what type of access your app will be asking for.
-   On a web page, using their provided code and parameters, create a link that will pop up the login window. This actually emanates from their remote server.
-   Once the user agrees, the provider will send your application a token
-   Your app will then issue a request to the providers "Token server"
-   You will send it that code, and it will send you back a token.
-   You may then use that token to access any authorized service under the user's account.
-   At this time, you might want to check your local database and see if you have seen this user before.
    -   OAuth will send you some user information
-   If you want to persist this information, create a new account for this user, using that information and generate your own Token to be used to keep them logged into your application.
    -   This is separate from the OAuth token that you received from the provider.

# Demo: OAuth

It's a good idea to build up the demo step by step (log out the result of each promise in the chain). This does 2 things for you:

-   First, it gives you a chance to explain each part of this long process step by step, and see things build up.
-   Second, because this process is such a pain, it gives YOU a chance to either force error conditions (to have some teaching moments) or recover from unforeseen issues that come up in the process

## Live Coding Demo(s)

### Google Account

-   Login to the google developer console and create a new credential for this lab
-   Get a new API key
-   Enable the Google Plus API
-   Head to the docs to highlight the steps our handshaking process will need to take.

### Demo Part 1 -- `demo/oauth`

-   Create a static route, with an index.html file to hold the button
-   This button gets wired to google to do the pop-up permission window
-   The index.js is a very simple express app that has a single route that does the back and forth chatter for OAuth
-   Code this up just to the point where you get back a user from Google.

### Demo Part 2 -- `demo/auth-server`

Now that you "can" do OAuth, the next step is to wire that into the server. Ask the class how to do that ... work them into the answer, which is to move this route into your `auth-server` (the easy part) and then to take that user that comes back from Google and create an actual account in your mongo db with it.

This gives you a chance to talk about how you did this to see how things work, and then you can wire/integrate it into the server and add that bit of functionality. It also gives you a chance to code it a second time, cementing the concept.

-   The `demo/www-server` folder contains a static express server with an index.html file only.
-   Use this to serve up the login button.
-   Important to keep this separate from the `auth-server` ...why? Cement the fact that these can be totally separate and usually are.

For the actual OAuth piece ...

-   Code from the `demo/auth-server` folder.
-   The starts you out with the basic auth-server built in Class 11
-   `auth/router.js` - Add a new route for `.get('/oauth')` that will be used to initiate the oauth handshake process.
-   Most of this lab will be spent building out the handshakes in the `auth/lib/oauth/google.js` file
    -   Take this step by step through each of the handshake steps
-   `auth/users-model.js` needs a new static method, called `createFromOAuth()` that creates the mongo user from the data obtained by oauth.
-   Lots of opportunity in here to use the debugger to check the progress of all the handshaking.

## Learning Objectives

-   Setup a Google Cloud Application
-   Implement OAuth2 on the server side

## Outline

-   :05 **Housekeeping/Recap**
-   :30 **Whiteboard/DSA Review**
-   :15 **Lightning Talk**
-   Break
-   :30 **CS/UI Concepts** -
-   :20 **Code Review**
-   Break
-   :60 **Main Topic**

## Computer Science Concept:

-   Open Auth and Authorization

## UI Concept:

-   Grid Layouts

## Main Topic

### OAUTH2.0

OAuth is an open standard for access delegation. It serves as a way to give users the ability to grant application access to services, without giving the application their password.

### Access Code

First the client needs to grant the application permision. To do this you need to provide an `<a>` tag that will take them to the service's authorization page. This `<a>` tag should pass the following information through a query string to the authorization server.

-   `response_type=code` indicates that your server wants to recieve an authorzation code
-   `client_id=<your client id>` tells the authorization server which app the user is granting access to
-   `redirect_uri=<your redirect uri>` tells the auth server which server enpoint to redirect to
-   `scope=<list of scopes>` tells the auth server what you want the user to give access to
-   `state=<anything you want>` a place where you can store info to pass to your server if you want

### Access Token

If the users grants access to the application, the authorization server will redirect to a provided redirect URI calback with a "code". Once you have this code, you can exchange it for an access token by making a `POST` request to the authorization server and providing the following information:

-   `grant_type=authorization_code`
-   `code=<the code your recieved`
-   `redirect_uri=REDIRECT_URI` must be same as the redirect URI your client provied
-   `client_id=<your client id>` tells the authorization server which application is making the requests
-   `client_secret=<your client secret>` authenticates that the application making the request is the application registered with the `client_id`
-   once you get an access token, you can use it to make API calls to the service on behalf of that user

### Basic Access Authentication

We've talked a lot about security on the server-side, but what about the client-side? If you have a client that wants to send a username and password to a server to authenticate, how does the client do that securely?

One of the ways a client can do that is through basic access authentication. The client takes a username and password and encodes them, sending them in the header of a request.

For example, supposed we had the following user data entered on a client's login form:

```
Username: sarah
Password: mypassword
```

The client would then join the username and password into one string, where the username and password were separated by a colon:

```
sarah:mypassword
```

That string would then be encoded using a `base64` encoding pattern:

```javascript
let basicAuth = 'Basic ' + new Buffer('sarah:mypassword').toString('base64');
```

Finally, the client sends this encoded string to the server by putting the string within the header of a request.

```javascript

fetch('/somePath', {
    method: 'GET'
    headers: {
        Authorization: basicAuth
    }
});
```

There are
