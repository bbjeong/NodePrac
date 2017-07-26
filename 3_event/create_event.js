
//var custom = new process.EventEmitter();
var util = require('util');
var event = require('events');

function MyTest() { 
	event.call(this);
}

util.inherits(MyTest, event);
var myTest = new MyTest();

myTest.on('tick', function() {
	console.log('이벤트를 실행합니다.');
});


myTest.emit('tick');
