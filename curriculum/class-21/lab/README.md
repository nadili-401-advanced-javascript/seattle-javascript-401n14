# LAB - Routing and Component Composition

In this lab, you will be asked to create an application with multiple pages using React Router, and some implementation of the Cards and Decks format of UI design.

Note that there is **no starter code** for this lab.

## Requirements

Your task for this lab will be to create an application with three unique pages to route to, with one page having a "cards generator". This card generator will create a collection of cards containing some information. Users should be able to specify how many cards to generate, and the resulting cards should be formated in a nice column or grid layout within a containing deck component.

### Sample Implementation

You can find an example of a possible solution to this lab here:

[Sample Card Generator](https://js401n14-lab21.netlify.com/)

Note that this example is just for your reference, **your final lab does not need to match this example exactly**. A few things to note from this implementation:

-   The [Bootstrap](https://getbootstrap.com/) CSS framework is used for styling, along with some custom Sass
-   This project has the `App` component, as well as a component for `Header`, `Card`, `Deck`, `Home`, `DrawCards`, and `OtherProjects`
-   `DrawCards` uses a lifecycle method `componentDidMount`
-   `Deck` calls `props.children`

### Use CodeSandbox

For this React lab, you will be required to work in a [CodeSandbox](https://codesandbox.io/) project, instead of local code uploaded to Git. The reason for this is so that we can grade your work easier!

You can find instructions for how to create a CodeSandbox project in the class 18 [README](../../class-18/README.md#CodeSandbox).

### Must-Haves

For these front-end assignments, there is a lot more room for creativity and exploration. Typically, there will be a provided sample implementation that you can use for reference / inspiration. You do not have to duplicate this sample implementation; instead there are always a few key requirements that your application **must have** to get full points. Here are the must-haves for this lab:

-   You must have a navigation component that lets us route to your three pages
-   You must have three pages implemented, each with a unique rendered component
    -   A home page that has some text and / or content (be creative!)
    -   A page containing your card generator
    -   A page containing some extra content about you (be creative!)
        -   An idea can be links to your past works, your resume, your github, etc.
-   Your card generator page must have the following:
    -   Some form input field for users to specify how many cards they want, with the cards updating on user input
    -   A `Deck` component should be used in the `render` function, with nested `Card` components, either generated or static but NOT located within the `Deck` component implementation itself (use `props.children`)
        -   The `Deck` component should have some custom style and heading or HTML in addition to containing the cards
    -   `Card` components must be nested within a `Deck` component, and should have some data displayed within them (either randomly generated, from a JSON data file, from user input, etc.)
-   Custom Sass styling
    -   All custom style code must be in Sass
    -   If you would like to use a CSS framework, you must have some custom sass styles as well
    -   Sass code should be well structured and non-repetitive using partials and mixins
    -   Be sure to style your `Deck` and `Card` components

### Commenting

You are required to comment each class and function using proper [JSDoc comments](https://devhints.io/jsdoc).

### Tests

This lab will be graded for test coverage (80% is what to shoot for). You should not implement any snapshot tests. Instead, implement mount (shallow, full or render) tests using Enzyme. Here are some ideas of what you might want to test for:

-   Navigation
    -   Clicking on the links loads the proper components
-   Homepage
    -   Renders correctly
-   Card Generator
    -   Accepts user input for number of cards to generate
        -   Handles edge cases for user input (bad input, out of bounds, not a number, etc)
    -   Cards are generated based on user input into a `Deck` component
-   Other Projects
    -   Renders correctly
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
