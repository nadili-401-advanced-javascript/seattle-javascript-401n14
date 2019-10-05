# Interview 01

Design a system to track browser navigation history.

## Specifications

- Read all of the following instructions carefully. 
- Act as an interviewer, giving a candidate a code challenge
- Score the candidate according to the [Whiteboard Rubric](https://docs.google.com/spreadsheets/d/1scthkmARfzAFZrSYAp6LA2coOaoWUWbSzMbtIU4jcHw){:target="_blank"}
- You are free to offer suggestions or guidance (and see how they respond),  but don't solve it for the candidate

## Feature Tasks

- Actual code is required for a complete answer  
- Ask the candidate to code up a function to store data similar to a web browser's BACK button.
- For context, this could support a "resumable" web session, where someone navigating around an app could pick up where they left off when switching from a laptop to a mobile device, maintaining the history of views they've loaded. 
- Tell the candidate that they should write backend code.
- The client app will alert the backend when the user clicks "BACK", "FORWARD", or a link on a page (with the destination URL). 
- The candidate should focus on the data structure used to store this information, and the algorithms utilized to update it. 
- Don't let them spend too much time building an API. There should be just the 3 end points
  - GET /history/back: updates the history object, and returns the page the user came from to get to the current page. 
  - GET /history/forward: returns the next page in the user's history, from which they had recently clicked "BACK"
  - PUT /history/link: sends a URL that a user is now navigating to, which is saved into the history object.
- This problem can be approached in several ways: 
    - The History object should be created with good OOP design
    - Any new link clicked should replace anything that was "forward" of the current point. 
    - Some kind of data structure should be used for keeping track of the history. 
    - Since moving forward and backwards is always linear, a doubly linked list would work well. 
    - Alternatively, an array with careful index management could do the job. 
- The candidate should consider time and space.
   - Each API operation should happen independent of the size of the history object: `O(1)`
   - Since potentially every page visited could be stored, worst case is likely `O(n)` space.
- Some interesting edge cases may arise. Handle them as stretch goals. 

## Structure 

Familiarize yourself with the grading rubric, so you know how to score the interview. 

Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available. 

Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

Assign points for each item on the Rubric, according to how well the candidate executed on that skill. 

Add up all the points at the end, and record the total at the bottom of the page.

## Example

You are welcome to make up your own examples, or modify these as needed. 

| Input | Output |
|-----|----| 
| `link(1), link(2), link(3), back()` | `2` |
| `link(1), link(2), back(), link(3), back()` | `1, 1` |
| `link(1), link(2), link(3), link(4), back(), forward(), link(5), back()` | `3, 4, 4` |

## Documentation

Record detailed notes on the rubric, to share with the candidate when the interview is complete. 
