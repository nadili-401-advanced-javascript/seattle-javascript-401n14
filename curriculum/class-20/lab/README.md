# LAB - Props and State

In this lab, you will be asked to create completely modular form components that could be used in any project. Use this as an opportunity to make your form components a nice packaged mix of HTML and style, with most logic based on props instead of state.

Note that there is **no starter code** for this lab.

## Requirements

Your task for this lab will be to create at least three self-contained and completely modular form elements, as well as a modular state printer.

### Sample Implementation

You can find an example of a possible solution to this lab here:

[Sample Forms Lab](https://js401n14-lab20.netlify.com/)

Note that this example is just for your reference, **your final lab does not need to match this example exactly**. A few things to note from this implementation:

-   The [Bootstrap](https://getbootstrap.com/) CSS framework is used for styling
-   This project has the `App` component, as well as a component for `FormInput`, `FormSelect`, `FormCheckbox`, and `StatePrinter`
    -   The only class component within these is `App`; all the others are stateless functional components

### Use CodeSandbox

For this React lab, you will be required to work in a [CodeSandbox](https://codesandbox.io/) project, instead of local code uploaded to Git. The reason for this is so that we can grade your work easier!

You can find instructions for how to create a CodeSandbox project in the class 18 [README](../../class-18/README.md#CodeSandbox).

### Must-Haves

For these front-end assignments, there is a lot more room for creativity and exploration. Typically, there will be a provided sample implementation that you can use for reference / inspiration. You do not have to duplicate this sample implementation; instead there are always a few key requirements that your application **must have** to get full points. Here are the must-haves for this lab:

-   You must have three components that are form elements (inputs, checkboxes, radio buttons, buttons, dropdowns, textarea, sliders, etc. )
    -   These components should be stateless and should instead use values from any props passed to them
    -   Design these components as if you were creating a component to share as an NPM package
    -   Be sure to include as many props as necessary to make this fully modular
        -   Think about:
            -   Adding custom classes
            -   Adding custom style
            -   Adding handlers
            -   Adding default or set values
            -   Having a variable number of options for dropdowns or radio buttons
-   You must have a component that takes in a state object as a props parameter, and prints the state key value pairs in a nice way
    -   Should support a state object of any size
    -   Handle when there's no state object passed
-   Custom Sass styling
    -   All custom style code must be in Sass
    -   If you would like to use a CSS framework, you must have some custom sass styles as well
    -   Sass code should be well structured and non-repetitive using partials and mixins

### Commenting

You are required to comment each class and function using proper [JSDoc comments](https://devhints.io/jsdoc).

### Tests

This lab will be graded for test coverage (80% is what to shoot for). You should not implement any snapshot tests. Instead, implement mount (shallow, full or render) tests using Enzyme. Here are some ideas of what you might want to test for:

-   Form elements
    -   Renders correctly
        -   All props work when passed
        -   Form element doesn't break when props are missing
    -   Can accept passed handlers and connect them correctly
-   State printer
    -   Works for a state of any size
    -   Renders correctly
        -   All props work when passed
        -   Doesn't break when missing props
-   App
    -   Displays three form elements and a state printer

### Deployment

Deploy your CodeSandbox application to Netlify (CodeSandbox has that built in!)

## Assignment Submission Instructions

As usual, you will be required to have a `README.md` that you submit, containing a link to your CodeSandbox, deployed website, and UML Diagram.

Create a new repository for this lab. It's okay if the contents of the repository are just your `README.md` and UML Diagram. You can also create a repository that is [linked to your CodeSandbox](https://codesandbox.io/docs/git) if you would like, though this is not required as long as your `README.md` has a link to your CodeSandbox.

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
