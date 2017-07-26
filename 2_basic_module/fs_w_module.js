var fs = require('fs');

var data = 'hello hahahah';

fs.writeFile('text.txt', data, 'utf8', function (error) {
	console.log('Write file async complete');
});

fs.writeFileSync('text.txt', data, 'utf8');
console.log('Write file sync complete');
