var fs = require('fs');

try {
	var data = fs.readFileSync('text.txt', 'utf8');
	console.log(data);
} catch(e) {
	console.log(e);
}

try {
	fs.writeFileSync('text.txt', 'hello world', 'utf8');
	console.log('file write complete');
} catch(e) {
	console.log(e);
}
