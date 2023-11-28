const EventEmitter = require('events');


const eventEmitter = new EventEmitter();

const subscribeHandler = (username) => {
    console.log(`Thanks for Subscribing to ${username}`);
};

eventEmitter.on('subscribe', subscribeHandler);

const username = 'College Wallah';
eventEmitter.emit('subscribe', username);


