const http = require('http');   // Http module is used to make server we use this server to making routes  .
//? if we are changing somthing then we have to restart server other we have  to install nodemon package => npm i nodemon -g 
//? to start server then we have to write nodemon filename

let  server =  http.createServer((request,response)=>{
    // console.log(request);
    // console.log(response);
    // response.end("Hello ");
    // response.end("<h1>Heelo World </h1>"); 
    //? to set Header 
    // response.setHeader("content-type",'text/html');
    // response.end("<h1>Heelo World </h1>"); 

    //? Routs making 

    // if(request.url==='/')
    // {
    //     response.setHeader("content-type",'text/html');
    // retrun response.end("<h1>Home Page </h1>"); 
    // }
    // else if(request.url==='/about-us')
    //     {
    //         response.setHeader("content-type",'text/html');
    //       return  response.write("<h1>About Page </h1>");   //! we use write to disply multiple data and we use nd to dispky single data
    //     }
    // else if(request.url==='/contact')
    //     {
    //       return  response.setHeader("content-type",'text/html');
    // response.end("<h1>Contact Page </h1>"); 
    // }
    // else{
    //     response.setHeader("content-type",'text/html');
    // return response.end("<h1>Error Page </h1>"); 
    // }


    //! How we make api
    if(request.url==='/data')
    {
        let data ={
            name:'Harshit',
            lastName:"Singhal",
            Age:22
        }
        response.setHeader('content-type','application/json');
        response.end(JSON.stringify(data));
    }

    
}) 

// server.listen(3000,()=>{
//     console.log(server.address());
// })

server.listen(process.env.PORT || 3000, ()=>{
    console.log(server.address);
})


/*
https://keenCaptainAnalytics.com
https: protol 
keenCaptainanalytics :  Domain Name Server DNS  iske ander hi hota h IP address or this is unique

*/