const fs = require('fs');
const data =JSON.parse(fs.readFileSync('data.json','utf-8'));
const products=data.products;

exports.create =(req,res)=>{
    const body = req.body;  // to use this we neeed to attach a parser server.use(express.json());
    console.log(req.body + "Comming");
    products.push(body);
    res.sendStatus(201);

}
exports.read =(req,res)=>{
    res.json(products);
}

exports.readById =(req,res)=>{
    const id =Number( req.params.id);
    
    const p = products.find((p)=>{ 
       return p.id===id
    })
    // console.log(p);
    res.json(p);
}
exports.updateByPut= (req,res)=>{
    const id =Number( req.params.id);
    const  body= req.body;
    const  productIndex = products.findIndex(p=>p.id===id);
    products.splice(productIndex,1,{...req.body, id:id});
    res.status(201).json(products[productIndex]);
}
exports.updateByPatch= (req,res)=>{
    const id =Number( req.params.id);
    const  body= req.body;
    const  productIndex = products.findIndex(p=>p.id===id);
    products.splice(productIndex,1,{...products[productIndex],...req.body});
    res.status(201).json(products[productIndex]);
}

exports.deleteById= (req,res)=>{
    const id =Number( req.params.id);
    const  productIndex = products.findIndex(p=>p.id===id);
    products.splice(productIndex,1);
    res.status(201).json(products);
}