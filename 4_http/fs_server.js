

var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {

	fs.readFile('test_page.html', function(error, data) {
		response.writeHead(200, {'Content-Type':'text/html'});
		response.end(data);
	});
}).listen(8080);
