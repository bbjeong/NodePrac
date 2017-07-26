
var count = 0;
var rint = require('./rint');

rint.timer.on('tick', function(){
	count++;
	console.log('event start ', count);
});
