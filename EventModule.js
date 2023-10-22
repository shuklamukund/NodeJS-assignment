const events=require('events');

const eventEmitter=new events();

eventEmitter.on('subscribe',()=>{
    console.log('User subscribed successfully');
});
eventEmitter.emit('subscribe');
eventEmitter.emit('');

console.log(events.defaultMaxListeners);
events.defaultMaxListeners=5;
console.log(events.defaultMaxListeners);