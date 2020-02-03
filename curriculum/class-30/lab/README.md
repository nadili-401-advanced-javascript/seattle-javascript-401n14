# LAB - React Native ToDo Application

In this lab, we will be combining what we've learned over the course of the curriculum to make a full-featured ToDo application, running in React Native. This lab will largely be coded in class, with additional clean up, styling, commenting and tweaks made on your own time.

# Requirements

You lab will be a full react native application, with all of the ToDo functionality from your previous lab. Feel free to reference the provided [ToDo Server](https://github.com/soniakandah/toDoServer) and [ToDo React App](https://github.com/soniakandah/toDoApp) code.

You should have a sign-in portal that allows users to log in to view their tasks. You should then allow users to see their list of tasks, add some tasks, and modify existing tasks.

Add some front-end way to filter your tasks based on priority level, utilizing your `/priority/:level` route.

### Use Local Development

For this lab, we are creating phone applications. Use `expo-cli` to create and run the application locally, and then push this code to your lab repo so we can download and test it on our own devices.

### Must-Haves

We will be coding this lab primarily in-class, so most of the must-have requirements will be covered. Here are the must-haves for this lab so you can double check that your own lab has these needs met.

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
-   You must utilize _one_ React Native specific feature:
    -   Calendar Date Picker
    -   Camera integration
    -   GPS integration
    -   Contacts integration

### Commenting

You are required to comment each class and function using proper [JSDoc comments](https://devhints.io/jsdoc).

### Tests

This lab does not require any testing. Note that testing a React Native application is almost identical to testing a ReactJS application; the major difference is using the Native XML tag selectors instead of HTML + CSS selectors.

### Deployment

You are not required to deploy this application. Note that to "deploy", you would need to submit your application to either an Android or iOS app store.

## Assignment Submission Instructions

As usual, you will be required to have a `README.md` that you submit, with app installation and run instructions, and a UML diagram.

Create a new repository for this lab. [Connect this repository to your CodeSandbox](https://codesandbox.io/docs/git), and connect your repository to Travis as in your backend labs.

### Configure your repository

Configure your folder with the following files and directories.

-   `README.md` - contains your lab documentation ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/reference/submission-instructions/labs/README-template.md))
-   `.gitignore` - contains a robust .gitignore file ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.gitignore))
-   `package.json` - contains `npm` package config and scripts

### Submit to Canvas

-   Ensure that your `README.md` exists and has:
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
| Features: Score based on % of features demonstrably completed     | 7      |
| Code Implementation: Efficiency of code + Comments + Code Quality | 7      |
| Style: Components are styled in a pleasing way with custom Sass   | 4      |
| Documentation: README + UML                                       | 2      |
| Total:                                                            | 20     |
