# LAB - Custom Hooks: Socket and Fetch

In this lab, you will be creating a two page application, where one page exhibits a socket connection, and another page loads some data from an external API.

## Requirements

Your task for this lab will be to write custom hooks for getting data from socket events, and for fetching data from an external API. There is a lot of flexibility in this lab; you can use any socket or any API you like.

### Sample Socket

You will have a sample socket server available to use in the lab starter code. To run this, download the server folder onto your machine, run `npm install` and `npm start`, and then the socket server should be running and allow for connections on port 3005. Note that _you do not have to use this provided socket_. You can edit this socket, you can write your own, or you can use any other socket exposed on the web.

### Sample Implementation

You can find an example of a possible solution to this lab here:

[Sample Lab](https://js401n14-lab23.netlify.com/)

Note that this example is just for your reference, **your final lab does not need to match this example exactly**. A few things to note from this implementation:

-   The [Bootstrap](https://getbootstrap.com/) CSS framework is used for styling, along with some custom Sass
-   This project has the `App` component, as well as a component for `Unsplash` and `Socket`
-   The custom hook `useSockets` is used to connect to the chat socket server provided in the starter code
-   The custom hook `useUnsplashPhotos` is used to connect to the unsplash API and return a response]

### Use CodeSandbox

For this React lab, you will be required to work in a [CodeSandbox](https://codesandbox.io/) project, instead of local code uploaded to Git. The reason for this is so that we can grade your work easier!

You can find instructions for how to create a CodeSandbox project in the class 18 [README](../../class-18/README.md#CodeSandbox).

### Socket Connection

Regardless of which socket you use, you must include detailed instructions in your README about how to run the socket server (if running a socket server is required). We won't be able to test your socket otherwise!

### Must-Haves

For these front-end assignments, there is a lot more room for creativity and exploration. Typically, there will be a provided sample implementation that you can use for reference / inspiration. You do not have to duplicate this sample implementation; instead there are always a few key requirements that your application **must have** to get full points. Here are the must-haves for this lab:

-   You must implement two custom hooks in your application
    -   One should have the purpose of returning an API response
    -   One should have the purpose of connecting to / retrieving socket data
-   You must have two pages in your application using react router
    -   Include some navigation header to route between the two pages
-   You must have a page that demonstrates a connection to a running socket server
    -   Either use the socket server in the starter code, or write / find your own
    -   Provide information either on this page or in your README on how to best check the socket connection (for example, in the Sample Lab you can see instructions for opening it again in a new tab)
-   You must have a page which GETS, POSTS, PUTS, or DELETES content to an API endpoint
    -   Use something other than the Unsplash search API
    -   Demonstrate that you are able to call the API on a state change
    -   Provide information either on this page or in your README on how to best check the API connection
-   Custom Sass styling
    -   All custom style code must be in Sass
    -   If you would like to use a CSS framework, you must have some custom sass styles as well
    -   Sass code should be well structured and non-repetitive using partials and mixins
    -   Add some custom styling for each of your pages

### Commenting

You are required to comment each class and function using proper [JSDoc comments](https://devhints.io/jsdoc).

### Tests

This lab will be graded for test coverage (80% is what to shoot for). You should not implement any snapshot tests. Instead, implement mount (shallow, full or render) tests using Enzyme. Here are some ideas of what you might want to test for:

-   Page Navigation
    -   The correct component renders on each page
    -   Navigation buttons work correctly
-   Socket connection
    -   You DO NOT need to test socket connection
    -   Test that when socket data is received, it is displayed properly
    -   Test that this component loads as expected when not connected to a socket (doesn't break)
-   API connection
    -   Test that you are able to get a response
    -   Test what happens when your api returns an error (bad input)
    -   Test that results are displayed correctly

### Deployment

Deploy your CodeSandbox application to Netlify (CodeSandbox has that built in!)

## Assignment Submission Instructions

As usual, you will be required to have a `README.md` that you submit, containing a link to your CodeSandbox, deployed website, and UML Diagram.

Create a new repository for this lab. [Connect this repository to your CodeSandbox](https://codesandbox.io/docs/git), and connect your repository to Travis as in your backend labs.

### Configure your repository

Configure your folder with the following files and directories.

-   `README.md` - contains your lab documentation ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/reference/submission-instructions/labs/README-template.md))
-   `.gitignore` - contains a robust .gitignore file ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.gitignore))
-   `.travis.yml` - contains default travis configuration ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.travis.yml))
    -   Note: React has a built-in linter, and so for react labs you do not need to have ESLint or any ESLint configuration files. Also, be sure to remove the `npm run lint` command from your `.travis.yml`
-   `package.json` - contains `npm` package config and scripts

### Submit to Canvas

-   Ensure that your `README.md` exists and has:
    -   A link to your CodeSandbox
    -   A link to your deployed site
    -   Instructions for how to operate your application
        -   Please be clear and descriptive
        -   If parts of your application are broken, use this section of your README to describe how to run the working code so you can get partial points
    -   Embedded UML diagram image

**Be sure to delete any placeholder content if you use `README-template.md`.**

Once you've ensured your `README.md` is correct, within Canvas submit a link to your `README.md`

### Resubmitting

In order to resubmit, you can add another submission on the Canvas assignment with the same link to your `README.md`. Optionally, add a comment on your submission describing what changed in your resubmit.

## Grading Rubric

| Criteria                                                          | Points |
| ----------------------------------------------------------------- | ------ |
| Features: Score based on % of features demonstrably completed     | 2      |
| Code Implementation: Efficiency of code + Comments + Code Quality | 2      |
| Style: Components are styled in a pleasing way with custom Sass   | 2      |
| Testing: 0 for no tests, full points for 80% coverage             | 2      |
| Deployment to Netlify                                             | 1      |
| Documentation: README + UML + Links                               | 1      |
| Total:                                                            | 10     |
