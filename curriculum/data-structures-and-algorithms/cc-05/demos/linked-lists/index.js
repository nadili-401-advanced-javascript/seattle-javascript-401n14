'use strict';

const LinkedList = require('./lib/linked-list.js');
const Node = require('./lib/node.js');

let list = new LinkedList();

list.append('Apple');
list.append('Banana');
list.append('Cherry');
list.append('Durian');
list.append('Elderberry');
list.append('Fig'); // << current tail

let fig = list.tail;

list.tail = new Node('Grape');
list.tail.prev = fig;

fig.next = list.tail;

list.append('Huckleberry');

console.log(list);
