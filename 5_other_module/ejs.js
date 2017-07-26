var http = require('http');
var fs = require('fs');
//var ejs = require('/usr/local/lib/node_modules/ejs');
var ejs = require('ejs');

http.createServer(function (request, response) {
	fs.readFile('ejs_page.ejs', 'utf8', function (error, data) {
		response.writeHead(200, {'Content-Type':'text/html'});
		response.end(ejs.render(data, {
			name: 'Bobae',
			description: 'Hi This is bobae yo'
		}));
	});
}).listen(8080, function() {
	console.log('Server Running at http://127.0.0.1:8080');
});
