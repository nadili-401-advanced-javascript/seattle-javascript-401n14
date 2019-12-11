# Insertion Sort

## Assignment

- Complete a working, tested implementation of Insertion Sort, based on the pseudo code provided
- Create a blog post on understanding the **Insertion Sort Algorithm** suitable for a 301 level student. Alternately, prepare a presentation that presents the algorithm in a novel way. E.g. a short skit, live mini-lecture, interpretive dance.


## Pseudo Code
```javascript
  InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```

## Resources
Readings, Videos, Drawings

## Requirements
Ensure your complete solution follows the standard requirements. 

1. Write [unit tests](../../Challenge_Testing){:target="_blank"}
1. Follow the [template for a well-formatted README](../../Challenge_Documentation){:target="_blank"}
1. Submit the assignment following [these instructions](../../Challenge_Submission){:target="_blank"}

### Implementation
* Convert the pseudo-code into working code in your language
* Present a complete set of working tests

### Blog Notes

* Create a BLOG.md document using the [template](./BLOG-TEMPLATE.md){:target="_blank"} provided
* 1 short video resource
* 2 quality readings/references
* An organized, ordered blog outline

* Working pseudo code 
* Description of the algorithm
* Supportive Images

(Basically, a tricked out version of our Whiteboard)

## Submission

Submit a link to a pull request that contains your completed version of `BLOG.md` and your full working, tested code solution.

## Stretch Goal

Post your blog post to Linked In


