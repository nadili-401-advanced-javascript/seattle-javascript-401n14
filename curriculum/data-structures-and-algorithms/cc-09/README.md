# Code Challenge 09

### Implement a Stack and a Queue Data Structure

## Specifications

-   Read all of these instructions carefully. Name things exactly as described.
-   Do all your work in a public repository called `data-structures-and-algorithms`, with a well-formatted, detailed top-level `README.md`
    -   Your top-level README should contain a "Table of Contents" navigation to all of your challenges and implementations so far. (Don't forget to update it!)
-   Create a branch in your repository called `stack-and-queue`
-   On your branch, create a folder named `stacksAndQueues` which contains a file called `stacks-and-queues.js`
-   Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.
    -   _NOTE: You can find an example of this configuration for your course in your class lecture repository._

## Features

-   Create a `Node` class that has properties for the `value` stored in the Node, and a pointer to the `next` node.
-   Create a `Stack` class that has a `top` property. It creates an empty Stack when instantiated.

    -   This object should be aware of a default empty `value` assigned to `top` when the stack is created.
    -   Define a method called `push` which takes any `value` as an argument and adds a new Node with that `value` to the `top` of the stack with an `O(1)` time performance.
    -   Define a method called `pop` that does not take any arguments and removes the Node from the `top` of the stack, and returns that popped Node's `value`.
    -   Define a method called `peek` that does not take an argument and returns the `value` of the node located on `top` of the stack, without removing it from the stack.

-   Create a `Queue` class that has a `front` property. It creates an empty Queue when instantiated.

    -   This object should be aware of a default empty `value` assigned to `front` when the queue is created.
    -   Define a method called `enqueue` which takes any `value` as an argument and adds a new Node with that `value` to the `rear` of the queue with an `O(1)` time performance.
    -   Define a method called `dequeue` that does not take any arguments and removes the Node from the front of the queue, and returns the Node's `value`.
    -   Define a method called `peek` that does not take any arguments and returns the `value` of the Node located in the `front` of the queue, without removing it from the queue.

-   Any exceptions or errors that come from your code should be handled or captured errors. For example, rather than a default error thrown, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
-   Be sure to follow your languages best practices for naming conventions.

You have access to the `Node` class and all the properties on the `LinkedList` class.

## Structure and Testing

Utilize the [Single-Responsibility Principle](https://deviq.com/single-responsibility-principle/): any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write tests to prove the following functionality:

1. Can successfully push onto a stack
2. Can successfully push multiple values onto a stack
3. Can successfully pop off the stack
4. Can successfully empty a stack after multiple pops
5. Can successfully peek the next item on the stack
6. Can successfully instantiate an empty stack
7. Can successfully enqueue into a queue
8. Can successfully enqueue multiple values into a queue
9. Can successfully dequeue out of a queue the expected value
10. Can successfully peek into a queue, seeing the expected value
11. Can successfully empty a queue after multiple dequeues
12. Can successfully instantiate an empty queue

Ensure your tests are passing before you submit your solution.

## Documentation: Your README.md

```markdown
# Stacks and Queues

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
    1. Copy the link to your open pull request and paste it into the corresponding Canvas assignment
    1. Leave a description of how long this assignment took you in the comments box
    1. Add any additional comments you like about your process or any difficulties you may have had with the assignment
1. **Do NOT merge your branch into `master` - your open pull request will be your primary way to resubmit if needed. Only merge to master once you have received a grade and do not wish to resubmit.**
