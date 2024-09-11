const express =require('express');
const path = require('path');
const fs = require('fs');


const server = express();

server.use(express.static('public')); 
server.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'./views/index.html')); 
})

server.get('/notfound',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/404.html')); 
})

server.get('/blogs',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/blog-single.html')); 
})

server.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/contact.html')); 
})

server.get('/portfolio',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/portfolio-details.html')); 
})

server.listen(3000,()=>{
    console.log("server started");
});