const http = require('http');
const { arrayBuffer } = require('stream/consumers');

const server = http.createServer((req, res) =>{
    let body = [Buffer.from("a user"), Buffer.from("a login")];
    req.on('data', (chunk) =>{
        body.push(chunk);
    }).on('end', ()=>{
        body = Buffer.concat(body).toString();
        console.log(body);
    });


    res.write("Hello from server!");
    res.end();
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log('listening to requests on port 8080');
});
