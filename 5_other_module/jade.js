var http = require('http');
var fs = require('fs');
var jade = require('/usr/local/lib/node_modules/jade');

http.createServer(function (request, response) {
	fs.readFile('jade_page.jade', 'utf8', function (error, data) {
		response.writeHead(200, {'Content-Type':'text/html'});
		var fn = jade.compile(data);
		response.end(fn());
	});
}).listen(8080, function() {
	console.log('Server Running at http://127.0.0.1:8080');
});
