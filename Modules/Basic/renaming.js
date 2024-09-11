const  importDataObject =require('./index');

// console.log(importDataObject);
let {items:i,testing:t,myclass:c}=importDataObject;  // destruction of object with new name 
function allitems(arr)
{
    arr.forEach(element => {
        console.log(element);
    });
}

allitems(i);
t(i);


