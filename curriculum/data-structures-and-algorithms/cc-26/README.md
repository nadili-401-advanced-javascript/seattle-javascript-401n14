# Code Challenge 26: Hash Tables

## Specifications

-   Read all of these instructions carefully. Name things exactly as described.
-   Do all your work in a public repository called `data-structures-and-algorithms`, with a well-formatted, detailed top-level `README.md`
    -   Your top-level `README` should contain a "Table of Contents" navigation to all of your challenges and implementations so far. (Don't forget to update it!)
-   Create a branch in your repository called `hashtable`
-   On your branch, create a folder named `hashtable` which contains a file called `hashtable.js`
-   Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.
    -   _NOTE: You can find an example of this configuration for your course in your class lecture repository._

## Feature Tasks

Implement a Hashtable with the following methods:

1. `add`: takes in both a key and a value. This function should hash the key, and add the key and value pair to the table, handling collisions as needed.
1. `get`: takes in the key and returns the value from the table.
1. `contains`: takes in the key and returns a boolean, indicating if the key exists in the table already.
1. `hash`: takes in an arbitrary key and returns an index in the collection.

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write tests to prove the following functionality:

1. Adding a key/value to your hashtable results in the value being in the data structure
1. Retrieving based on a key returns the value stored
1. Successfully returns null for a key that does not exist in the hashtable
1. Successfully handle a collision within the hashtable
1. Successfully retrieve a value from a bucket within the hashtable that has a collision
1. Successfully hash a key to an in-range value

Ensure your tests are passing before you submit your solution.

**You must have Travis connected to your pull request in order to get full points on testing!**

## Documentation: Your README.md

```markdown
# Hashtables

<!-- Short summary or background information -->

## Challenge

<!-- Description of the challenge -->

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API

<!-- Description of each method publicly available in each of your hashtable -->
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
```

> Note: No Whiteboard required for this Code Challenge

3. Submitting your completed work to Canvas:
    1. Copy the link to your `README` (which must have a link to your pull request inside of it) and paste it into the corresponding Canvas assignment
    1. Leave a description of how long this assignment took you in the comments box
    1. Add any additional comments you like about your process or any difficulties you may have had with the assignment
4. **Do NOT merge your branch into `master` - your open pull request will be your primary way to resubmit if needed. Only merge to master once you have received a grade and do not wish to resubmit.**
