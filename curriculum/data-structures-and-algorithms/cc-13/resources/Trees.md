# Trees

In this tutorial, we'll be covering **Binary Trees** and **Binary Search Trees**. We will review some common terminology that is shared amongst all of the trees and then dive into specifics of the different types.

## Common Terminology

1. _Node_ - a node is the individual item/data that make up the data structure.
1. _Root_ - The root is the first/top `Node` in a tree
1. _Left Child_ - The node that is positioned to the left of the root
1. _Right Child_ - The node that is positioned to the right of the root
1. _Edge_ - The edge in a tree is the link between two nodes
1. _Leaf_ - A leaf is the node that does not contain either a left child or a right child node.
1. _Height_ - The height of a tree is determined by the number of edges from the root to the bottommost node.

### Sample Tree

![Sample Tree](images/BinaryTree1.PNG)

## Traversals

An important aspect of tress is how to traverse them, so that we can either search for a Node we're looking for, or print out all the contents of a tree. There are two categories of traversals when it comes to trees:

1. Depth First
2. Breadth First

### Depth First

Depth first traversal is where we prioritize going through the depth (height) of the tree first. There are multiple ways to carry out depth first traversal, and each method changes the order in where we search/print the `root`. Here are three methods for depth first traversal:

1. Pre-order: `root >> left >> right`
2. In-order: `left >> root >> right`
3. Post-order: `left >> right >> root`

![Sample Tree](images/tree-example.png)

Given the sample tree above, our traversals would result in different paths:

- _Pre-order:_ `A, B, D, E, C, F`
- _In-order:_ `D, B, E, A, F, C`
- _Post-order:_ `D, E, B, F, C, A`

The most common way to traverse through a tree is to use **recursion**. With these traversals, we rely on the _call stack_ to navigate back up the tree when we have reached the end of a sub-path.

#### Pre-order

Let's breakdown the pre-order traversal. Here is the pseudo code for this traversal method:

```javascript
ALGORITHM preOrder(root)
{
  OUTPUT <-- root.value

    if root.left is not NULL
        preOrder(root.left)

    if root.right is not NULL
        preOrder(root.right)
}
```

Pre-order means that the `root` has to be looked at first. In our case, looking at the root just means that we output its value. When we call `preOrder` for the first time, the `root` will be added to the call stack:

![PreOrder 01](images/DepthTraversal1.PNG)

Next, we start reading our `preOrder` function's code from top to bottom. The first line of code reads this:

```
OUTPUT <-- root.value
```

This means that we will output the `root.value` out to the console. Then, our next block of code instructs us to check if our `root` has a `left` Node set. If the root does, we will then send the `left` Node to our `preOrder` method recursively. This means that we make another function call, where `B` is our new `root`:

![PreOrder 02](images/DepthTraversal2.PNG)

This process continues until we reach a leaf Node. Here's the state of our tree when we hit our first leaf, `D`:

![PreOrder 03](images/DepthTraversal3.PNG)

It's important to note a few things that are about to happen.

- The value of the `root` will output to the console
- The program will look for both a `root.left` and a `root.right`. Both will return `null`, so it will end the execution of that method call
- `D` will _pop_ off of the call stack and the `root` will be reassigned back to `B`
  - This is the heart of recursion: when we complete a function call, we pop it off the stack and are able to continue execution through the previous function call

![PreOrder 04](images/DepthTraversal4.PNG)

The code block will now pick up where it left off when `B` was the root. Since it already looked for `root.left`, it will now look for `root.right`.

![PreOrder 05](images/DepthTraversal5.PNG)

`E` will output to the console. Since `E` is a leaf, it will complete the method code block, and pop `E` off of the call stack and make its way back up to `B`.

![PreOrder 06](images/DepthTraversal6.PNG)

In the function call, `B` has already checked for `root.left`, and `root.right`. There are no further lines of code to execute, so `B` will be popped off the call stack, so that we can resume execution of `A`.

![PreOrder 07](images/DepthTraversal7.PNG)

Following the same pattern as we did with the other nodes, `A`'s call stack frame will pick up where it left off, and check out `root.right`. `C` will be added to the call stack frame, and it will now be reassigned as the new `root`.

![PreOrder 08](images/DepthTraversal8.PNG)

`C` will be outputted to the console, and `root.left` will be evaluated. Because `C` has a left child, `preOrder` will be called, with the parameter `root.left`.

![PreOrder 09](images/DepthTraversal9.PNG)

At this point, the program will find that `F` does not have any children and it will make its way back up the call stack up to `eC`.

![PreOrder 10](images/DepthTraversal10.PNG)

`C` does not have a `root.right`, so it will pop off the call stack and return to `A`.

![PreOrder 11](images/DepthTraversal11.PNG)

Congratulations! Your pre-order traversal is completed!

#### Traversal Pseudo Code

Here is the pseudo code for all three of the depth first traversals:

##### Pre-order

```javascript
ALGORITHM preOrder(node)
// INPUT <-- root Node
// OUTPUT <-- pre-order output of tree nodes

    OUTPUT <-- node.value

    if node.left is not Null
        preOrder(node.left)

    if node.right is not NULL
        preOrder(node.right)
```

##### In-order

```javascript
ALGORITHM inOrder(node)
// INPUT <-- root Node
// OUTPUT <-- in-order output of tree nodes

    if node.left is not NULL
        inOrder(node.left)

    OUTPUT <-- node.value

    if node.right is not NULL
        inOrder(node.right)
```

##### Post-order

```javascript
ALGORITHM postOrder(node)
// INPUT <-- root Node
// OUTPUT <-- post-order output of tree nodes

    if node.left is not NULL
        inOrder(node.left)

    if node.right is not NULL
        inOrder(node.right)

    OUTPUT <-- node.value
```

