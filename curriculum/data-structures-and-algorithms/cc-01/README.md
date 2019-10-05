# Code Challenge 01

Reverse an array.

## Specifications
- Read all of the following instructions carefully. Name things exactly as described.
- Do all your work in a public repository called `data-structures-and-algorithms`.
- Create a new branch in your repo called `array-reverse`.
- Your top-level readme should contain a "Table of Contents" navigation to all of your challenges and implementations so far. (Don't forget to update it!)
- This assignment should be completed within the `challenges` subdirectory of the repository.
- On your branch, create...
    - _C#_: a new .NET Core console project named `ArrayReverse`. Within your `Program.cs` create a new static method outside of `Main()` following the naming conventions below. Call your newly created method in `Main()` once complete.
    - _JavaScript_: a folder named `arrayReverse` which contains a file called `array-reverse.js`
    - _Python_: a folder named `array_reverse` which contains a file called `array_reverse.py`
    - _Java_: a file called `ArrayReverse.java`
- Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.
    - _NOTE: You can find an example of this configuration for your course in your class lecture repository._

## Feature Tasks
- Write a function called `reverseArray` which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

## Example

| Input | Output |
|-----|----|
| `[1, 2, 3, 4, 5, 6]` | `[6, 5, 4, 3, 2, 1]` |
| `[89, 2354, 3546, 23, 10, -923, 823, -12]` | `[-12, 823, -923, 10, 23, 3546, 2354, 89]` |
| `[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]` | `[199, 197, 193, 191, 181, 179, 173, 167, 163, 157, 151, 149, 139, 137, 131, 127, 113, 109, 107, 103, 101, 97, 89, 83, 79, 73, 71, 67, 61, 59, 53, 47, 43, 41, 37, 31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2]` |

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

_Note: There is no test requirement for Class01. Going forward you will be required to test any code you produce unless otherwise directed by your instructional team._

## Stretch Goal

Once you've achieved a working solution, implement the same feature with a different methodology. (Hint: what different techniques do you have when working with arrays? Recursion, loops, indexes, modifying the array input directly...)

## Documentation: Your README.md

```markdown
# Reverse an Array
<!-- Short summary or background information -->

## Challenge
<!-- Description of the challenge -->

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## Solution
<!-- Embedded whiteboard image -->

```

## Submission Instructions
1. Take a photo of your completed whiteboard, matching the [example whiteboard layout](../../Whiteboard_Workflow.md){:target="_blank"}.
     1. Copy your photo into an `/assets` directory in your repo
     1. Give the image file the same name as the branch you are working on
     1. Embed the image in your README.md documentation
1. Create a pull request from your branch to your `master` branch
1. In your open pull request, leave as a comment [a checklist](https://github.com/blog/1825-task-lists-in-all-markdown-documents){:target="_blank"} of the specifications and tasks above, with the actual steps that you completed checked off
1. Submitting your completed work to Canvas:
    1. Copy the link to your open pull request and paste it into the corresponding Canvas assignment
    1. Leave a description of how long this assignment took you in the comments box
    1. Add any additional comments you like about your process or any difficulties you may have had with the assignment
1. Merge your branch into `master`, and delete your branch (don't worry, the PR link will still work)

## Rubrics

### Whiteboard

| Points  | Reasoning | 
| :------------: | :----------- | 
| 2       | Whiteboard exercise completed, and recommended process followed |
| 1       | Whiteboard exercise is not complete, or workflow does not follow recommended structure/syntax | 
| 0       | Whiteboard exercise is significantly incomplete or not present | 

### Code Implementation

| Points  | Reasoning |
| :------------: | :----------- | 
| 2       | Code implementation meets all requirements listed with sufficient, valid passing unit tests |
| 1.5     | Code implementation meets all requirements but solution is inefficient or implementation is missing appropriate comments |
| 1       | Code implementation not fully complete, or missing required tests | 
| 0       | Code implementation is less than 50% complete, or has a failing test, or no tests at all |

### Readme

| Points  | Reasoning |
| :------------: | :----------- | 
| 1       | Readme meets all requirements, and the top-level readme of repository properly links to challenge |
| 0       | Readme not present in repo or does not meet the specified requirements listed in assignment |
