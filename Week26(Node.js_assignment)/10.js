const EventEmitter = require('events');


const myEmitter = new EventEmitter();

const defaultMaxListeners = EventEmitter.defaultMaxListeners;

console.log('The default maximum number of event listeners are :', defaultMaxListeners);

myEmitter.setMaxListeners(5);

console.log('The updated maximum number of event listeners are :', myEmitter.getMaxListeners());
