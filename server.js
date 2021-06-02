const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    const header = req.header;
    console.log(url);
    console.log(method);
    console.log(header);
    if (url==='/'){
        res.write('<html>');
        res.write('<head><title>Enter message</title><head>');
        res.write('<body><h1>Home page</h1></body>');
        res.write('</html>');
        return res.end();
        //node js primarly used for non blocking 
    }
    if (url==='/home'){
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><h1>welcome home</h1></body>');
        res.write('<html>');
        return res.end();

    }
    if (url==='/about'){
        res.write('<html>');
        res.write('<head><title>enter message</title></head>');
        res.write('<body><h1>welcome to about us page</h1></body>');
        res.write('</html>')
        return res.end();
    }

    if (url==='/node'){
        res.write('<html>');
        res.write('<head><title>enter message</title></head>');
        res.write('<body><h1>welcome</h1></body>');
        res.write('</html>');
        return res.end();
    }

});
server.listen(80);
