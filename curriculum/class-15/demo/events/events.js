'use strict';

const emitter = require('./emitter.js');

// Let's work with some events!
// on, off, once, emit, listeners

emitter.on('my-event', handlerA);
emitter.on('my-event', handlerB);

const raiseEvent = () => {
  emitter.emit('my-event');
};

const handlerA = event => {
  console.log('I am handler A');
};

const handlerB = () => {
  console.log('I am handler B');
};

console.log(emitter.listeners('my-event'));

const handlers = { handlerA, handlerB };

module.exports = { emitter, handlers };
