const express = require('express');
const server = express();

const mongoose = require('mongoose');
//! Data base Connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');  //? Ecommerce is a db name 
  console.log('Database Connected');
  
}


server.use(express.json());
const productRouter = require('./Routes/productRoute')
const userRouter = require('./Routes/userRoute')
server.use('/api/products', productRouter.router); /// wee  are using body parser in middleware to say server we are using router in a path
server.use('/api/users', userRouter.router);




server.listen(3000);