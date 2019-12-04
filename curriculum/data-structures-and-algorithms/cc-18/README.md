# Code Challenge 18

In this code challenge, you will be finding the maximum value in a binary tree.

## Specifications

-   Read all of these instructions carefully. Name things exactly as described.
-   Do all your work in a public repository called `data-structures-and-algorithms`, with a well-formatted, detailed top-level `README.md`.
    -   Your top-level readme should contain a "Table of Contents" navigation to all of your challenges and implementations so far. (Don't forget to update it!)
    -   This assignment should be completed within the `challenges` subdirectory of the repository.
-   Create a new branch in your repo called `find-maximum-binary-tree`.
-   On your branch, extend your `BinaryTree` class according to the feature tasks below
-   Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.
    -   _NOTE: You can find an example of this configuration for your course in your class lecture repository._

## Feature Tasks

Write a class function called `find-maximum-value`. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that all the values stored in the Binary Tree will be numeric.

## Example

### Input

![example](./binary-tree.png)

### Output

```
11
```

## Requirements

### Whiteboard

For this challenge, you will be required to create a whiteboard diagram showing how your algorithm works. Refer to the [whiteboarding example](../DataStructuresWhiteboard.PNG) for guidance

### Testing

Write tests for the following (note that some tests can be combined):

-   Tree with all values the same (should still return max value)
-   Tree with negative and positive values
-   Tree with two instances of the max number (should still return max value)
-   Example tree shown above

**You must have Travis connected to your pull request in order to get full points on testing!**

## Documentation: Your README.md

```markdown
# Maximum Value of a Binary Tree

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

