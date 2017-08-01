var http = require('http');
var fs = require('fs');
var ejs = require('/usr/local/lib/node_modules/ejs');
var mysql = require('/usr/local/lib/node_modules/mysql');
var bodyParser = require('/usr/local/lib/node_modules/body-parser');
var express = require('/usr/local/lib/node_modules/express');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var client = mysql.createConnection({
	user:'root',
	password:'bobae0511',
	database:'bbtest'
});

http.createServer(app).listen(8080, function() {
	console.log('Server Running at http://127.0.0.1:8080');
});

app.get('/', function (req, res) {

	fs.readFile('list.html', 'utf8', function (error, data){
		client.query('select * from users', function (error, results) {
			res.send(ejs.render(data, {
				data: results
			}));
		});
	});
});

app.get('/delete/:id', function (req, res) {
	client.query('delete from users where id = ?', [req.params.id], function() {
		res.redirect('/');
	});
});

app.get('/insert', function (req, res) {
	fs.readFile('insert.html', 'utf8', function (error, data) {
		res.send(data);
	});
});

app.post('/insert', function (req, res) {
	var body = req.body;
	client.query('insert into users values(?, ?, ?)', [body.id, body.name, body.password], function () {
		res.redirect('/');	
	});
});

app.get('/edit/:id', function (req, res) {
	fs.readFile('edit.html', 'utf8', function (error, data) {
		
		client.query('select * from users where id = ?', [req.params.id], function (error, result) {
			res.send(ejs.render(data, {
				data:result[0]	
			}));
		});
	});
});

app.post('/edit/:id', function (req, res) {
	var body = req.body;
	client.query('update users set name = ?, password = ? where id = ?', [body.name, body.password, req.params.id], function () {
		res.redirect('/');
	});
});
