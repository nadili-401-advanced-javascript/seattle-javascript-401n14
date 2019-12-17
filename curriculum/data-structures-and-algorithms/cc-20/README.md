# Code Challenge 20

In this code challenge, your task will be to implement Merge Sort.

## Specifications

-   Read all of these instructions carefully. Name things exactly as described.
-   Do all your work in a public repository called `data-structures-and-algorithms`, with a well-formatted, detailed top-level `README.md`.
    -   Your top-level `README` should contain a "Table of Contents" navigation to all of your challenges and implementations so far. (Don't forget to update it!)
-   Create a new branch in your repository called `merge-sort`.
-   Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.
    -   _NOTE: You can find an example of this configuration for your course in your class lecture repository._

## Feature Tasks

Write a function called `mergeSort`, which takes an array of numbers and returns a sorted array after using the Merge Sort algorithm. Do not mutate (change) the array given to you as a parameter.

## Example

| Input                 | Output                |
| --------------------- | --------------------- |
| `[3, 2, 9, 4, 6, 10]` | `[2, 3, 4, 6, 9, 10]` |
| `[3]`                 | `[3]`                 |
| `[1, 2]`              | `[1, 2]`              |

## Requirements

### Whiteboard / Drawing

For this challenge, you will be required to create a drawing describing how Merge Sort works, as if you explaining it to 301 level student. Use the following sample input to show step-by-step visually how Merge Sort works:

`[9, 3, 6, 10, 2, 4, 1]`

### Testing

Write tests for the following (note that some tests can be combined):

-   Sort array of length 1
-   Sort array of length 2
-   Sort array of length 10
-   Incorrect parameter error handling
    -   Not an array
    -   Empty array
    -   Array with non-numerical values

**You must have Travis connected to your pull request in order to get full points on testing!**

## Documentation: Your README.md

```markdown
# Merge Sort

## Links

-   Link to Pull Request
-   Link to Travis

<!-- Short summary or background information -->

## Whiteboard / Drawing

<!-- Photo of your whiteboard or drawing -->

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
    -   [ ] Picture of whiteboard / drawing
```

3. Submitting your completed work to Canvas:
    1. Copy the link to your `README` (which must have a link to your pull request inside of it) and paste it into the corresponding Canvas assignment
    1. Leave a description of how long this assignment took you in the comments box
    1. Add any additional comments you like about your process or any difficulties you may have had with the assignment
4. **Do NOT merge your branch into `master` - your open pull request will be your primary way to resubmit if needed. Only merge to master once you have received a grade and do not wish to resubmit.**
