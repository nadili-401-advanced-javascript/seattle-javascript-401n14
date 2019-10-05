# Code Challenge

k-th value from the end of a linked list.

## Specifications
- Read all of these instructions carefully. Name things exactly as described.
- Do all your work in a public repository called `data-structures-and-algorithms`, with a well-formatted, detailed top-level README.md.
- Create a new branch in your repo called `ll-kth-from-end`.
- Your top-level readme should contain a "Table of Contents" navigation to all of your challenges and implementations so far. (Don't forget to update it!)
- Place this implementation in your `Data-Structures` folder within your repository.
- On your branch, create...
    - _C#_: Extend your `LinkedList` class according to the feature tasks below.
    - _JavaScript_: Extend your `LinkedList` class according to the feature tasks below
    - _Python_: Extend your `LinkedList` class according to the feature tasks below
    - _Java_: Extend your `LinkedList` class according to the feature tasks below
- Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.
  - _NOTE: You can find an example of this configuration for your course in your class lecture repository._

## Feature Tasks
- Write a method for the Linked List class which takes a number, `k`, as a parameter. Return the node's value that is `k` from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Example

#### `ll.kthFromEnd(k)`

| Input `ll` | Arg `k` | Output |
|-----|:----:|----|
| `head -> [1] -> [3] -> [8] -> [2] -> X` | `0` | `2` |
| `head -> [1] -> [3] -> [8] -> [2] -> X` | `2` | `3` |
| `head -> [1] -> [3] -> [8] -> [2] -> X` | `6` | `Exception` |

### Unit Tests

1. Where k is greater than the length of the linked list
2. Where k and the length of the list are the same
3. Where k is not a positive integer
4. Where the linked list is of a size 1
5. "Happy Path" where k is not at the end, but somewhere in the middle of the linked list

Unit tests *must be passing* before you submit your final solution code.

## Stretch Goal

Once you've achieved a working solution, implement a method that finds the node at the middle of the Linked List.


## Requirements
Ensure your complete solution follows the standard requirements. 

1. Write [unit tests](../../Challenge_Testing){:target="_blank"}
1. Follow the [template for a well-formatted README](../../Challenge_Documentation){:target="_blank"}
1. Submit the assignment following [these instructions](../../Challenge_Submission){:target="_blank"}
