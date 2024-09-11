const express =require('express');
const path = require('path');
const fs = require('fs');
const { type } = require('os');
const exp = require('constants');
const server = express();

const data = JSON.parse(fs.readFileSync('data.json','utf-8'));

//!3. MiddleWare-> see on theory.txt

//?Application-Level Middleware
// server.use((req, res, next)=>{
//     console.log(req.get('User-Agent'),req.method,req.ip,req.hostname);  // firstly middle ware run untill we use  next() method it does not goes to next routes  or path
//     //? we use  logging also to show  information of server  through cosole.log function
//     next();
    
// })


//! Authantication -> but auth may used in login page not in complete project then we can use in a singler routes 
const auth=(req, res, next)=>{
    console.log(req.query);  //? query means those data or paarmter that are pass into url likee hhttp://kca.com?params=123  params is query
    if(req.query.password==='123')
    {
        next();
    }
    else{
        res.send(401).send("unauthorized");
    }
    
}

//? Route middleware
// server.get('/',auth,(req,res)=>{  //? we can pass middleware as a paramter  into the routes
//     res.send("this is route Middleware")
// });


//! BUild in Middle ware

//! body parser
server.use(express.json());  //it encode the request body into json format
// server.use(express.urlencoded()); // when we are send data as a url
// server.use(express.static('public')); 
 //? public is folder name that executee it self meanss this is static hosting it can execute in url from fiile name .. we can extract all the data from public folder though file name like that localhost:8000/data.json or localhhost:8000/filename
//! Post method auth
const auth2=(req, res, next)=>{
    console.log(req.body);  //? query means those data or request body that are pass into post method  
    if(req.body.password)
    {
        next();
    }
    else{
        res.send(401).send("unauthorized");
    }
    
}

server.post('/api',auth2,(req,res)=>{
    res.json({type: 'POST'})
})


//! Third  Party Middleware

//* lets take  3rd party middleware 'Morgan'   => npm i morgan
// this  is used in logging  infomation
// const morgan = require('morgan');
// server.use(morgan('dev'));
// server.use(morgan('default'));

//! 4. Topics: url  paramter

server.get('/product/:id',(req,res)=>{
    console.log(req.params);
    res.send(`${req.params.id} is a id `);
    
})

//! 1st topics 
server.get('/',(req,res)=>{
    // res.send('hello');   //? to send data into web 

    //! Complete File send to server
    // res.sendFile(path.join(__dirname,'./index.html'));  //? we can not pass relative path we have to send absolute path

    //! Api data
    // res.json(data);

    //! Send  Status
    // res.sendStatus(404);
    // res.status(201).send('harshit');  //? set default status code
});




//! 2. This is Api With  deffrent methods wee can check these api into postmann these are working or not
//? we can say this is endpoint url api  not rest api or Routes
server.get('/api',(req,res)=>{
    res.json({type: 'GET'})
})
server.post('/api',(req,res)=>{
    res.json({type: 'POST'})
})
server.put('/api',(req,res)=>{
    res.json({type: 'PUT'})
})
server.delete('/api',(req,res)=>{
    res.json({type: 'DELETE'})
})
server.patch('/api',(req,res)=>{
    res.json({type: 'PATCH'})
})





server.listen(3000,()=>{
    console.log("server started");
});