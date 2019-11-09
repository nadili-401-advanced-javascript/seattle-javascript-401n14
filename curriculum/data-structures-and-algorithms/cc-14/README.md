# Code Challenge

Multi-bracket Validation.

## Specifications
- Read all of these instructions carefully. Name things exactly as described.
- Do all your work in a public repository called `data-structures-and-algorithms`, with a well-formatted, detailed top-level README.md.
- Create a new branch in your repo called `multi-bracket-validation`.
- Your top-level readme should contain a "Table of Contents" navigation to all of your challenges and implementations so far. (Don't forget to update it!)
- This assignment should be completed within the `challenges` subdirectory of the repository.
- On your branch, create...
    - _C#_: a new .NET Core console project named `MultiBracketValidation`. Within your `Program.cs` create a new static method outside of `Main()` following the naming conventions below. Call your newly created method in `Main()` once complete. 
    - _JavaScript_: a folder named `multiBracketValidation` which contains a file called `multi-bracket-validation.js`
    - _Python_: a folder named `multi_bracket_validation` which contains a file called `multi_bracket_validation.py`
    - _Java_: a file called `MultiBracketValidation.java` inside of your `utilities` package
- Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.
    - _NOTE: You can find an example of this configuration for your course in your class lecture repository._

## Feature Tasks
- On your main file, create...
    - _C#_: a method called `public static bool MultiBracketValidation(string input)`
    - _JavaScript_: a function called `multiBracketValidation(input)`
    - _Python_: a function called `multi_bracket_validation(input)`
    - _Java_: a method `public static boolean multiBracketValidation(String input)`

Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:
- Round Brackets : `()`
- Square Brackets : `[]`
- Curly Brackets : `{}`


## Example

| Input | Output |
|-----|----|
| `{}` | `TRUE` |
| `{}(){}` | `TRUE` |
| `()[[Extra Characters]]` | `TRUE` |
| `(){}[[]]` | `TRUE` |
| `{}{Code}[Fellows](())` | `TRUE` |
| `[({}]` | `FALSE` |
| `(](` | `FALSE` |
| `{(})` | `FALSE` |

Consider these small examples and why they fail.

| Input | Output | Why |
|------|---------|-------|
| `{`  | `FALSE` | error unmatched opening `{` remaining. |
| `)`  | `FALSE` | error closing `)` arrived without corresponding opening. |
| `[}` | `FALSE`  | error closing `}`. Doesn't match opening `(`. |


## Requirements
Ensure your complete solution follows the standard requirements. 

1. Write [unit tests](../../Challenge_Testing){:target="_blank"}
1. Follow the [template for a well-formatted README](../../Challenge_Documentation){:target="_blank"}
1. Submit the assignment following [these instructions](../../Challenge_Submission){:target="_blank"}
