//! OS module :  the node  os module provides operating system related utility methods and properties

const { freemem, totalmem } = require("os");
let os=require('node:os');

//? 1. freemem()  --> return total free memory in RAM
//* it return total free bytes in main memory
// console.log(freemem()/1024/1024/1024);  //  in GB

//? 2. totalmem()  --> return total memory in RAM 
//* it return total no. of bytes in main memory

console.log(totalmem()/1024/1024/1024);


//? 3. os.homedir()  --> return home directory of user
console.log(os.homedir());

//? 4. os.platform()   --> return platform of os
console.log(os.platform());


//? 5. os.arch()  --> return Architure of os
console.log(os.arch());


//? 6. os.uptime()  --> return time from window  on  in  a sec
console.log(os.uptime()/60/60);


//? 7. os.userInfo()   --> return user information
console.log(os.userInfo());


//? 8. os.version()  --> return version of os
console.log(os.version());


//? 9. os.cpus()   --> return info about processor
console.log(os.cpus());


//?10. os.release()   --> return the os release version
console.log(os.release());


//?11. os.type()   --> return the os name by type
console.log(os.type());
