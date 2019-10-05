# Interview 01

Reverse a string, three different ways.

## Specifications

- Read all of the following instructions carefully. 
- Act as an interviewer, giving a candidate a code challenge
- Score the candidate according to the [Whiteboard Rubric](https://docs.google.com/spreadsheets/d/1scthkmARfzAFZrSYAp6LA2coOaoWUWbSzMbtIU4jcHw){:target="_blank"}
- You are free to offer suggestions or guidance (and see how they respond),  but don't solve it for the candidate

## Feature Tasks

- Actual code is required for a complete answer  
- Ask the candidate to write 3 functions, that each utilize a different algorithms for reversing a string.
- One of the 3 methods may utilize any of the built-in methods, except for `String#reverse`, available in your language. The other 2 may not. 
- This problem can be approached in many ways....
  - Popular techniques involve converting the string to an array of characters, reversing the array, and then converting back to a string. 
  - Encourage the candidate to try at least one recursive solution, with no loops (`for` / `while`).
    - A base case should be clearly identified
    - The recursive call might look like concatenating the last character of the string, with `reverse` of the whole string (without the last char). 
      - `rev = str[lastChar] + strWithoutLastChar`
  - Ensure the candidate evaluates Big O for every algorithm. Be extra thoughtful of what any built-in methods are doing under the hood! 

## Structure 

Familiarize yourself with the grading rubric, so you know how to score the interview. 

Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available. 

Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

Assign points for each item on the Rubric, according to how well the candidate executed on that skill. 

Add up all the points at the end, and record the total at the bottom of the page.

## Example

| Input | Output |
|-----|----| 
| `"Code Fellows"` | `"swolleF edoC"` |
| `"Tacocat"` | `"tacocaT"` |
| `"A ship in port is safe, but that's not what ships are built for."` | `".rof tliub era spihs tahw ton s'taht tub ,efas si trop ni pihs A"` |

## Documentation

Record detailed notes on the rubric, to share with the candidate when the interview is complete. 
