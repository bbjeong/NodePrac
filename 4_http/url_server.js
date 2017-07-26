

var fs = require('fs');
var http = require('http');
var url = require('url');

http.createServer(function (request, response) {

	var pathname = url.parse(request.url).pathname;

	if (pathname == '/') {
		fs.readFile('test_page.html', function(error, data) {
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end(data);
		});
		
	} else if (pathname == '/OtherPage') {
		fs.readFile('other_page.html', function(error, data) {
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end(data);
		});
	}
}).listen(8080);
