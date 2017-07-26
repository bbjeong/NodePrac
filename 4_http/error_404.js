
require('http').createServer(function (request, response) {
	response.writeHead(404);
	response.end();
}).listen(8080);
