# Code Challenge

Find the first repeated word in a book.

## Specifications

- Read all of the following instructions carefully. Name things exactly as described. 
- Do all your work in a public repository (matching the example provided by your instructor) called `data-structures-and-algorithms`, with a well-formatted, detailed top-level README.md
- Create a branch in your repository called `repeated-word`
- On your branch, create...
    - _C#_: Create a method named `RepeatedWord()` outside of `Main()` in your `Program.cs` file. Call Your newly created method in `Main()` once complete. 
    - _JavaScript_: a folder named `repeatedWord` which contains a file called `repeated-word.js`
    - _Python_: a folder named `repeated_word` which contains a file called `repeated_word.py`
    - _Java_: a folder named `RepeatedWord` which contains a file called `RepeatedWord.java`
- Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.
    - _NOTE: You can find an example of this configuration for your course in your class lecture repository._

## Feature Tasks

- Write a function that accepts a lengthy string parameter. 
- Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write at least three test assertions for each method that you define. 

Ensure your tests are passing before you submit your solution.

## Example

| Input | Output |
|-----|----| 
| `"Once upon a time, there was a brave princess who..."` | `"a"` |
| `"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."` | `"it"` |
| `"It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."` | `"summer"` |

## Stretch Goals

- Modify your function to return a count of each of the words in the provided string
- Modify your function to return a list of the words most frequently used in the provided string

## Requirements
Ensure your complete solution follows the standard requirements. 

1. Write [unit tests](../../Challenge_Testing){:target="_blank"}
1. Follow the [template for a well-formatted README](../../Challenge_Documentation){:target="_blank"}
1. Submit the assignment following [these instructions](../../Challenge_Submission){:target="_blank"}
