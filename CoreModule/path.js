//! PATH ->  the path module provides a way of working with directories and file path.. 

const { log } = require("console");
const path = require("path");

//? 1. __dirname
console.log(__dirname);

//? 2. __filename
console.log(__filename);


//? 3.  path.basename(filepath);  --> returns the file name with extension
console.log(path.basename(__filename));

// console.log(path.join(__dirname,'./index.html'));
//? 

//? 4. path.dirname(directorypath/filepath)   --> return directory name of any file
console.log(path.dirname(__filename));

//? 5. path.extname(filepath)     --> return the file extension name 
console.log(path.extname(__filename));

//? 6. path.resolve(directoryname, "filename")  --> return resolve path and make path if it available
console.log(path.resolve(__dirname,'testing.js'));
console.log(path.resolve(__dirname,'../','testing.js'));


//? 7. path.isAbsolute(path)  -> return true if  path is absolute otherwise return false if path is relative 
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('node\\module'));




