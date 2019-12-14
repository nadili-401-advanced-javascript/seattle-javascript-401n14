1# LAB - Component Based UI

Welcome to your first React lab! React labs will be following different coding and submission instructions, so be sure to read this document thoroughly! Also, note that there is **no starter code** for this lab.

## Requirements

Your task for this lab will be to create a Mad Libs generator. Mad Libs is a word game where you provide random adjectives, nouns, verbs, names, etc, and those are then placed into a paragraph or story.

### Sample Implementation

You can find an example of a possible solution to this lab here:

[Sample Mad Libs Lab](https://js401n14-lab18.netlify.com/)

Note that this example is just for your reference, **your final lab does not need to match this example exactly**. A few things to note from this implementation:

-   The [Bootstrap](https://getbootstrap.com/) CSS framework is used for styling
-   The Mad Libs fields are auto-populated to start with values generated using [faker](https://www.npmjs.com/package/faker)
-   As you edit fields, the paragraph updates in sync
    -   Hint: The value of the form field is tied to the component state

### Use CodeSandbox

For this React lab, you will be required to work in a [CodeSandbox](https://codesandbox.io/) project, instead of local code uploaded to Git. The reason for this is so that we can grade your work easier!

You can find instructions for how to create a CodeSandbox project in the class [README](../README.md#CodeSandbox).

### Must-Haves

For these front-end assignments, there is a lot more room for creativity and exploration. Typically, there will be a provided sample implementation that you can use for reference / inspiration. You do not have to duplicate this sample implementation; instead there are always a few key requirements that your application **must have** to get full points. Here are the must-haves for this lab:

-   You must create a class component called `MadLibs` that your application imports and renders
    -   The `MadLibs` component should be self contained
-   Within your `MadLibs` component, you must have the following features:
    -   Some input fields that ask for nouns, adjectives, names, etc
        -   Minimum of 3 input fields, though I suggest adding more for a better mad lib
        -   These input fields should have `onChange` handlers, which update state variables whenever the input field is changed
    -   A button that clears out all form fields (and their corresponding state variables)
    -   A paragraph or so of text that uses the content from the input fields to fill in some blanks
-   Your application should have some custom styling
    -   Let's get back into the habit of adding CSS!
    -   You can use any CSS framework to make things easier ([Bootstrap](https://getbootstrap.com/), [Pure](https://purecss.io/), [Materialize](https://materializecss.com/), etc.)

### Commenting

You are required to comment each class and function using proper [JSDoc comments](https://devhints.io/jsdoc).

## Assignment Submission Instructions

As usual, you will be required to have a `README.md` that you submit, containing a link to your CodeSandbox as well as embedding your UML Diagram.

Create a new repository for this lab. It's okay if the contents of the repository are just your `README.md` and UML Diagram. You can also create a repository that is [linked to your CodeSandbox](https://codesandbox.io/docs/git) if you would like, though this is not required as long as your `README.md` has a link to your CodeSandbox.

### Submit to Canvas

-   Ensure that your `README.md` exists and has:
    -   A link to your CodeSandbox
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
| Features: Score based on % of features demonstrably completed     | 3      |
| Code Implementation: Efficiency of code + Comments + Code Quality | 3      |
| Style: Components are styled in a pleasing way with custom CSS    | 2      |
| Documentation: README + UML + Links                               | 2      |
| Total:                                                            | 10     |
