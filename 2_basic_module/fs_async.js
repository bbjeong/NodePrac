
var fs = require('fs');

fs.readFile('text.txt', 'utf8', function (error,data) {
	if (error) {
		console.log(error);
	} else {
		console.log('read File');
		console.log(data);
	}
});

fs.writeFile('text.txt', 'hello~~', 'utf8', function (error) {
	if (error) {
		console.log(error);
	} else {
		console.log('File write 끝');
	}
});
	
