
process.on('exit', function() {
	console.log('빠욤>.<');
});

process.on('uncaughtException', function(error) {
	console.log('예외발생 ');
});

var count = 0;
var id = setInterval(function() {
	count++;
	console.log('count : ', count);

	if (count == 3) { clearInterval(id); }

	error.error.error('^^');
}, 2000);
