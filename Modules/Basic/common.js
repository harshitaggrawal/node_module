const  importDataObject =require('./index');

console.log(importDataObject);
let {items,testing,myclass}=importDataObject;  // destruction of object or we can use as a .notation method 
function allitems(arr)
{
    arr.forEach(element => {
        console.log(element);
    });
}

allitems(items);
testing(items);

