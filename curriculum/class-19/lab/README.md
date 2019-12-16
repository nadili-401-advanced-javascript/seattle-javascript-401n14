# LAB - Sass, React Testing, and Deployment

In this lab, you will be asked to write Sass styles for a component, write UI snapshot and mounting tests, and deploy your application to AWS S3, Amplify and Netlify.

## Work Locally

For this lab, you will not be working in CodeSandbox, but instead will be running the React code locally. This is so that you can gain experience with local development in React, and also because snapshot tests are not supported in CodeSandbox.

## How To Run Starter Code

You can find starter code for this labe located in the `/starter-code` folder. To run this application, simply execute the terminal commands `npm install` and `npm start`. Then you should see the application running on `localhost:3000`.

The starter code has the following folder structure:

-   `/__tests__` is where your test files should go. It has a placeholder `App.test.js` to start.
-   `/components` is where the React components (`App` and `Converter`) are defined.
-   `/styles` is where your Sass style files should go. It has a placeholder `style.scss` and two placeholder partials `_mixins.scss` and `_variables.scss`.

## Requirements

### Sass

You are required to style this application using Sass style code. You may choose to either work in `.scss` syntax or `.sass` syntax. You can choose how much you style this application, but there are a few must-haves:

-   Variables: You must define and use the following variables somewhere in your Sass code
    -   `$theme-color`
    -   `$spacing`
    -   `$font`
-   Partials: You must have at least one partial defined with style code and imported into another Sass file
-   Nesting: You must have at least one example of nesting element styles
-   Mixins: You must define and use the following mixins somewhere in your Sass code

    -   `highlight()`: turns text bold and colors it to be `$theme-color`
    -   `padContainer($pad, $mar)`: adds all-around padding and margins based on the passed in parameters of `$pad` and `$mar`

### Tests

Write the following UI tests. Based on the test descriptions, determine if it should be a full mount, shallow mount or render test using enzyme.

-   `App.test.js`
    -   Snapshot test
    -   Test that three Converters are rendered on the page
    -   Test that the first converter is miles and kilometers
    -   Test that the second converter is cups and fluid ounces
    -   Test that the third converter is inches and centimeters
    -   Test that all three Converters properly convert to and from
-   `Converter.test.js`
    -   Snapshot test
    -   Test that changing the x input field properly changes the state
    -   Test that changing the y input field properly changes the state
    -   Test that the component renders two input fields
    -   Test that the labels are correctly set

### Deployment

Deploy your application to AWS S3, Amplify and Netlify. You can find video tutorials of the process [here](../README.md#Deploying). Ensure that you add all three links to your deployed sites within your `README.md`.

### Commenting

You are required to comment each class and function within `App.js` and `Converter.js` using proper [JSDoc comments](https://devhints.io/jsdoc).

## Assignment Submission Instructions

### Configure your repository

Configure your folder with the following files and directories.

-   `README.md` - contains your lab documentation ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/reference/submission-instructions/labs/README-template.md))
-   `.gitignore` - contains a robust .gitignore file ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.gitignore))
-   `.travis.yml` - contains default travis configuration ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.travis.yml))
-   `package.json` - contains `npm` package config and scripts ([script template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/package.json.notes))

### Submit to Canvas

-   Ensure that your `README.md` exists and has:
    -   A link to your TravisCI
    -   A link to pull request from your lab branch to your master branch in your forked repository
        -   Keep this pull request open (**don't merge to master**) in case you need to resubmit your lab
    -   Links to your three deployed sites
        -   AWS S3
        -   AWS Amplify
        -   Netlify
    -   Instructions for how to run your application
        -   Please be clear and descriptive
        -   If parts of your application are broken, use this section of your README to describe how to run the working code so you can get partial points
    -   Embedded UML diagram image

**Be sure to delete any placeholder content if you use `README-template.md`.**

Once you've ensured your `README.md` is correct, within Canvas submit a link to your `README.md`

### Resubmitting

-   Your open pull request will be your gateway to resubmitting
-   Commit and push your changes in your lab branch, and they should be updated on the pull request
-   **You must re-deploy your application if you are resubmitting**
-   Only one resubmit allowed

## Grading Rubric

| Criteria                                                                  | Points |
| ------------------------------------------------------------------------- | ------ |
| Style: Application has custom Sass and meets Sass must-haves requirements | 3      |
| Testing: All required tests are implemented and passing, Travis connected | 3      |
| Deployment: Deployed to all three services                                | 3      |
| Documentation: README + UML + Links                                       | 1      |
| Total:                                                                    | 10     |
