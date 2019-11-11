# Code Challenge 14

In this challenge, you will be writing a multi-bracket validator.

## Specifications

-   Read all of these instructions carefully. Name things exactly as described.
-   Do all your work in a public repository called `data-structures-and-algorithms`, with a well-formatted, detailed top-level `README.md`.
    -   This assignment should be completed within the `challenges` subdirectory of the repository.
    -   Your top-level `README` should contain a "Table of Contents" navigation to all of your challenges and implementations so far. (Don't forget to update it!)
-   Create a new branch in your repository called `multi-bracket-validation`.
-   On your branch, create a folder named `multiBracketValidation` which contains a file called `multi-bracket-validation.js`
-   Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.
    -   _NOTE: You can find an example of this configuration for your course in your class lecture repository._

## Feature Tasks

On your main file, create a function called `multiBracketValidation(input)`. Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

-   Round Brackets : `()`
-   Square Brackets : `[]`
-   Curly Brackets : `{}`

### Example

| Input                    | Output  |
| ------------------------ | ------- |
| `{}`                     | `TRUE`  |
| `{}(){}`                 | `TRUE`  |
| `()[[Extra Characters]]` | `TRUE`  |
| `(){}[[]]`               | `TRUE`  |
| `{}{Code}[Fellows](())`  | `TRUE`  |
| `[({}]`                  | `FALSE` |
| `(](`                    | `FALSE` |
| `{(})`                   | `FALSE` |

Consider these small examples and why they fail.

| Input | Output  | Why                                                      |
| ----- | ------- | -------------------------------------------------------- |
| `{`   | `FALSE` | error unmatched opening `{` remaining.                   |
| `)`   | `FALSE` | error closing `)` arrived without corresponding opening. |
| `[}`  | `FALSE` | error closing `}`. Doesn't match opening `(`.            |

## Requirements

### Whiteboard

For this challenge, you will be required to create a whiteboard diagram showing how your algorithm works. Refer to the [whiteboarding example](../DataStructuresWhiteboard.PNG) for guidance

### Testing

Write tests for each of the sample input-output examples shown in the Examples section above. Ensure your tests are passing before you submit your solution.

**You must have Travis connected to your pull request in order to get full points on testing!**

## Documentation: Your README.md

```markdown
# Multi-Bracket Validator

## Links

-   Link to Pull Request
-   Link to Travis

<!-- Short summary or background information -->

## Whiteboard

<!-- Photo of your whiteboard -->

## Challenge

<!-- Description of the challenge -->

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API

<!-- Description of each method publicly available in your implementation -->
```

## Submission Instructions

1. Create a pull request from your branch to your `master` branch
2. In your open pull request, leave as a comment [a checklist](https://github.com/blog/1825-task-lists-in-all-markdown-documents) of the specifications and tasks above, with the actual steps that you completed checked off. Include in that checklist the following items:
    ```markdown
    -   [ ] Top-level README “Table of Contents” is updated
    -   [ ] Feature tasks for this challenge are completed
    -   [ ] Unit tests written and passing
        -   [ ] Travis is correctly connected to this pull request
        -   [ ] Travis shows green passing
    -   [ ] README for this challenge is complete
        -   [ ] Summary, Description, Approach & Efficiency, Solution
        -   [ ] Link to code
        -   [ ] Picture of whiteboard
    ```
3. Submitting your completed work to Canvas:
    1. Copy the link to your `README` (which must have a link to your pull request inside of it) and paste it into the corresponding Canvas assignment
    1. Leave a description of how long this assignment took you in the comments box
    1. Add any additional comments you like about your process or any difficulties you may have had with the assignment
4. **Do NOT merge your branch into `master` - your open pull request will be your primary way to resubmit if needed. Only merge to master once you have received a grade and do not wish to resubmit.**
