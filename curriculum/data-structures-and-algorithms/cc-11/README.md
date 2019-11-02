# Code Challenge 11

In this challenge, your task will be to implement a Queue using two Stacks.

## Specifications

-   Read all of these instructions carefully. Name things exactly as described.
-   Do all your work in a public repository called `data-structures-and-algorithms`, with a well-formatted, detailed top-level README.md.
    -   Your top-level readme should contain a "Table of Contents" navigation to all of your challenges and implementations so far. (Don't forget to update it!)
-   Create a branch in your repo called `queue-with-stacks`.
-   On your branch, create a folder named `queueWithStacks` which contains a file called `queue-with-stacks.js`
-   Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.
    -   _NOTE: You can find an example of this configuration for your course in your class lecture repository._

## Feature Tasks

Create a brand new `PseudoQueue` class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize two `Stack` objects. Ensure that you create your class with the following methods:

-   `enqueue(value)` which inserts `value` into the PseudoQueue, using a _last-in, last-out_ approach.
-   `dequeue()` which extracts a value from the PseudoQueue, using a _first-in, first-out_ approach.

The `Stack` instances have only `push`, `pop`, and `peek` methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

## Example

Suppose you had the following two stacks:

| Stack 01       | Stack 02  |
| -------------- | --------- |
| `top` -> `[A]` | `<empty>` |

When you want to `enqueue` you can `push` onto Stack 01:

| Stack 01                | Stack 02  |
| ----------------------- | --------- |
| `top` -> `[B]` -> `[A]` | `<empty>` |

When you want to `dequeue`, you can `pop` the contents of Stack 01 onto Stack 02:

| Stack 01  | Stack 02                |
| --------- | ----------------------- |
| `<empty>` | `top` -> `[A]` -> `[B]` |

Now that the stack has been essentially reverse, you can `pop` the top from Stack 02:

| Stack 01  | Stack 02       |
| --------- | -------------- |
| `<empty>` | `top` -> `[B]` |

And thus, the first item in (`[A]`) is also the first item out, just as Queues are supposed to be.

> Note, this is just one example of how you might implement this! Feel free to be creative.

### `enqueue(value)`

| Input           | Args | Output               |
| --------------- | :--: | -------------------- |
| `[C]->[B]->[A]` | `D`  | `[D]->[C]->[B]->[A]` |

### `dequeue()`

| Input                | Output | Internal State  |
| -------------------- | ------ | --------------- |
| `[D]->[C]->[B]->[A]` | `A`    | `[D]->[C]->[B]` |

## Requirements

## Structure and Testing

Utilize the [Single-Responsibility Principle](https://deviq.com/single-responsibility-principle/): any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write tests to prove the following functionality:

1. Can successfully enqueue into your pseudo queue
2. Can successfully enqueue multiple values into your queue
3. Can successfully dequeue out of a queue the expected value
4. Can successfully empty a queue after multiple dequeues
5. Can successfully instantiate an empty queue

Ensure your tests are passing before you submit your solution.

**You must have Travis connected to your pull request in order to get full points on testing!**

## Documentation: Your README.md

```markdown
# Pseudo Queue

## Links

-   Link to your Pull Request
-   Link to your Travis

<!-- Short summary or background information -->

## Challenge

<!-- Description of the challenge -->

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API

<!-- Description of each method publicly available to your Stack and Queue-->
```

## Submission Instructions

1. Create a pull request from your branch to your `master` branch
1. In your open pull request, leave as a comment [a checklist](https://github.com/blog/1825-task-lists-in-all-markdown-documents) of the specifications and tasks above, with the actual steps that you completed checked off
1. Submitting your completed work to Canvas:
    1. Copy the link to your README (which must have a link to your pull request inside of it) and paste it into the corresponding Canvas assignment
    1. Leave a description of how long this assignment took you in the comments box
    1. Add any additional comments you like about your process or any difficulties you may have had with the assignment
1. **Do NOT merge your branch into `master` - your open pull request will be your primary way to resubmit if needed. Only merge to master once you have received a grade and do not wish to resubmit.**
