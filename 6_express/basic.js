var http = require('http');
var express = require('/usr/local/lib/node_modules/express');

var app = express();

app.use(function (request, response, next) {

//	var agent = request.header('User-Agent');
	var name = request.param('name');
	var region = request.param('region');
	
//	if (agent.toLowerCase().match(/chrome/)) {
//		response.send('<h1>Hello chrome! </h1>');
//	} else {
//		response.send('<h1>Hello Express </h1>');
//	}
	response.send('<h1>'+name+'-'+region+'</h1>');

});
http.createServer(app).listen(8080, function() {
	console.log('Server Running at http://127.0.0.1:8080');
});
