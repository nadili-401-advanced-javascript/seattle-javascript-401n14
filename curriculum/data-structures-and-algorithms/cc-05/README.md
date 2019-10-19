# Code Challenge 05: Linked Lists

### Implement a Singly Linked List

## Specifications

-   Read all of these instructions carefully. Name things exactly as described.
-   Do all your work in a public repository called `data-structures-and-algorithms`, with a well-formatted, detailed top-level `README.md`.
    -   Your top-level readme should contain a "Table of Contents" navigation to all of your challenges and implementations so far. (Don't forget to update it!)
-   Create a new branch in your repo called `linked-list`.
-   Place this code challenge implementation in a `Data-Structures` folder within your repository.
-   On your branch, create a folder named `linkedList` which contains a file called `linked-list.js`
-   Include any configuration files required for this challenge to become an individual component, module, library, etc.
    -   _NOTE: You can find an example of this configuration for your course in your class lecture repository._

## Features

-   Create a class named `Node`. This class should contain:
    -   A variable to hold data (i.e. `this.data`)
    -   A variable to hold the next `Node` object (i.e. `this.next`)
-   Create a class named `LinkedList`. This class should contain:
    -   A variable named `head` which holds the `Node` object that starts the list
    -   A constructor that instantiates `head` as an empty linked list
    -   A function called `insert` which takes in a value. This function will then create a new `Node` object, sets the object's `data` property equal to the value. The function then appends this new `Node` object to the beginning of the linked list (i.e. it sets a new `head`)
    -   A function called `includes` which takes in a value and returns a boolean if that value exists in the linked list
    -   A function called `toString` whcih takes in no arguments and returns a string representing all the values in the linked list
-   Implement good error checking throughout your code. Create custom errors that describe what went wrong.

## Structure and Testing

Any functions you write should be clean, reusable and independent component parts to the whole program.

Write tests to prove the following functionality:

1. Can successfully instantiate an empty linked list
1. Can properly insert into the linked list
1. The head property will properly point to the first node in the linked list
1. Can properly insert multiple nodes into the linked list
1. Will return true when finding a value within the linked list that exists
1. Will return false when searching for a value in the linked list that does not exist
1. Can properly return a collection of all the values that exist in the linked list

Ensure your tests are passing before you submit your solution.

## Documentation: Your README.md

```markdown
# Singly Linked List

<!-- Short summary or background information -->

## Challenge

<!-- Description of the challenge -->

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

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
