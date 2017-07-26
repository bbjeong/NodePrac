var http = require('http');
var fs = require('fs');
var express = require('/usr/local/lib/node_modules/express');
var cookieParser = require('/usr/local/lib/node_modules/cookie-parser');
var bodyParser = require('/usr/local/lib/node_modules/body-parser');
var multipart = require('/usr/local/lib/node_modules/connect-multiparty');

var app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(multipart({uploadDir: __dirname+'/multipart'}));

app.get('/', function(request, response) {
	fs.readFile('upload.html', function (error, data) {
		response.send(data.toString());
	});
});

app.post('/', function(request, response) {

	console.log(request.body);
	console.log(request.files);
	response.redirect('/');
	
});

http.createServer(app).listen(8080, function() {
	console.log('Server Running at http://127.0.0.1:8080');
});
