# Code Challenge 03

Binary search in a sorted 1D array

## Specifications
- Read all of these instructions carefully. Name things exactly as described.
- Do all your work in a public repository called `data-structures-and-algorithms`.
- Create a new branch in your repo called `array-binary-search`.
- Your top-level readme should contain a "Table of Contents" navigation to all of your challenges and implementations so far. (Don't forget to update it!)
- This assignment should be completed within the `challenges` subdirectory of the repository.
- On your branch, create a folder named `arrayBinarySearch` which contains a file called `array-binary-search.js`
- Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.

## Feature Tasks
Write a function called `BinarySearch` which takes in 2 parameters: a sorted array and the search key. *Without utilizing any of the built-in methods* available in JavaScript, return the index of the array element that is equal to the search key, or -1 if the element does not exist.

## Example

| Input | Output |
|-----|----|
| `[4,8,15,16,23,42], 15` | `2` |
| `[11,22,33,44,55,66,77], 90` | `-1` |

## Resources

- [Wikipedia: Binary Search Algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm)


## Stretch Goal

Once you've achieved a working solution, test with varying array sizes (100, 10000, 100000 elements). You can use a [random number generator](https://onlinerandomtools.com/generate-random-numbers) to get a list of comma-separated numbers of this quantity.

## Requirements
Ensure your complete solution follows the standard requirements. 

1. Write [unit tests](../TESTING.md)
1. Follow the [template for a well-formatted README](../DOCUMENTATION.md)
1. Submit the assignment following [these instructions](../SUBMISSIONS.md)
