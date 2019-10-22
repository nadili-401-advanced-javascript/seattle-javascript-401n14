# Code Challenge 07

In this code challenge, you will be writing a function which finds a node that is `k` spaces away from the end (or tail) of a linked list.

## Specifications

-   Read all of these instructions carefully. Name things exactly as described.
-   Do all your work in a public repository called `data-structures-and-algorithms`, with a well-formatted, detailed top-level `README.md`.
    -   Your top-level README should contain a "Table of Contents" navigation to all of your challenges and implementations so far. (Don't forget to update it!)
-   Create a new branch in your repo called `ll-kth-from-end`.
-   Place this code challenge implementation in a `Data-Structures` folder within your repository.
-   On your branch, extend your `LinkedList` class from Code Challenge 06 (you can copy-paste the code from cc-06)
-   Include any configuration files required for this challenge to become an individual component, module, library, etc.
    -   _NOTE: You can find an example of this configuration for your course in your class lecture repository._

## Feature Tasks

-   Write a method for the `LinkedList` class which takes a number, `k`, as a parameter. Return the node's value that is `k` from the end of the linked list. You have access to the `Node` class and all the properties on the `LinkedList` class as well as the methods created in previous challenges.

## Example

#### `ll.kthFromEnd(k)`

| List                                       | Arg `k` | Output  |
| ------------------------------------------ | :-----: | ------- |
| `head -> [A] -> [B] -> [C] -> [D] -> null` |   `0`   | `D`     |
| `head -> [A] -> [B] -> [C] -> [D] -> null` |   `2`   | `B`     |
| `head -> [A] -> [B] -> [C] -> [D] -> null` |   `6`   | `error` |

### Unit Tests

1. Where k is greater than the length of the linked list
2. Where k and the length of the list are the same
3. Where k is not a positive integer
4. Where the linked list is of a size 1
5. Where k is not at the end, but somewhere in the middle of the linked list

Unit tests _must be passing_ before you submit your final solution code.

## Documentation: Your README.md

```markdown
# Singly Linked List with K-th Search Method

<!-- Short summary or background information -->

## Challenge

<!-- Description of the challenge -->

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for these approaches? -->

## API

<!-- Description of each method publicly available to your Linked List -->
```

## Submission Instructions

1. Create a pull request from your branch to your `master` branch
1. In your open pull request, leave as a comment [a checklist](https://github.com/blog/1825-task-lists-in-all-markdown-documents) of the specifications and tasks above, with the actual steps that you completed checked off
1. Submitting your completed work to Canvas:
    1. Copy the link to your open pull request and paste it into the corresponding Canvas assignment
    1. Leave a description of how long this assignment took you in the comments box
    1. Add any additional comments you like about your process or any difficulties you may have had with the assignment
1. **Do NOT merge your branch into `master` - your open pull request will be your primary way to resubmit if needed. Only merge to master once you have received a grade and do not wish to resubmit.**
