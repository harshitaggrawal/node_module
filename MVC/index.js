const express = require('express');
const server = express();
console.log("server started");
server.use(express.json());
const productRouter = require('./Routes/productRoute')

const userRouter = require('./Routes/userRoute')
server.use('/api/products', productRouter.router); /// wee  are using body parser in middleware to say server we are using router in a path
//? we can make router chainable
server.use('/api/users', userRouter.router);

// //! Rest Api
// //? CRUD API-> create, read, update


// //? CREATE API -> POST API
// server.post('/products',create)

// //?READ GET API  /PRODUCTS
// server.get('/products',read)

// //? REad APi get  with id or categories
// server.get('/products/:id',readById)

// //! Update api -> if  we are using put then it overwrite and patch replace only those key that are avlibe is body
// //? PUT API FOR UPDATE  KEY
// server.put('/products/:id',updateByPut)

// //? PATCH API TO CHNAGE  ONLY THESE KEY THAT ARE IN REQ BODY

// server.patch('/products/:id',updateByPatch)


// //? DELETE API 
// server.delete('/products/:id',deleteById);

server.listen(3000);