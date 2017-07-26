

var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('<h1>Hello World</h1>');
}).listen(8080, function() {
	console.log('Server running at http://211.110.229.199');
	console.log('filename: ', __filename);
	console.log('dirname: ', __dirname);
	console.log('output: %d ', 273);
});
