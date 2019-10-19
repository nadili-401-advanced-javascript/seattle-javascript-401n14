# Code Challenge 06

In this code challenge, you will be adding alternative insertion operations to a linked list.

## Specifications

-   Read all of these instructions carefully. Name things exactly as described.
-   Do all your work in a public repository called `data-structures-and-algorithms`, with a well-formatted, detailed top-level `README.md`.
    -   Your top-level readme should contain a "Table of Contents" navigation to all of your challenges and implementations so far. (Don't forget to update it!)
-   Create a new branch in your repo called `ll-insertions`.
-   Place this code challenge implementation in a `Data-Structures` folder within your repository.
-   On your branch, extend your `LinkedList` class from Code Challenge 05 (you can copy-paste the code from cc-05)
-   Include any configuration files required for this challenge to become an individual component, module, library, etc.
    -   _NOTE: You can find an example of this configuration for your course in your class lecture repository._

## Feature Tasks

Write the following methods for the Linked List class:

-   `.append(value)` which adds a new node with the given `value` to the end of the list
    -   Hint: We did this in `cc-05/demos/linked-lists`
-   `.insertBefore(value, newVal)` which add a new node with the given `newValue` immediately before the first `value` node
-   `.insertAfter(value, newVal)` which add a new node with the given `newValue` immediately after the first `value` node

## Examples

#### `.append(value)`

| Input                               | Args | Output                                     |
| ----------------------------------- | :--: | ------------------------------------------ |
| `head -> [A] -> [B] -> [C] -> null` | `D`  | `head -> [A] -> [B] -> [C] -> [D] -> null` |
| `head -> null`                      | `D`  | `head -> [D] -> null`                      |

#### `.insertBefore(value, newVal)`

| Input                               |  Args  | Output                                     |
| ----------------------------------- | :----: | ------------------------------------------ |
| `head -> [A] -> [B] -> [C] -> null` | `B, D` | `head -> [A] -> [D] -> [B] -> [C] -> null` |
| `head -> [A] -> [B] -> [C] -> null` | `A, D` | `head -> [D] -> [A] -> [B] -> [C] -> null` |
| `head -> [A] -> [B] -> [C] -> null` | `C, D` | `head -> [A] -> [B] -> [D] -> [C] -> null` |
| `head -> [A] -> [B] -> [C] -> null` | `F, D` | `Error`                                    |

#### `.insertAfter(value, newVal)`

| Input                               |  Args  | Output                                     |
| ----------------------------------- | :----: | ------------------------------------------ |
| `head -> [A] -> [B] -> [C] -> null` | `B, D` | `head -> [A] -> [B] -> [D] -> [C] -> null` |
| `head -> [A] -> [B] -> [C] -> null` | `A, D` | `head -> [A] -> [D] -> [B] -> [C] -> null` |
| `head -> [A] -> [B] -> [C] -> null` | `C, D` | `head -> [A] -> [B] -> [C] -> [D] -> null` |
| `head -> [A] -> [B] -> [C] -> null` | `F, D` | `Error`                                    |

## Features

-   Have a class named `Node`. This class should contain:
    -   A variable to hold data (i.e. `this.data`)
    -   A variable to hold the next `Node` object (i.e. `this.next`)
-   Have a class named `LinkedList`. This class should contain:
    -   A variable named `head` which holds the `Node` object that starts the list
    -   A constructor that instantiates `head` as an empty linked list
    -   A function called `insert` which takes in a value. This function will then create a new `Node` object, sets the object's `data` property equal to the value. The function then appends this new `Node` object to the beginning of the linked list (i.e. it sets a new `head`)
    -   A function called `includes` which takes in a value and returns a boolean if that value exists in the linked list
    -   A function called `toString` whcih takes in no arguments and returns a string representing all the values in the linked list
    -   A function called `append` which adds a Node to the end of the list
    -   A function called `insertBefore` which adds a Node before a certain Node in the list
    -   A function called `insertAfter` which adds a Node after a certain Node in the list
-   Implement good error checking throughout your code. Create custom errors that describe what went wrong.

## Structure and Testing

Any functions you write should be clean, reusable and independent component parts to the whole program.

Write tests to prove the following functionality:

1. Can successfully add a node to the end of the linked list
2. Can successfully add multiple nodes to the end of a linked list
3. Can successfully insert a node before a node located in the middle of a linked list
4. Can successfully insert a node before the first node of a linked list
5. Can successfully insert after a node in the middle of the linked list
6. Can successfully insert a node after the last node of the linked list

Ensure your tests are passing before you submit your solution.

## Documentation: Your README.md

```markdown
# Singly Linked List with New Insertion Methods

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
