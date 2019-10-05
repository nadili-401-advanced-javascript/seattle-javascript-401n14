# Interview 02

Identify anagrams.

## Specifications

- Read all of the following instructions carefully. 
- Act as an interviewer, giving a candidate a code challenge
- Score the candidate according to the [Whiteboard Rubric](https://docs.google.com/spreadsheets/d/1scthkmARfzAFZrSYAp6LA2coOaoWUWbSzMbtIU4jcHw){:target="_blank"}
- You are free to offer suggestions or guidance (and see how they respond),  but don't solve it for the candidate

## Feature Tasks

- Actual code is required for a complete answer  
- Ask the candidate to write a function to validate whether or not two given strings are anagrams (contain the same letters). 
- Disregard spaces
- Help the candidate understand the definition of a anagram if they are unsure of it.
  - Two strings are anagrams if one can be built from exactly the same letters as the other. 
- Avoid utilizing any of the built-in methods available in your language.
- This problem can be solved using different approaches:
  - Look at each letter in the first string, and determine if it's in the second string (removing it, if found).
    - This is an `O(n^2)` brute-force solution
  - Sort the characters in each string, and then see if they are equal. 
    - Best sorts are `O(n log n)`, so this won't be better than that. 
  - Use a hash to count the occurances of each charater in the first string, and ensure the second string matches. 
    - This requires a single pass through both strings, so at worst is `O(n)`. 

## Structure 

Familiarize yourself with the grading rubric, so you know how to score the interview. 

Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available. 

Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

Assign points for each item on the Rubric, according to how well the candidate executed on that skill. 

Add up all the points at the end, and record the total at the bottom of the page.

## Example

| Input | Output |
|-----|----| 
| `"Eleven plus two", "Twelve plus one"` | `TRUE` |
| `"Clint Eastwood", "Old West Action"` | `TRUE` |
| `"Software", "Swear often"` | `FALSE` |
| `"Astronomers", "Moon starers"` | `TRUE` |

## Documentation

Record detailed notes on the rubric, to share with the candidate when the interview is complete. 
