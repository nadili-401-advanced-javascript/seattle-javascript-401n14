# Quick Sort

## Resources
Readings, Videos, Drawings

1. [Quick Sort Wiki](https://en.wikipedia.org/wiki/Quicksort){:target="_blank"}
2. [Quick Sort Resource #2](https://www.geeksforgeeks.org/quick-sort/){:target="_blank"}

## Assignment
- Complete a working, tested implementation of Quick Sort, based on the pseudo code provided
- Create a blog post on understanding the **Quick Sort Algorithm** suitable for a 301 level student. Alternately, prepare a presentation that presents the algorithm in a novel way. E.g. a short skit, live mini-lecture, interpretive dance.


## Pseudo Code
```javascript
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

## Requirements
Ensure your complete solution follows the standard requirements. 

1. Write [unit tests](../../Challenge_Testing){:target="_blank"}
1. Follow the [template for a well-formatted README](../../Challenge_Documentation){:target="_blank"}
1. Submit the assignment following [these instructions](../../Challenge_Submission){:target="_blank"}

### Implementation
* Convert the pseudo-code into working code in your language
* Present a complete set of working tests

### Blog Notes

* Use the [template](./BLOG-TEMPLATE.md){:target="_blank"} provided
* 1 short video resource
* 2 quality readings/references
* An organized, ordered blog outline

* Working pseudo code 
* Description of the algorithm
* Supportive Images

(Basically, a tricked out version of our Whiteboard)

## Submission

Submit a link to your completed version of `BLOG.md`

## Stretch Goal

Post your blog post to Linked In
