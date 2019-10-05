# Merge Sort

## Resources
Readings, Videos, Drawings

1. [Merge Sort Wiki](https://en.wikipedia.org/wiki/Merge_sort){:target="_blank"}
2. [Merge Sort Resource #2](https://www.geeksforgeeks.org/merge-sort/){:target="_blank"}
3. [Merge Sort Resource #3](https://www.tutorialspoint.com/data_structures_algorithms/merge_sort_algorithm.htm){:target="_blank"}

## Assignment

- Complete a working, tested implementation of Merge Sort, based on the pseudo code provided
- Create a blog post on understanding the **Merge Sort Algorithm** suitable for a 301 level student. Alternately, prepare a presentation that presents the algorithm in a novel way. E.g. a short skit, live mini-lecture, interpretive dance.


## Pseudo Code
```javascript

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

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