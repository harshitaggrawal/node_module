const http = require('http');
const fs = require('fs');
const path = require('path');


let server = http.createServer((request, response) => {
    let url = request.url;
    

    //! Form submission
    if(url=='/form' && request.method=='POST'){
        console.log("form is submit");

        //? 1st method
        // request.on('data',(chunk)=>{
        //     console.log(chunk.toString());
        // })

        //? 2nd method
        let data ="";
        request.on('data',(chunks)=>{
            data+=chunks;

        })
        request.on('end',()=>{
            console.log(data);
            fs.appendFileSync('data.txt',data);
        })

        //? for error  check
        request.on('error',(error)=>{
            console.log(error);
        })
    }
    
    switch (url) {
        case '/':
            response.setHeader('Content-type', 'text/html');
            let data = fs.readFileSync(path.join(__dirname, '/views', 'index.html'), 'utf-8');
            return response.end(data);

        case '/about':
            response.setHeader('Content-type', 'text/html');
            let about = fs.readFileSync(path.join(__dirname, '/views', 'about.html'), 'utf-8');
            return response.end(about);

        case '/contact':
            response.setHeader('Content-type', 'text/html');
            let contact = fs.readFileSync(path.join(__dirname, '/views', 'contact.html'), 'utf-8');
            return response.end(contact);

        default:
            response.setHeader('Content-type', 'text/html');
            let pagenotfound = fs.readFileSync(path.join(__dirname, '/views', 'pagenotfound.html'), 'utf-8');
            return response.end(pagenotfound);
    }       
})

server.listen(process.env.PORT || 3000, () => {
    console.log(server.address);
})