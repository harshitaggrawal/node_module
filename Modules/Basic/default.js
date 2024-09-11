const items =require('./index').default;


function allitems(arr)
{
    arr.forEach(element => {
        console.log(element);
    });
}

allitems(items);


