const fs = require('fs');
const data =JSON.parse(fs.readFileSync('data.json','utf-8'));
const users=data.users;

exports.create =(req,res)=>{
    const body = req.body;  // to use this we neeed to attach a parser server.use(express.json());
    console.log(req.body );
    users.push(body);
    res.sendStatus(201);

}
exports.read =(req,res)=>{
    res.json(users);
}

exports.readById =(req,res)=>{
    const id =Number( req.params.id);
    
    const p = users.find((p)=>{ 
       return p.id===id
    })
    // console.log(p);
    res.json(p);
}
exports.updateByPut= (req,res)=>{
    const id =Number( req.params.id);
    const  body= req.body;
    const  userIndex = users.findIndex(p=>p.id===id);
    users.splice(userIndex,1,{...req.body, id:id});
    res.status(201).json(users[userIndex]);
}
exports.updateByPatch= (req,res)=>{
    const id =Number( req.params.id);
    const  body= req.body;
    const  userIndex = users.findIndex(p=>p.id===id);
    users.splice(userIndex,1,{...users[userIndex],...req.body});
    res.status(201).json(users[userIndex]);
}

exports.deleteById= (req,res)=>{
    const id =Number( req.params.id);
    const  userIndex = users.findIndex(p=>p.id===id);
    users.splice(userIndex,1);
    res.status(201).json(users);
}