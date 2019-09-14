const io = require('socket.io-client');

class Q {
  constructor() {
    // How can we automatically reconnect and re-subscribe if the Q server dies?
    this.socket = io.connect('http://localhost:3001');
  }

  subscribe(queue) {
    let payload = JSON.stringify({ queue: queue });
    this.socket.emit('subscribe', payload, response => {
      console.log('Subscribed to queue', response);
    });
  }

  listen(event, callback) {
    this.socket.on(event, callback);
  }

  list() {
    return new Promise((resolve, reject) => {
      this.socket.emit('list', '', list => {
        resolve(list.message);
      });
    });
  }

  subscriptions() {
    return new Promise((resolve, reject) => {
      this.socket.emit('subscriptions', '', list => {
        resolve(list.message);
      });
    });
  }

  unsubscribe(queue) {
    return new Promise((resolve, reject) => {
      let message = { queue: queue };
      let payload = JSON.stringify(message);
      this.socket.emit('unsubscribe', payload, result => {
        if (result.status === true) {
          resolve(result);
        } else {
          reject(result);
        }
      });
    });
  }

  unsubscribeAll() {
    return new Promise((resolve, reject) => {
      this.socket.emit('unsubscribeAll', '', result => {
        if (result.status === true) {
          resolve(result);
        } else {
          reject(result);
        }
      });
    });
  }
}

module.exports = new Q();