Notice the similarities between the three different traversals above. The biggest difference between each of the traversals is **_when you are looking at the root node_**.

### Breadth First

The breadth first traversal iterates through the tree by
going through each level of the tree node by node.

**_Output:_** A, B, C, D, E, F

Traditionally the breadth first traversal leverages a queue to
traverse the width (or the breadth) of the tree. Let's break down
the process:

1. First, Let's take a look at a tree that we can conduct a Breadth First traversal on:

![DepthFirst Traversal](images/depthTraversal.PNG){:target="\_blank"}

2. Let's start by putting the root Node into the queue (`Queue.Enqueue(root`)

![DepthFirst Traversal](images/BreadthTraversal2.PNG){:target="\_blank"}

3. Now that we have one node in our queue, let's `Dequeue`.

![DepthFirst Traversal](images/BreadthTraversal3.PNG){:target="\_blank"}

4. Since we have completed the `Dequeue` action on the root node, we can now `Enqueue` both
   it's `root.LeftChild` and it's `root.rightChild`.

![DepthFirst Traversal](images/BreadthTraversal4.PNG){:target="\_blank"}

4. We will repeat this process with the next node in the front of the queue.

![DepthFirst Traversal](images/BreadthTraversal5.PNG){:target="\_blank"}

5. With `NodeB`, we can then `Enqueue` the two children node.

![DepthFirst Traversal](images/BreadthTraversal6.PNG){:target="\_blank"}

6. `Dequeue` the front of the queue
   ![DepthFirst Traversal](images/BreadthTraversal7.PNG){:target="\_blank"}

7. `Enqueue` the children...
   ![DepthFirst Traversal](images/BreadthTraversal8.PNG){:target="\_blank"}

8. Keep `Dequeue`ing, and only `Enqueue` if the `node.LeftChild` or `node.RightChild` is not null.
   ![DepthFirst Traversal](images/BreadthTraversal9.PNG){:target="\_blank"}
   ![DepthFirst Traversal](images/BreadthTraversal10.PNG){:target="\_blank"}
   ![DepthFirst Traversal](images/BreadthTraversal11.PNG){:target="\_blank"}

Here is the pseudo code, utilizing a built in queue, to
implement a Breadth First traversal.

```javascript
ALGORITHM BreadthFirst(root)
//INPUT <-- root node
// OUTPUT <-- front node of queue to console

    Queue breadth <-- new Queue()
  breadth.Enqueue(root)

  while breadth.Peek
      Node front = breadth.Dequeue()
    OUTPUT <-- front.Value

    if front.LeftChild is not null
      breadth.Enqueue(front.LeftChild)

    if front.RightChild is not NULL
      breadth.Enqueue(front.RightChild)
```

## Binary Trees

Binary Trees are trees that only contain no more than 2 children. There is not a specific
sorting order for a binary tree. Nodes can be added into a binary tree wherever space allows.

Here is what a binary tree looks like:

![Binary Tree](images/BinaryTree2.PNG){:target="\_blank"}

### Adding a node

Because there is no structure to where nodes are "supposed to go" in a binary tree, it really doesn't matter where a new node gets placed.

One strategy for adding a new node to a binary tree is to fill all "child" spots from the top down. To do so, we would leverage the use of breadth first traversal.

During the traversal, we will find the first node that does not have 2 child nodes, and insert
the new node as a child. Prefer filling from left to right.

In the event you would like to have a node placed in a specific location, you need to reference not only the new
node that is created, but also the parent node, to which the new node is attached.

### Big O

The Big O time of an insertion an searching in a Binary tree will always be O(n).

This is because there is no structure or organization to a Binary Tree. In the worst case scenario, we will have to search the whole tree for the specified value, or the place where we want to insert a new node.

The Big O space for a node insertion using breadth first will be an O(w), with "w" being largest width
of the tree. This is because at the worst case scenario, the queue will contain all of the nodes at the tree's
widest point. The maximum width, for a "perfect" binary tree, is `2^(H-1)`, where `H` is the height of the tree. Height can be calculated as `lg n`. Drawing a small example reveals the pattern very quickly.

## Binary Search Trees

A binary search tree is a type of tree that does have structure attached to it. In a binary search tree,
the tree is organized in a manner where all values that are smaller than the root are placed to the left,
and all values that are larger than the root are placed to the right.

Here is an example of a Binary Search Tree that has numeric values:

![BST](images/BST1.PNG)

### Searching a BST

Searching a BST can be done quickly, because all you do is compare the node you are searching for
against each root of the tree. Dependent on the value being larger or smaller, will determine
the direction on which you will traverse.

Here is an example:

1. Let's say we are searching for the node that contains 60. First thing we do is compare 60 against the root.

2. We can see that 60 is less than 100, so we will go left.

3. We then compare 60 against the next root, 50.
4. We know that 60 is greater than 50, so we will go right.
5. Next, we compare 60 against 75. We know that 75 is greater than 60, so we go left.
6. Finally, we compare 60 against 60. These numbers are exactly the same which tells us we found our node. We then return our node back to the user.

The best way to approach a BST search is with a `while` loop. The condition within this `while` loop would
be to keep running until it hits a leaf.

The reason for this condition is because, again, the structure of the tree. We should always be able
to pin point the exact location of the node we are searching for, we will only ever have to go, at most, the height of the tree (from root -> leaf).

### Big O

The Big O of a Binary Search Tree's insertion and search operations is O(h), or O(height). In the worst case, we will have to search all the way down to a leaf, which will require searching through as many nodes as the tree is tall. In a balanced tree, the height of the tree is lg(n); in an unbalanced tree, the worst case height of the tree is n.

The Big O space of a Binary Search Tree (BST) search would be O(1). During the search, we are not allocating
any additional space when searching for a node.
