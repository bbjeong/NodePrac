
var util = require('util');
var event = require('events');

function MyTest() { 
	event.call(this);
}

util.inherits(MyTest, event);
exports.timer = new MyTest();

setInterval(function() {
	exports.timer.emit('tick');
}, 1000);
