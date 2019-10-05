# Interview 02

Implement Quicksort.

## Specifications

- Read all of the following instructions carefully. 
- Act as an interviewer, giving a candidate a code challenge.
- Score the candidate according to the [Whiteboard Rubric](https://docs.google.com/spreadsheets/d/1scthkmARfzAFZrSYAp6LA2coOaoWUWbSzMbtIU4jcHw){:target="_blank"}.
- You are free to offer suggestions or guidance (and see how they respond),  but don't solve it for the candidate.

## Feature Tasks

- Ask the candidate to write a function to implement a quicksort.
- Avoid utilizing any of the built-in methods available in your language.
- Offer an example input array of positive and negative integers.
- Encourage a recursive solution, for elegance. 
- The candidate should have at least 2 functions—traditionally, a `quicksort` and a `partition` function. 
- The candidate should be able to describe the properties of the algorithm they implement: 
  - Is it in-place?
    - Most likley, depends on implementation.
  - Is it stable?
    - Most likley not, depends on implementation.
  - Is it adaptable?
    - Most likley, depends on implementation.
  - What's the time and space complexity? 
    - This is a divide-and-conquer algorithm, so, best case, it takes `O(n log n)` time—that's `n` steps to partition the array, `log n` times. 
    - Since at any step in the process, it only swaps elements within the array, it uses `O(1)` space.

## Structure 

Familiarize yourself with the grading rubric, so you know how to score the interview. 

Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available. 

Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

Assign points for each item on the Rubric, according to how well the candidate executed on that skill. 

Add up all the points at the end, and record the total at the bottom of the page.

## Example

![quicksort example](Quicksort_diagram.png)

## Documentation

Record detailed notes on the rubric, to share with the candidate when the interview is complete. 
