//! File Module:

const fs=require('fs');


//? 1. synchronous

//* mkdirSync('folderName'): used to create a folder if folder does not exits otherwise give error
// fs.mkdirSync('testing');
// fs.mkdirSync('../testing');

//* rmdirSync('folderName') : used to delete a folder

// fs.rmdirSync('testing');
// fs.rmdirSync('../testing');

//* writeFileSync('fileName with ext','what we want to write') : create a new file if it does not exists,and if it file is already exits it delete all the content of fileand re-write data into it..

// fs.writeFileSync('testing.txt','This is ur  file');
//  fs.writeFileSync('testing.txt','This is Harshit');


//* appendFileSync() :crete a new file if file doesn't exists ,andd if file is already exists it write data after old data.  we can make all type of file

// fs.appendFileSync('testing1.txt','This is new file');
// fs.appendFileSync('testing1.txt','This is new file with new words');
// fs.appendFileSync('new.js', "console.log('this is append method')");

//* readFileSync(): read a file and return data it we dont use any encoding then data is return in buffer format , to encode use 'utf-8'.  it return data into buffers means we tranfer dtaa  into packets or chunks .

// let  data =fs.readFileSync('testing.txt');
// console.log(data);  it return buffer data 

// let newData = fs.readFileSync('testing1.txt','utf-8');
// console.log(newData);


//*fs.renameSync(): used to rename a file.

// fs.renameSync('testing.txt','rename.txt');

//* unlinkSync(): used to delete a file.

// fs.unlinkSync('rename.txt');



//? Asynchronous

//* mkdir() : used to create a folder if folder does not exits otherwise throw error is folder exists or invalid.

// fs.mkdir('testing',(error)=>{
//     console.log(error);
// })

//* rmdir('folderName') : used to delete a folder

// fs.rmdir('testing',(e)=>{
//     console.log(e);
// })


//* writeFile('fileName with ext','what we want to write') : create a new file if it does not exists,and if it file is already exits it delete all the content of fileand re-write data into it..

// fs.writeFile('testing.txt','Harshit',(e)=>{
//     console.log(e);
// })

//* appendFile() :crete a new file if file doesn't exists ,andd if file is already exists it write data after old data.  we can make all type of file 

// fs.appendFile('testing.txt', "Sakshi", (e)=>{
//     console.log(e);
// })

//* readFile(): read a file and return data it we dont use any encoding then data is return in buffer format , to encode use 'utf-8'.  it return data into buffers means we tranfer dtaa  into packets or chunks .

// fs.readFile('testing.txt','utf-8', (e, data)=>{
//     console.log(e);
//     console.log(data);
// })


//*fs.rename(): used to rename a file.

// fs.rename('testing.txt','rename.txt',(e)=>{
//     console.log(e);
// });

//* unlink(): used to delete a file.

fs.unlink('rename.txt',(e)=>{
    console.log(e);
});
