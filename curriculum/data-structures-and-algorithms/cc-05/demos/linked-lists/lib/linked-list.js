'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  // insert = add to beginning
  // append = add to end
  append(value) {
    let node = new Node(value);

    // If the list is empty, set the new
    // node equal to the head

    if (!this.head) {
      console.log('Head: ', this.head);

      this.head = node;

      console.log('New Head: ', this.head.value, '->', this.head.next);
      console.log('Done Appending');
      console.log('=======================');
      console.log();
      return this;
    }

    // If the list is not empty, cycle through the
    // list until you get to a node that has no
    // next set. We then set that next equal to our
    // new node
    let current = this.head;

    console.log(
      'Head/Current: ',
      this.head.value,
      '->',
      this.head.next ? this.head.next.value : this.head.next
    );

    while (current.next) {
      current = current.next;
      console.log(
        'Current: ',
        current.value,
        '->',
        current.next ? current.next.value : current.next
      );
    }

    current.next = node;
    console.log('Setting current.next: ', current.next.value);
    console.log('Done Appending');
    console.log('=======================');
    console.log();
    return this;
  }
}

module.exports = LinkedList;
