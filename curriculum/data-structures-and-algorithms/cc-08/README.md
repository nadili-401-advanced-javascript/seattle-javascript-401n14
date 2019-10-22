# Code Challenge 08

In this challenge, your task will be to merge two linked lists into one.

## Specifications

-   Read all of these instructions carefully. Name things exactly as described.
-   Do all your work in a public repository called `data-structures-and-algorithms`, with a well-formatted, detailed top-level `README.md`
    -   Your top-level README should contain a "Table of Contents" navigation to all of your challenges and implementations so far. (Don't forget to update it!)
-   Create a new branch in your repo called `ll-merge`
-   Place this code challenge implementation in a `Data-Structures` folder within your repository
-   On your branch, create a folder named `llMerge` which contains a file called `ll-merge.js`
-   Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.
    -   _NOTE: You can find an example of this configuration for your course in your class lecture repository._

## Feature Tasks

-   Write a method called `mergeLists` which takes two linked lists as arguments
-   Merge the two lists together such that the final linked list has nodes that alternate between the nodes from each source list
-   Return the head of the new merged list
-   You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Example

#### `mergeLists(list1, list2)`

| Arg `list1`                         | Arg `list2`                         | Output                                                   |
| ----------------------------------- | ----------------------------------- | -------------------------------------------------------- |
| `head -> [A] -> [B] -> [C] -> null` | `head -> [X] -> [Y] -> [Z] -> null` | `head -> [A] -> [X] -> [B] -> [Y] -> [C] -> [Z] -> null` |
| `head -> [A] -> [B] -> null`        | `head -> [X] -> [Y] -> [Z] -> null` | `head -> [A] -> [X] -> [B] -> [Y] -> [Z] -> null`        |
| `head -> [A] -> [B] -> [C] -> null` | `head -> [X] -> [Y] -> null`        | `head -> [A] -> [X] -> [B] -> [Y] -> [C] -> null`        |

## Requirements

### Unit Tests

1. Where `list1` is the same length as `list2`
2. Where `list1` is shorter than `list2`
3. Where `list1` is longer than `list2`
4. Where `list1` is null
5. Where both lists are of length 1

Unit tests _must be passing_ before you submit your final solution code.

## Documentation: Your README.md

```markdown
# Merging two Singly Linked Lists

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
