'use strict';

const EventEmitter = require('events');
const emitter = new EventEmitter();

const handlerA = event => {
  console.log('I am handler A');
};

const handlerB = () => {
  console.log('I am handler B');
};

emitter.on('my-event', handlerA);
emitter.on('my-event', handlerB);

const raiseEvent = () => {
  emitter.emit('my-event');
};

raiseEvent();

const handlers = { handlerA, handlerB };

module.exports = { emitter, handlers };
