'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if ( ! this.head ) {
      this.head = node;
      return;
    }

    let current = this.head;
    while( current.next ) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while(current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class Hashmap {

  constructor(size) {
    this.size = size;
    this.map = new Array(size); //.fill();
  }

  hash(key) {
    return key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    },0) * 599 % this.size;
  }

  set(key,value) {
    let hash = this.hash(key);

    if(! this.map[hash] ) { this.map[hash] = new LinkedList(); }

    // We used an object here, but this could be anything...
    let entry = { [key]: value };
    this.map[hash].add( entry );
  }

  /**
   * Find a key in the hashmap and return its value
   * @param key
   * @return {string}
   */
  get(key) {

  }
}

let myhash = new Hashmap(1024);
myhash.set('John','Boss');
myhash.set('Cathy','The Real Boss');
myhash.set('Zach','Kid 1');
myhash.set('Allie','Kid 2');
myhash.set('Rosie','Dog');
myhash.set('Cat','TA');
myhash.set('Justin','Student');
myhash.set('Jason','Student');
myhash.set('Ben','Student');
myhash.set('Timea','Student');
myhash.set('Jen','Student');
myhash.set('Khalil','Student');
myhash.set('Michael','Student');
myhash.set('Ovi','Student');

myhash.map.forEach( (data,i) => {
  console.log(i, data && data.values());
});

