# LAB - Dynamic Forms

In this lab, you will be writing an application that generates a form based off of editable JSON data.

## Requirements

Your task for this lab will be to continue to use redux, but explore further the power of JavaScript logic in component creation. We will also be using combined reducers for the first time.

### Sample Implementation

You can find an example of a possible solution to this lab here:

[Sample Lab](https://js401n14-lab27.netlify.com/)

Note that this example is just for your reference, **your final lab does not need to match this example exactly**. A few things to note from this implementation:

-   The [Bootstrap](https://getbootstrap.com/) CSS framework is used for styling, along with some custom Sass
-   This project has the `App` component, as well as the following structure:
    -   `store.js` contains the redux store
        -   `jsonReducer.js` contains a reducer for the JSON-related data
        -   `formReducer.js` contains a reducer for the form-related data
    -   `Form` is a component that generates a form from JSON data
    -   `JsonAdder` is a component that lets users type in JSON into a textarea
    -   `FormDataPrinter` is a component that prints the saved results from a form submission

### Use CodeSandbox

For this React lab, you will be required to work in a [CodeSandbox](https://codesandbox.io/) project, instead of local code uploaded to Git. The reason for this is so that we can grade your work easier!

You can find instructions for how to create a CodeSandbox project in the class 18 [README](../../class-18/README.md#CodeSandbox).

### Must-Haves

For these front-end assignments, there is a lot more room for creativity and exploration. Typically, there will be a provided sample implementation that you can use for reference / inspiration. You do not have to duplicate this sample implementation; instead there are always a few key requirements that your application **must have** to get full points. Here are the must-haves for this lab:

-   You must implement a redux store that combines two separate reducers into one store object
-   You must have a textarea that allows users to edit or add their own JSON data
    -   Initialize this with a default entry that shows your expected JSON structure and key-values
    -   Show the user when their typed JSON is valid or invalid
        -   Hint: You should be able to utilize `JSON.parse` and/or `JSON.stringify`
-   You must have a dynamically created form that updates when the JSON entry changes
    - You do not need to have all possible form inputs planned for, just have at least a minium of four unique form inputs (buttons included) that can be generated via JSON
    -   Respond to invalid JSON elegantly
    -   Everything should be dynamic - empty JSON would result in a non-existent form.
-   You must have some method to allow for form submission
    -   Ex: users can add a submit button in their JSON schema that submits the form
-   On form submission, you must print out the saved form values
    -   These form values should be saved in the application state for further use
-   Custom Sass styling
    -   All custom style code must be in Sass
    -   If you would like to use a CSS framework, you must have some custom sass styles as well
    -   Sass code should be well structured and non-repetitive using partials and mixins

### Commenting

You are required to comment each class and function using proper [JSDoc comments](https://devhints.io/jsdoc).

### Tests

This lab will be graded for test coverage (80% is what to shoot for). You should not implement any snapshot tests. Instead, implement mount (shallow, full or render) tests using Enzyme. Here are some ideas of what you might want to test for:

-   Invalid JSON
-   Valid JSON
    -   Updates the form
    -   Adds the expected elements on the form page
    -   Missing key-values (id, type, label, etc) should not break the app; either handle with render or show error message
-   Form submit
    -   Application state updates correctly
    -   Form data is recorded with correct key-value pairs

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
