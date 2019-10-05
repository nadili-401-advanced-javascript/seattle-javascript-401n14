# Code Challenge

Conduct "FizzBuzz" on a tree while traversing through it. Change the values of each of the nodes dependent on the current node's value

## Specifications
- Read all of these instructions carefully. Name things exactly as described.
- Do all your work in a public repository called `data-structures-and-algorithms`, with a well-formatted, detailed top-level README.md.
- Create a new branch in your repo called `fizzbuzz-tree`.
- Your top-level readme should contain a "Table of Contents" navigation to all of your challenges and implementations so far. (Don't forget to update it!)
- This assignment should be completed within the `challenges` subdirectory of the repository.
- On your branch, create...
    - _C#_: a new .NET Core console project named `FizzBuzzTree`. Within your `Program.cs` create a new static method outside of `Main()` following the naming conventions below. Call your newly created method in `Main()` once complete.
    - _JavaScript_: a folder named `fizzBuzzTree` which contains a file called `fizz-buzz-tree.js`
    - _Python_: a folder named `fizz_buzz_tree` which contains a file called `fizz_buzz_tree.py`
    - _Java_: a file called `FizzBuzzTree.java` in your `utilities` package
- Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.
    - _NOTE: You can find an example of this configuration for your course in your class lecture repository._

## Feature Tasks
- Write a function called `FizzBuzzTree` which takes a tree as an argument. 
- Without utilizing any of the built-in methods available to your language, 
determine weather or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes:
    - If the value is divisible by 3, replace the value with "Fizz"
    - If the value is divisible by 5, replace the value with "Buzz"
    - If the value is divisible by 3 and 5, replace the value with "FizzBuzz"
- Return the tree with its new values. 

- For explicitly-typed languages: Ensure your node values are of type `Object`, to hold either strings or integers. 


## Requirements
Ensure your complete solution follows the standard requirements. 

1. Write [unit tests](../../Challenge_Testing){:target="_blank"}
1. Follow the [template for a well-formatted README](../../Challenge_Documentation){:target="_blank"}
1. Submit the assignment following [these instructions](../../Challenge_Submission){:target="_blank"}
