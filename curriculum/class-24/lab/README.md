# LAB - Context API

In this lab, you will be creating a theme-able "About Me" or virtual business card.

## Requirements

Your task for this lab will be to utilize various contexts (at least two) throughout your application. These contexts should have editable state variables which affects how multiple independent child components in your application render.

### Sample Implementation

You can find an example of a possible solution to this lab here:

[Sample Lab](https://js401n14-lab24.netlify.com/)

Note that this example is just for your reference, **your final lab does not need to match this example exactly**. A few things to note from this implementation:

-   The [Bootstrap](https://getbootstrap.com/) CSS framework is used for styling, along with some custom Sass
-   This project has the `App` component, and utilizes two Contexts, `theme` and `settings`
-   Some child components use either the `useContext` hook or the `.Consumer` element tag to access the `theme` and `settings` contexts

### Use CodeSandbox

For this React lab, you will be required to work in a [CodeSandbox](https://codesandbox.io/) project, instead of local code uploaded to Git. The reason for this is so that we can grade your work easier!

You can find instructions for how to create a CodeSandbox project in the class 18 [README](../../class-18/README.md#CodeSandbox).

### Must-Haves

For these front-end assignments, there is a lot more room for creativity and exploration. Typically, there will be a provided sample implementation that you can use for reference / inspiration. You do not have to duplicate this sample implementation; instead there are always a few key requirements that your application **must have** to get full points. Here are the must-haves for this lab:

-   You must implement two contexts in your application
    -   Each should have at least two variables that can be edited through the UI in some way
        -   These two variables should effect the UI in a noticeable way
        -   Changing the value of the variables should likewise change the UI
        -   One of these variables should be a language changer, which changes all text from english to at least one other language
            -   Think about:
                -   What are the benefits or hard coding the different language variants vs finding a way to translate on-the-fly? Note that either method will be acceptable in this lab
    -   Think about:
        -   Can you re-use any form components you've already made in previous assignments?
        -   How to expose both a getter and setter via Context
-   You must have some content that is about yourself! Be creative with this; ideas to start with are an "About me" paragraph or a virtual business card
-   Custom Sass styling
    -   All custom style code must be in Sass
    -   If you would like to use a CSS framework, you must have some custom sass styles as well
    -   Sass code should be well structured and non-repetitive using partials and mixins

### Commenting

You are required to comment each class and function using proper [JSDoc comments](https://devhints.io/jsdoc).

### Tests

This lab will be graded for test coverage (80% is what to shoot for). You should not implement any snapshot tests. Instead, implement mount (shallow, full or render) tests using Enzyme. Here are some ideas of what you might want to test for:

-   Editing each context variable
    -   The form inputs work correctly
    -   The UI changes based on form input change
    -   The state variables change based on form input change
-   Overall display of the page

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
