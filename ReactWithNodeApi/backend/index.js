const express = require('express');
const server = express();
const cors = require('cors');
const mongoose = require('mongoose');
//! Data base Connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');  //? Ecommerce is a db name 
  console.log('Database Connected');
}

server.use(express.static('build')); 

server.use(express.json());
server.use(cors());   //to use two poet no.in same project maans we use diffternt port for  react and  diffrent for backend
const productRouter = require('./Routes/productRoute')
const userRouter = require('./Routes/userRoute')
server.use('/api/products', productRouter.router); /// wee  are using body parser in middleware to say server we are using router in a path
server.use('/api/users', userRouter.router);

server.get('/',(req,res)=>{ 
  res.sendFile(path.join(__dirname,'./build/index.html'));  
});

server.listen(8080);