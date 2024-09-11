const mongoose = require('mongoose');
const { Schema } = mongoose;

//! In schemas we apply validation or  say to server of db which type of data we are storeing or retrive from db 
//? add those key what we want to retrive add upadte from the db
const productSchema = new Schema({
    title: {
        type: String,
        required: true
      },
    description: {
        type: String,
        // required: true  //? means this is compulsary
      },
    price:{
        type: Number,
       
      },
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category:String,
    thumbnail:String,
    images:[String],
  });

  const Product = mongoose.model('Product', productSchema); ///?  Product is our collection name it will make as a purular form 

  exports.Product=  Product;