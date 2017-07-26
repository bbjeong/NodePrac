
var http = require('http');

var server = http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type':'text/html'});
	response.end('<h1>Hello World</h1>');
});

server.on('request', function() {
	console.log('Request On');
});

server.on('connection', function() {
	console.log('Connection on');
	
});

server.on('close', function() {
	console.log('Close on');
});

server.listen(8080);
