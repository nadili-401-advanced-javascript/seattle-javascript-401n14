# Code Challenge 12

In this challenge you will build a Queue that represents an animal shelter.

## Specifications

-   Read all of these instructions carefully. Name things exactly as described.
-   Do all your work in a public repository called `data-structures-and-algorithms`, with a well-formatted, detailed top-level `README.md`.
    -   Your top-level readme should contain a "Table of Contents" navigation to all of your challenges and implementations so far. (Don't forget to update it!)
-   Create a new branch in your repo called `fifo-animal-shelter`.
-   This assignment should be completed within the `challenges` subdirectory of the repository.
-   On your branch, create a folder named `fifoAnimalShelter` which contains a file called `fifo-animal-shelter.js`
-   Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.
    -   _NOTE: You can find an example of this configuration for your course in your class lecture repository._

## Feature Tasks

-   Create a `Dog` and `Cat` class. These classes should share the following properties:
    -   `name`: a string representing the name of this animal
    -   `print()`: a function that prints
        -   `${name} is a good dog!` if this is a `Dog` object
        -   `${name} is a sweet cat!` if this is a `Cat` object
-   Create a Queue class called `AnimalShelter` which holds only `Dog`s and `Cat`s
    -   Add a function `enqueue(animal)` which adds the specified `Dog` or `Cat` object into the shelter
    -   Add a function `dequeue(pref)` which dequeues either the first `Dog` or the first `Cat` object in the queue, depending on what `pref` is (`pref` may be a string that is either empty, `'cat'` or `'dog'`)
        -   If `pref` is an empty string, dequeue the first animal in the queue, regardless of if it's a `Dog` or `Cat`
        -   After you `dequeue`, call the `print` function on the dequeued object

## Example

| Starting Shelter                   | Function                   | Resulting Shelter                  |
| ---------------------------------- | -------------------------- | ---------------------------------- |
| `<empty>`                          | `enqueue(new Dog('Rex'))`  | `front -> [Rex] <- rear`           |
| `front -> [Rex] <- rear`           | `enqueue(new Cat('Luna'))` | `front -> [Rex] -> [Luna] <- rear` |
| `front -> [Rex] -> [Luna] <- rear` | `dequeue('cat')`           | `front -> [Rex] <- rear`           |
| `front -> [Rex] -> [Luna] <- rear` | `dequeue()`                | `front -> [Luna] <- rear`          |

## Requirements

### Testing

Write tests to prove the following functionality:

1. Can successfully enqueue a `Dog`
2. Can successfully enqueue a `Cat`
3. Error handling when you try to enqueue something that is neither a `Dog` nor a `Cat`
4. Can successfully dequeue a `Dog`
5. Can successfully dequeue a `Cat`
6. Can successfully dequeue the front of the `AnimalShelter` queue when you pass no parameters to `dequeue`
7. Error handling when you try to dequeue something that is neither a `'cat'`, `'dog'` or an empty string
8. Can successfully print the resulting object from a `dequeue` action

Ensure your tests are passing before you submit your solution.

**You must have Travis connected to your pull request in order to get full points on testing!**

## Documentation: Your README.md

```markdown
# Animal Shelter Queue

## Links

-   Link to Pull Request
-   Link to Travis

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
