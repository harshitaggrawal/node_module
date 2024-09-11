const  items =['breakfast','lunch','dinner'];

const testing= (items)=>{
    console.log(items);
}

class myclass{

}

module.exports={
    items,
    testing,
    myclass

}



// module.exports={
//     default:items
// }

// module.exports=items;   //? without default  export but not normal export  

//! Export Renameing
module.exports={
    i: items,
    f: testing,
    cl: myclass
 
}