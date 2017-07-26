var http = require('http');
var express = require('/usr/local/lib/node_modules/express');

var app = express();

//app.use(express.logger());
//바뀌어서 이제 바로 get put 쓰면됨
//app.use(app.router);

app.get('/a', function(request, response) {
	response.send('<a href="/b">Go to B</a>');
});
app.get('/b', function(request, response) {
	response.send('<a href="/a">Go to A</a>');
});
app.get('/page/:id', function(request, response) {
	var name = request.param('id');
	response.send('<h1>'+name+'</h1>');
});

http.createServer(app).listen(8080, function() {
	console.log('Server Running at http://127.0.0.1:8080');
});
