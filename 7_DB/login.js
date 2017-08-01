var http = require('http');
var fs = require('fs');
var express = require('/usr/local/lib/node_modules/express');
var cookieParser = require('/usr/local/lib/node_modules/cookie-parser');
var bodyParser = require('/usr/local/lib/node_modules/body-parser');


var app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(request, response) {
	if (request.cookies.auth) {
		response.send('<h1>Login Success</h1>');
	} else {
		response.redirect('/login');
	}
});
app.get('/login', function(request, response) {
	fs.readFile('login.html', function (error, data) {
		response.send(data.toString());
	});
});
app.post('/login', function(request, response) {
	var login = request.param('login');
	var password = request.param('password');

	console.log(login, password);
	console.log(request.body);
	
	if (login == 'bobae' && password == '1217') {
		response.cookie('auth', true);
		response.redirect('/');
	} else {
		response.redirect('/login');
	}
});

http.createServer(app).listen(8080, function() {
	console.log('Server Running at http://127.0.0.1:8080');
});
