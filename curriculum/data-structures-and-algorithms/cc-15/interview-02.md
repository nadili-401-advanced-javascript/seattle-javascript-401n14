# Interview 02

Eeney Meeney Miney Moe

People are standing in a circle playing Eeney Meeney Miney Moe. Counting begins at a
specified point in the circle and proceeds around the circle in a specified
direction. After a specified number of people are skipped, the next person is
removed. The procedure is repeated with the remaining people, starting with the
next person, going in the same direction and skipping the same number of people,
until only one person remains, and wins the game.


Write a function called `EeneyMeeneyMineyMoe()` that accepts a list of strings and an int
`k`. Start at the beginning of the list and count up to `k` and remove the person
at that index from the list. Keep counting from that index and count
up to `k` over and over until only one person is left in the list. Return a
string with the name of the last person left in the list.

```
n=3
[A, B, C, D, E]    // 1A, 2B, 3C
[A, B, _, D, E]    // C was removed
[_, B, _, D, E]    // A was removed
[_, B, _, D, _]    // E was removed
[_, _, _, D, _]    // B was removed
                   // only D is left
```

## Specifications

- Read all of the following instructions carefully.
- Act as an interviewer, giving a candidate a code challenge
- Score the candidate according to the [Whiteboard Rubric](https://docs.google.com/spreadsheets/d/1scthkmARfzAFZrSYAp6LA2coOaoWUWbSzMbtIU4jcHw){:target="_blank"}
- You are free to offer suggestions or guidance (and see how they respond),  but don't solve it for the candidate

## Feature Tasks

- Ask the candidate to write a function to execute the game described above.
- Help the candidate understand the rules of the game if he/she is unsure of it.
  - Feel free to share the example above to show an example
- Avoid utilizing any of the built-in methods available in your language.
- This problem can be solved using a queue:
  - One solution is to enqueue and dequeue `k` number of times. Once k is hit, remove that node from the queue completely. Repeat for each of the `n` people in the list.
    - This method takes `O(n * k)` time and uses `O(1)` extra space.
- Taking `O(n * k)` time is not the most efficient solution possible. As a stretch goal, consider how you could implement a solution that would not depend on `k`, but would depend only on the number of people in the list.

## Structure

Familiarize yourself with the grading rubric, so you know how to score the interview.

Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

Add up all the points at the end, and record the total at the bottom of the page.

## Example

```
n=3
[A, B, C, D, E]    // 1A, 2B, 3C
[A, B, _, D, E]    // C was removed
[_, B, _, D, E]    // A was removed
[_, B, _, D, _]    // E was removed
[_, _, _, D, _]    // B was removed
                   // only D is left, so return D
```

## Documentation

Record detailed notes on the rubric, to share with the candidate when the interview is complete.
