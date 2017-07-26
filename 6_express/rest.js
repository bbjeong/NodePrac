var http = require('http');
var fs = require('fs');
var express = require('/usr/local/lib/node_modules/express');
var cookieParser = require('/usr/local/lib/node_modules/cookie-parser');
var bodyParser = require('/usr/local/lib/node_modules/body-parser');

var DummyDB = (function () {
	var DummyDB = {};
	var storage = [];
	var count = 1;

	DummyDB.get = function (id) {
		id = (typeof id == 'string') ? Number(id) : id;
	
		for (var i in storage) {
			if (storage[i].id == id) {
				return storage[i];
			} else {
				return storage;
			}
		}
	};

	DummyDB.insert = function (data) {
		data.id = count++;
		storage.push(data);
		return data;
	};

	DummyDB.remove = function (id) {
		id = (typeof id == 'string') ? Number(id) : id;
	
		for (var i in storage) {
			if (storage[i].id == id) {
				storage.splice(i, 1);
				return true;
			}
		}

		return false;
	};

	return DummyDB;

})();

var app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/user', function(request, response) {
	response.send(DummyDB.get());
});

app.get('/user/:id', function (request, response) { 
	response.send(DummyDB.get(request.param('id')));
});

app.post('/user', function (request, response) {
	var name = request.param('name');
	var region = request.param('region');
	
	if (name && region) {
		response.send(DummyDB.insert({
			name:name,
			region:region
		}));
	} else {
		throw new Error('error');
	}
});

app.put('/user/:id', function (request, response) {

	var id = request.param('id');
	var name = request.param('name');
	var region = request.param('region');

	var item = DummyDB.get(id);
	item.name = name || item.name;
	item.region = region || item.region;

	response.send(item);

});

app.delete('/user/:id', function (request, response) {
	response.send(DummyDB.remove(request.param('id')));
});

http.createServer(app).listen(8080, function() {
	console.log('Server Running at http://127.0.0.1:8080');
});
