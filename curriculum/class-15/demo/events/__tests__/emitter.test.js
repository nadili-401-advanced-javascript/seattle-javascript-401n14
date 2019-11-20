'use strict';

const emitter = require('../emitter.js').emitter;
const handlers = require('../emitter.js').handlers;

describe('it emits something', () => {
  it('console logs when emit', () => {
    //console.log(handlers.handlerA);
    const spy = jest.spyOn(console, 'error');

    emitter.emit('my-event');

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});
