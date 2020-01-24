# Code Challenge 27

Your task will be to find the common values in two binary trees.

## Specifications

-   Read all of the following instructions carefully. Name things exactly as described.
-   Do all your work in a public repository called `data-structures-and-algorithms`, with a well-formatted, detailed top-level `README.md`
    -   Your top-level `README` should contain a "Table of Contents" navigation to all of your challenges and implementations so far. (Don't forget to update it!)
-   Create a branch in your repository called `repeated-word`
-   On your branch, create a folder named `treeIntersection` which contains a file called `tree-intersection.js`
-   Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.
    -   _NOTE: You can find an example of this configuration for your course in your class lecture repository._

## Feature Tasks

-   Write a function called `tree_intersection` that takes two binary tree root nodes as parameters
-   Without utilizing any of the built-in library methods available to your language, return an array of values found in both trees

## Example

`Input:` <br />
![BinaryTree1](BT1.PNG)
![BinaryTree2](BT2.PNG)

`Output`
`[100,160,125,175,200,350,500]`

## Requirements

### Whiteboard / Drawing

For this challenge, you will be required to create a whiteboard diagram showing how your algorithm works. Refer to the [whiteboarding example](../DataStructuresWhiteboard.PNG) for guidance.

### Testing

Write tests for the following (note that some tests can be combined):

-   Binary trees with no shared values
-   Identical binary trees (all values shared)
-   Binary trees of vastly different sizes (for example, one has just a single node, another has 20 nodes)
-   Incorrect parameters

**You must have Travis connected to your pull request in order to get full points on testing!**

## Documentation: Your README.md

```markdown
# Tree Intersection

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
