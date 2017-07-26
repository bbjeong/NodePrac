var fs = require('fs');

var text = fs.readFile('text.txt', 'utf-8', function (error, data) {
	console.log(data);
});
