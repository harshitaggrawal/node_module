const model = require('../Models/products');
const Product = model.Product;

// console.log(products);
exports.create = (req, res) => {
    const product = new Product(req.body); //? we are creating  instance of project when we create products only


    //    //? Mannulally entry 
    //    product.title='Readme not 10S'
    //    product.price=10500;
    //    product.rating=5;
    //    product.save(); //! to save data into db

    product.save()
        .then((doc) => {
            console.log(doc);
            res.status(201).json(doc);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });

}


exports.read = async (req, res) => {
    const products = await Product.find();
    // const products = await Product.find({price:549});  //! Conditions 

    res.json(products);
}

exports.readById = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id).exec(); //? we can use findOne also
    res.json(product);
}


exports.updateByPut =async (req, res) => {
    const id =(req.params.id);
    const body = req.body;
   const response=await Product.findOneAndReplace(id, body)  //! not rujnning
    res.status(201).json(response);
}
exports.updateByPatch = async (req, res) => {
    const id =(req.params.id);
    const body = req.body;
   const response=await Product.findByIdAndUpdate(id, body)
    res.status(201).json(response);
}

exports.deleteById =async (req, res) => {
    const id = (req.params.id);
    const data=await Product.findByIdAndDelete(id)
    res.status(201).json(data);
}