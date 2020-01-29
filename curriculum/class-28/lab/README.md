# LAB - ToDo Application

In this lab, we will be combining what we've learned over the course of the curriculum to make a full-featured ToDo application. This lab will largely be coded in class, with additional clean up, styling, commenting and tweaks made on your own time.

# Requirements

You lab will be a fully developed back-end and front-end. Utilize code from previous labs where you can!

## Backend

You should have a backend which allows you to use HTTP requests to authenticate, create tasks, and persist those tasks across multiple logins. There should be a MongoDB which creates and stores records, and your API should be live an accessible via Heroku.

You can find the (mostly complete) API [here](https://github.com/soniakandah/toDoServer). Clone this into your own repository and put comments, adjustments and additions there.

You must add a GET route `/priority/:level` which returns any tasks for that user at the given priority level.

## Frontend

You should have a sign-in portal that allows users to log in to view their tasks. You should then allow users to see their list of tasks, add some tasks, and modify existing tasks.

You can find the (mostly complete) Front End [here](https://github.com/soniakandah/toDoApp). Clone this into your own repository and put comments, adjustments and additions there. To get this application working with your deployed API, be sure to change the `api` variable in `util.js` to be the correct path:

```javascript
// replace this url with your personal API url
export const api = 'https://js401n14-todo-server.herokuapp.com';
```

You must add some front-end way to filter your tasks based on priority level, utilizing your `/priority/:level` route.

### Use CodeSandbox

For this React lab, you will be required to work in a [CodeSandbox](https://codesandbox.io/) project, instead of local code uploaded to Git. The reason for this is so that we can grade your work easier!

You can find instructions for how to create a CodeSandbox project in the class 18 [README](../../class-18/README.md#CodeSandbox).

### Must-Haves

For the front-end portion, there is a lot more room for creativity and exploration. We will be coding this lab primarily in-class, so most of the must-have requirements will be covered. Here are the must-haves for this lab so you can double check that your own lab has these needs met.

-   You must implement a redux store
-   You must implement a login user flow
    -   Allow users to create an account using a login form
    -   Allow users to sign in to existing accounts using a login form
-   You must implement a Task page with the following features:
    -   List all the user's current tasks
    -   Allow user to mark tasks as done
    -   Allow user to add new tasks
    -   Allow user to delete tasks
    -   Allow user to edit tasks
    -   Allow user to filter tasks based on priority level (tasks without a priority level should default to priority 5)
-   Custom Sass styling
    -   All custom style code must be in Sass
    -   If you would like to use a CSS framework, you must have some custom sass styles as well
    -   Sass code should be well structured and non-repetitive using partials and mixins
    -   You must attempt to make your styling mobile-responsive (does not have to be perfect!)

### Commenting

You are required to comment each class and function using proper [JSDoc comments](https://devhints.io/jsdoc).

### Tests

This lab will be graded for test coverage on the front-end side only (80% is what to shoot for). You should not implement any snapshot tests. Instead, implement mount (shallow, full or render) tests using Enzyme. Here are some ideas of what you might want to test for:

-   User can log in
-   User can sign up and create a new user
-   User can create a task
-   User can edit a task
-   User can mark a task as done
-   User can delete a task

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
| Features: Score based on % of features demonstrably completed     | 5      |
| Code Implementation: Efficiency of code + Comments + Code Quality | 5      |
| Style: Components are styled in a pleasing way with custom Sass   | 5      |
| Testing: 0 for no tests, full points for 80% coverage             | 2      |
| Deployment to Netlify                                             | 1      |
| Documentation: README + UML + Links                               | 2      |
| Total:                                                            | 20     |
