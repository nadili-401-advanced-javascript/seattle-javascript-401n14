# Demos: Block 1 - DS&A, Designs, Comp Sci, Recap

### Bitmaps  (`demo/bitmap-demo.js`)
Use this demo as the students final prep for the end of block project - Bitmap Transformer

  * Open the bitmap spec document first and talk through it
  * Write code to read in the bitmap as a buffer
  * Using the spec as your guide and the `readUInt16LE` functions, parse a few things out of the buffer, such as File Type, Height, Width
  * Reiterate to the students the need break down the file with a constructor before they can begin to transform it.
  * Provide some (limited) guidance on how to transform
    * Change the color table (shading, hues, etc)
    * Change the pixel array to point to different colors on a pixel by pixel basis
      * Can you find the edges?
      
### Big O

[Common Curriculum Big-O Demo](https://github.com/codefellows/common_curriculum/tree/master/data_structures_and_algorithms/Code_401/class-05/demos/big-o/demo)

The big-o demo is setup with code that is increasingly complex so that you can point to executable lines and count the number of times they will run.

Use this to determine the 'n' factor in loops and recursion, and continually point out and query the students for how many times things will run.

### Linked Lists

[Common Curriculum Linked Lists Demo](https://github.com/codefellows/common_curriculum/tree/master/data_structures_and_algorithms/Code_401/class-05/demos/linked-lists/javascript)

Don't go much deeper than the core implementation of a list constructor.

* Head
* Tail
* While Loop to go through and add a node to the end - O(n)
* Simple head replacement to put a new node at the start - O(1)

### SASS
[Sassmeister](http://www.sassmeister.com)

Use the Sassmeister online tool (which was built by a former Code Fellows student) to do your initial demo into SASS, hitting on the following basic points:

* Nested Selectors
* Use of the `&` to stick rules
* Variables
* Mixins
* Loading of Partials

The demo code included in this repo, when typed in, will showcase in real time how SASS compiles down to CSS.

Do the mixins last, once the students grok the idea of nesting and variables.
