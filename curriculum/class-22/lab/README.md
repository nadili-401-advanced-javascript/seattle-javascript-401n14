# LAB - Hooks API

In this lab, you will be asked to create an application with a short quiz that categorizes a user.

Note that there is **no starter code** for this lab.

## Requirements

Your task for this lab will be to create an application which shows a quiz a user can take, and returns a category the user belongs in. Users should be able to answer fields in a form (any of: radio buttons, checkboxes, text inputs, dropdowns) and should be able to submit and reset the form to see results or clear out their entries.

### Sample Implementation

You can find an example of a possible solution to this lab here:

[Sample Quiz](https://js401n14-lab22.netlify.com/)

Note that this example is just for your reference, **your final lab does not need to match this example exactly**. A few things to note from this implementation:

-   The [Bootstrap](https://getbootstrap.com/) CSS framework is used for styling, along with some custom Sass
-   This project has the `App` component, as well as a component for `Quiz`, `QuizQuestion`, and `FormRadio`
-   The hook `useReducer` is used to create a state manager
-   The hook `useEffect` is used to update the page background color and tab title on change in quiz
-   The hook `useState` is used to maintain simple state variables that do not need complex state manager logic

### Use CodeSandbox

For this React lab, you will be required to work in a [CodeSandbox](https://codesandbox.io/) project, instead of local code uploaded to Git. The reason for this is so that we can grade your work easier!

You can find instructions for how to create a CodeSandbox project in the class 18 [README](../../class-18/README.md#CodeSandbox).

### Must-Haves

For these front-end assignments, there is a lot more room for creativity and exploration. Typically, there will be a provided sample implementation that you can use for reference / inspiration. You do not have to duplicate this sample implementation; instead there are always a few key requirements that your application **must have** to get full points. Here are the must-haves for this lab:

-   You must implement `useReducer`, `useEffect` and `useState` somewhere in your application
-   You must have a "quiz" of some sort that has _at least_ three questions
    -   Tip: Can you reuse any form fields you created from Lab 20?
-   You must have a submit button that returns a category calculated from the quiz inputs
-   You must have a reset button which clears out both the state and the form inputs
-   Custom Sass styling
    -   All custom style code must be in Sass
    -   If you would like to use a CSS framework, you must have some custom sass styles as well
    -   Sass code should be well structured and non-repetitive using partials and mixins
    -   Add some custom styling for each of your form inputs
        -   Tip: Handy resource for styling checkboxes, radio buttons and dropdowns: [link](https://kyusuf.com/post/completely-css-custom-checkbox-radio-buttons-and-select-boxes/)

### Commenting

You are required to comment each class and function using proper [JSDoc comments](https://devhints.io/jsdoc).

### Tests

This lab will be graded for test coverage (80% is what to shoot for). You should not implement any snapshot tests. Instead, implement mount (shallow, full or render) tests using Enzyme. Here are some ideas of what you might want to test for:

-   Form fields
    -   How is invalid input handled? (i.e. entering a string when you want a number, etc.)
    -   Can interact with each input group
    -   Radio buttons only select one from collection
    -   Checkboxes can select any / all from collection
-   Submit
    -   User category is correctly calculated based on input
    -   Check the extremes of each category
        -   For example, in the sample implementation you can have a color of red, purple, green or blue. Does the quiz work when the input results in barely a red score or barely a purple score? Is there any case where the result is ambiguous or incorrectly set?
-   Reset
    -   Do all form fields clear out?
    -   Do state variables clear out?
    -   Is the result hidden / removed on reset?
-   UseEffect
    -   Does this trigger every time the state or trigger state variable changes?
-   All components
    -   Renders correctly when given no props
    -   Doesn't break when given bad or incorrect props
    -   Accepts props correctly when given
    -   Update on state changes correctly

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
