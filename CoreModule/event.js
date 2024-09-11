const {EventEmitter} = require('events');

class MyEvent extends EventEmitter{}

let myEvent=new MyEvent;  //? Object
let myNewEvent = new EventEmitter;  //? we can make this into 2 types 


myEvent.on('firstEvent',()=>{
    console.log("Fisrt Event Trriggered");
});


myEvent.emit('firstEvent');   //? we are calling first event

//? we also can pass data into evets its working like  a onClick function
//? we can also make events with same name it working like a array .

myEvent.on('firstEvent',(data)=>{
    console.log(data);
})

myEvent.emit('firstEvent','This is data');

//? if we are using myEvent.once then it execute only one time

myEvent.once('OnceEvent',()=>{
    console.log("Once Event Trriggered");
});

myEvent.emit('OnceEvent'); 


//! Question Make custom Events 