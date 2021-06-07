const http = require('http');
//create a server object:
http.createServer(function(req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
//http://localhost:8080
//when you search above link then it will show the hello world

var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    fs.readFile('testt.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);