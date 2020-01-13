var http = require("http");

http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'application/json'});
   //response.writeHead(301, {'Location': "http://" + request.headers['host'] + '/index.html' });
    'use strict';


    var fileSystem = require('fs');

    fileSystem.readFile('./todo.json' , callback);
    
    function callback(err, data) {
        if (err) return console.error(err);
        console.log( data.toString() );
    }

   //let jsonData = require('./todo.json');

   response.end(console.log("hi"));
}).listen(3000);

console.log('Server running at http://localhost:3000/todo');